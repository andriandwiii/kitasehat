import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Navbar from '../components/navbar1';

const ListContent = () => {
  const [contents, setContents] = useState([]); // State untuk daftar konten
  const [loading, setLoading] = useState(true); // State loading
  const [error, setError] = useState(null); // State error

  // Mendapatkan data konten dari API
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/konten') // Endpoint API untuk konten
      .then((response) => {
        setContents(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Gagal memuat daftar konten.');
        setLoading(false);
      });
  }, []);

  // Menghapus konten
  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus konten ini?')) {
      axios
        .delete(`http://127.0.0.1:8000/api/konten/${id}`)
        .then(() => {
          setContents(contents.filter((content) => content.id !== id));
          alert('Konten berhasil dihapus.');
        })
        .catch(() => {
          alert('Gagal menghapus konten.');
        });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Navbar />
      <main className="flex justify-center p-8 bg-gray-100 min-h-screen">
        <div className="max-w-screen-2xl w-full bg-white p-6 rounded-lg shadow">
          <header className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Daftar Konten</h1>
            <Link 
              to="/addkonten" 
              className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
              <i className="fas fa-plus mr-2"></i> Tambah Konten
            </Link>
          </header>
          <p className="text-gray-500 mb-4">{contents.length} Konten tersedia</p>
          <table className="w-full text-left border-separate border-spacing-y-4 border-spacing-x-2">
            <thead>
              <tr className="text-gray-500">
                <th className="py-2 px-4">ID</th>
                <th className="py-2 px-4">Judul</th>
                <th className="py-2 px-4">Deskripsi</th>
                <th className="py-2 px-4">User ID</th>
                <th className="py-2 px-4">Gambar</th>
                <th className="py-2 px-4">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {contents.map((content) => (
                <tr key={content.id} className="border-t">
                  <td className="py-2 px-4">{content.id}</td>
                  <td className="py-2 px-4">{content.title}</td>
                  <td className="py-2 px-4">{content.description}</td>
                  <td className="py-2 px-4">{content.user_id}</td>
                  <td className="py-2 px-4">
                    {content.image && (
                      <img
                        src={`http://127.0.0.1:8000/storage/${content.image}`}
                        alt={content.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    )}
                  </td>
                  <td className="py-2 px-4 flex space-x-2">
                    <Link
                      to={`/updatekonten/${content.id}`}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(content.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default ListContent;
