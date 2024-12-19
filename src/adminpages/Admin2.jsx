// pages/MedicineListPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from '../components/navbar1';

const MedicineListPage = () => {
  const medicines = [
    { id: '001', nama_obat: 'Paracetamol', deskripsi: 'Pain reliever and fever reducer', admin_id: 'A001', imageUrl: 'path_to_image_1.jpg' },
    { id: '002', nama_obat: 'Ibuprofen', deskripsi: 'Anti-inflammatory drug', admin_id: 'A002', imageUrl: 'path_to_image_2.jpg' },
    { id: '003', nama_obat: 'Amoxicillin', deskripsi: 'Antibiotic used to treat infections', admin_id: 'A003', imageUrl: 'path_to_image_3.jpg' },
    // Add more medicine objects as needed
  ];

  const handleUpdate = (medicineId) => {
    alert(`Update medicine with ID: ${medicineId}`);
    // Add logic for updating the medicine here
  };

  const handleDelete = (medicineId) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete the medicine with ID: ${medicineId}?`);
    if (confirmDelete) {
      alert(`Medicine with ID: ${medicineId} has been deleted.`);
      // Add logic for deleting the medicine here
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex justify-center p-8 bg-gray-100 min-h-screen">
        <div className="max-w-screen-lg w-full bg-white p-6 rounded-lg shadow">
          <header className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Daftar Obat</h1>
            {/* Update the button to use Link for navigation */}
            <Link to="/addobat">
              <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
                <i className="fas fa-plus mr-2"></i> Tambah Obat Baru
              </button>
            </Link>
          </header>
          <p className="text-gray-500 mb-4">{medicines.length} Obat Terdaftar</p>
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr className="text-gray-500">
                <th className="py-2">ID</th>
                <th className="py-2">Nama Obat</th>
                <th className="py-2">Deskripsi</th>
                <th className="py-2">Admin ID</th>
                <th className="py-2">Gambar</th>
                <th className="py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((medicine, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2">{medicine.id}</td>
                  <td className="py-2">{medicine.nama_obat}</td>
                  <td className="py-2">{medicine.deskripsi}</td>
                  <td className="py-2">{medicine.admin_id}</td>
                  <td className="py-2">
                    <img src={medicine.imageUrl} alt={medicine.nama_obat} className="w-16 h-16 object-cover rounded" />
                  </td>
                  <td className="py-2">
                    <button 
                      className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                      onClick={() => handleUpdate(medicine.id)}
                    >
                      Update
                    </button>
                    <button 
                      className="bg-red-500 text-white px-4 py-2 rounded"
                      onClick={() => handleDelete(medicine.id)}
                    >
                      Delete
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

export default MedicineListPage;
