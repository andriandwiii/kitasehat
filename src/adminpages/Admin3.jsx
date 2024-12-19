import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar1';

const HospitalListPage = () => {
  const [hospitals, setHospitals] = useState([]); // State to store hospitals
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate();

  // Fetch hospitals data from API
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/rumah-sakit') // Your API endpoint for hospitals
      .then((response) => {
        setHospitals(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Gagal memuat daftar rumah sakit.');
        setLoading(false);
      });
  }, []);

  // Handle delete action
  const handleDelete = (id) => {
    const confirmation = window.confirm("Apakah Anda yakin ingin menghapus rumah sakit ini?");
    if (confirmation) {
      axios
        .delete(`http://127.0.0.1:8000/api/rumah-sakit/${id}`)
        .then(() => {
          setHospitals(hospitals.filter((hospital) => hospital.id !== id)); // Remove deleted hospital from the state
          alert('Rumah Sakit berhasil dihapus.');
        })
        .catch(() => {
          alert('Gagal menghapus rumah sakit.');
        });
    }
  };

  // Handle update action
  const handleUpdate = (id) => {
    const confirmation = window.confirm("Apakah Anda yakin ingin mengupdate data rumah sakit ini?");
    if (confirmation) {
      navigate(`/update-hospital/${id}`);
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
            <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-0">Daftar Rumah Sakit</h1>
            <Link to="/addrs">
              <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
                <i className="fas fa-plus mr-2"></i> Tambah Rumah Sakit Baru
              </button>
            </Link>
          </header>
          <p className="text-gray-500 mb-6">{hospitals.length} Rumah Sakit Terdaftar</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-2">
              <thead>
                <tr className="text-gray-500 text-sm">
                  <th className="py-3 px-4">ID</th>
                  <th className="py-3 px-4">Nama Rumah Sakit</th>
                  <th className="py-3 px-4">Alamat</th>
                  <th className="py-3 px-4">Deskripsi</th>
                  <th className="py-3 px-4">User ID</th>
                  <th className="py-3 px-4">Gambar</th>
                  <th className="py-3 px-4">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {hospitals.map((hospital) => (
                  <tr key={hospital.id} className="border-t text-sm">
                    <td className="py-3 px-4">{hospital.id}</td>
                    <td className="py-3 px-4">{hospital.name}</td>
                    <td className="py-3 px-4">{hospital.address}</td>
                    <td className="py-3 px-4">{hospital.description}</td>
                    <td className="py-3 px-4">{hospital.user_id}</td>
                    <td className="py-3 px-4">
                      <img
                        src={`http://127.0.0.1:8000/storage/${hospital.image}`} // Path to the image stored on the server
                        alt={hospital.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="py-3 px-4 flex flex-wrap space-x-2">
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                        onClick={() => (window.location.href = `/updaters/${hospital.id}`)}
                      >
                        Update
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded"
                        onClick={() => handleDelete(hospital.id)}
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

export default HospitalListPage;
