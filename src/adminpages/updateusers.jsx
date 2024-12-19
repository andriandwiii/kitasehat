import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/users/${id}`)
      .then((response) => {
        const user = response.data.data;
        setFormData({
          name: user.name,
          email: user.email,
          role: user.role,
        });
      })
      .catch((err) => {
        setError(err.response?.data?.message || 'Gagal memuat detail pengguna.');
      });
  }, [id]);

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
      const response = await axios.put(`http://127.0.0.1:8000/api/users/${id}`, formData);
      setMessage('Data pengguna berhasil diperbarui!');
      setError('');

      // Tampilkan alert dan navigasikan ke halaman admin
      alert(response.data.message || 'Data pengguna berhasil diperbarui!');
      navigate('/admin');
    } catch (err) {
      setError('Terjadi kesalahan saat memperbarui data pengguna.');
      setMessage('');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center' }}>Update Pengguna</h1>
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
          Update Pengguna
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
