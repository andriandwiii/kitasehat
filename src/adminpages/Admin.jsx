import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar1';

const UserListPage = () => {
  const [users, setUsers] = useState([]); // State untuk daftar pengguna
  const [loading, setLoading] = useState(true); // State loading
  const [error, setError] = useState(null); // State error

  // Fetch data dari API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/users');
        if (response.data && response.data.data) {
          setUsers(response.data.data); // Sesuai dengan struktur data
        } else {
          throw new Error('Struktur data tidak valid.');
        }
      } catch (err) {
        console.error('Error:', err);
        setError('Gagal memuat daftar pengguna. Silakan coba lagi.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Hapus pengguna
  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus pengguna ini?')) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/users/${id}`);
        setUsers(users.filter((user) => user.id !== id));
        alert('Pengguna berhasil dihapus.');
      } catch (err) {
        console.error('Error:', err);
        alert('Gagal menghapus pengguna.');
      }
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen">{error}</div>;
  }

  return (
    <>
      <Navbar />
      <main className="flex justify-center p-4 sm:p-8 bg-gray-100 min-h-screen">
        <div className="max-w-screen-2xl w-full bg-white p-6 sm:p-8 rounded-lg shadow">
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-0">Daftar Pengguna</h1>
            <Link
              to="/addusers"
              className="bg-green-500 text-white px-4 py-2 rounded flex items-center"
            >
              <i className="fas fa-plus mr-2"></i> Tambah Pengguna Baru
            </Link>
          </header>
          <p className="text-gray-500 mb-6">{users.length} Pengguna Tersedia</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead>
                <tr className="text-gray-500 text-sm">
                  <th className="py-3 px-4">ID</th>
                  <th className="py-3 px-4">Nama</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-t text-sm">
                    <td className="py-3 px-4">{user.id}</td>
                    <td className="py-3 px-4">{user.name}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">{user.role}</td>
                    <td className="py-3 px-4 flex flex-wrap space-x-2">
                      <Link
                        to={`/updateusers/${user.id}`}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default UserListPage;
