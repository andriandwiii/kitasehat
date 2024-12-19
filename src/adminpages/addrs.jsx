import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const ItemForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    description: '',
    user_id: '',
    image: null,
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate(); // Initialize the navigate function from react-router-dom

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        setError('Only image files are allowed (JPEG, PNG, GIF, WebP)');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setError('Maximum image size is 5MB');
        return;
      }

      setFormData((prevState) => ({
        ...prevState,
        image: file,
      }));
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('address', formData.address);
    data.append('description', formData.description);
    data.append('user_id', formData.user_id);
    if (formData.image) {
      data.append('image', formData.image);
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/rumah-sakit', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Rumah sakit berhasil dibuat!');
      setError('');
      setFormData({
        name: '',
        address: '',
        description: '',
        user_id: '',
        image: null,
      });

      if (window.confirm(response.data.message || 'Rumah sakit berhasil dibuat!')) {
        navigate('/admin3'); // Redirect to /admin3 after confirming the alert
      }
    } catch (err) {
      console.error(err);
      setError('Terjadi kesalahan saat membuat rumah sakit.');
      setMessage('');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center' }}>Tambah Rumah Sakit</h1>
      {message && <p style={{ color: 'green', textAlign: 'center' }}>{message}</p>}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <label>
          Nama Rumah Sakit
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Masukkan nama rumah sakit"
            required
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </label>

        <label>
          Alamat
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Masukkan alamat rumah sakit"
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
            placeholder="Masukkan deskripsi rumah sakit"
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

        <button
          type="submit"
          style={{
            padding: '10px',
            background: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '16px',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ItemForm;
