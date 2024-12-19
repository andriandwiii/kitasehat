import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users', formData);
      setMessage('User berhasil didaftarkan!');
      setError('');
      setFormData({
        name: '',
        email: '',
        role: '',
        password: '',
      });
      // Show alert on success
      window.alert('User berhasil didaftarkan!');
      // Redirect to admin page
      window.location.href = '/admin'; // Change '/admin' to the correct path if needed
    } catch (err) {
      console.error(err);
      setError('Terjadi kesalahan saat mendaftarkan user.');
      setMessage('');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center' }}>Registrasi Pengguna</h1>
      {message && <p style={{ color: 'green', textAlign: 'center' }}>{message}</p>}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <label>
          Nama
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Masukkan nama lengkap"
            required
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Masukkan alamat email"
            required
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </label>

        <label>
          Role
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          >
            <option value="">Pilih role</option>
            <option value="umum">Umum</option>
            <option value="admin">Admin</option>
            <option value="doctor">Doctor</option>
            <option value="apoteker">Apoteker</option>
          </select>
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Masukkan password"
            required
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
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
          }}
        >
          Daftar
        </button>
      </form>
    </div>
  );
};

export default UserForm;
