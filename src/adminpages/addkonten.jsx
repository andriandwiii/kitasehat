import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    user_id: '',
    image: null,
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        setError('Hanya file gambar yang diperbolehkan (JPEG, PNG, GIF, WebP)');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setError('Ukuran gambar maksimal 5MB');
        return;
      }

      setFormData(prevState => ({
        ...prevState,
        image: file,
      }));
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('user_id', formData.user_id);
    if (formData.image) {
      data.append('image', formData.image);
    }

    try {
      await axios.post('http://127.0.0.1:8000/api/konten', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Konten berhasil dibuat!');
      window.location.href = '/admin4';
    } catch (err) {
      console.error(err);
      setError('Terjadi kesalahan saat membuat konten.');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center' }}>Tambah Konten Baru</h1>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <label>
          Judul
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Masukkan judul konten"
            required
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </label>

        <label>
          Deskripsi
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Masukkan deskripsi konten"
            required
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </label>

        <label>
          User ID
          <input
            type="text"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
            placeholder="Masukkan User ID"
            required
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </label>

        <label>
          Gambar
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            style={{ marginTop: '8px' }}
            accept="image/jpeg,image/png,image/gif,image/webp"
          />
        </label>

        <button type="submit" style={{ padding: '10px', background: '#4CAF50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ItemForm;