import React, { useState } from 'react';

const ContentForm = () => {
  const [formData, setFormData] = useState({
    nama_obat: '',
    deskripsi: '',
    user_id: '',
    image_name: '',
    image: null
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        alert('Hanya file gambar yang diperbolehkan (JPEG, PNG, GIF, WebP)');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert('Ukuran gambar maksimal 5MB');
        return;
      }

      setFormData(prevState => ({
        ...prevState,
        image: file,
        image_name: file.name
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setFormData(prevState => ({
      ...prevState,
      image: null,
      image_name: ''
    }));
    setImagePreview(null);
    if (document.getElementById('image-upload')) {
      document.getElementById('image-upload').value = '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitFormData = new FormData();
    submitFormData.append('nama_obat', formData.nama_obat);
    submitFormData.append('deskripsi', formData.deskripsi);
    submitFormData.append('user_id', formData.user_id);
    submitFormData.append('image_name', formData.image_name);
    if (formData.image) {
      submitFormData.append('image', formData.image);
    }

    console.log('Data Form yang akan dikirim:', Object.fromEntries(submitFormData));
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center' }}>Tambah Obat Baru</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <label>
          Nama Obat
          <input
            type="text"
            name="nama_obat"
            value={formData.nama_obat}
            onChange={handleChange}
            placeholder="Masukkan nama obat"
            required
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </label>

        <label>
          Deskripsi
          <input
            type="text"
            name="deskripsi"
            value={formData.deskripsi}
            onChange={handleChange}
            placeholder="Masukkan deskripsi obat"
            required
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </label>

        <label>
          ID Pengguna
          <input
            type="text"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
            placeholder="Masukkan ID pengguna"
            required
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </label>

        <label>
          Nama Gambar
          <input
            type="text"
            name="image_name"
            value={formData.image_name}
            onChange={handleChange}
            placeholder="Masukkan nama gambar"
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </label>

        <label>
          Unggah Gambar
          <input
            type="file"
            id="image-upload"
            accept="image/jpeg,image/png,image/gif,image/webp"
            onChange={handleImageChange}
            style={{ marginTop: '8px' }}
          />
          {imagePreview && (
            <div style={{ position: 'relative', marginTop: '16px' }}>
              <img
                src={imagePreview}
                alt="Pratinjau Gambar"
                style={{ width: '100%', maxHeight: '150px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <button
                type="button"
                onClick={removeImage}
                style={{ position: 'absolute', top: '8px', right: '8px', background: 'red', color: '#fff', border: 'none', borderRadius: '50%', padding: '8px' }}
              >
                X
              </button>
            </div>
          )}
        </label>

        <button type="submit" style={{ padding: '10px', background: '#4CAF50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Tambah Obat
        </button>
      </form>
    </div>
  );
};

export default ContentForm;
