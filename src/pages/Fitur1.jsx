import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

const MainContent = () => {
    const [hospitals, setHospitals] = useState([]);
    const [error, setError] = useState(null);

    // Function to fetch hospital data from the API
    const fetchHospitals = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/rumah-sakit/'); // Adjust the URL as needed
            setHospitals(response.data.data);
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Failed to fetch data');
        }
    };

    useEffect(() => {
        fetchHospitals();
    }, []);

    return (
        <div className="flex flex-col lg:flex-row">
            <Sidebar className="hidden lg:block w-[300px]" />
            <main className="flex-1 p-4 lg:p-8 lg:ml-[300px]">
                <div className="flex flex-col md:flex-row items-center mb-4 space-y-4 md:space-y-0">
                    <input type="text" placeholder="Search" className="flex-1 p-2 border border-gray-300 rounded w-full md:w-auto"/>
                    <div className="flex items-center ml-0 md:ml-4 space-x-4">
                        <i className="fas fa-bell text-gray-600"></i>
                        <img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full"/>
                    </div>
                </div>
                <h1 className="text-xl md:text-2xl font-semibold mb-4">Rumah Sakit</h1>

                {/* Filter Input Section with Labels */}
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0 mb-4">
                    <div className="flex-1">
                        <label htmlFor="provinsi" className="block text-gray-700 mb-1">Provinsi</label>
                        <input type="text" id="provinsi" placeholder="Masukan Provinsi" className="w-full p-2 border border-gray-300 rounded"/>
                    </div>
                    <div className="flex-1">
                        <label htmlFor="kota" className="block text-gray-700 mb-1">Kota/Daerah</label>
                        <input type="text" id="kota" placeholder="Masukan Kota/Daerah" className="w-full p-2 border border-gray-300 rounded"/>
                    </div>
                    <div className="flex-1">
                        <label htmlFor="dokter" className="block text-gray-700 mb-1">Dokter Spesialis</label>
                        <input type="text" id="dokter" placeholder="Dokter Spesialis" className="w-full p-2 border border-gray-300 rounded"/>
                    </div>
                    <div className="flex-shrink-0">
                        <button className="bg-white text-green-500 px-6 py-2 rounded-full border hover:text-white border-green-500 hover:bg-green-500 transition">
                            Cari
                        </button>
                    </div>
                </div>

                {/* Table Section */}
                <div className="overflow-x-auto">
                    {error ? (
                        <div className="text-red-500">{error}</div>
                    ) : (
                        <table className="w-full bg-white rounded shadow">
                            <thead>
                                <tr className="text-left border-b">
                                    <th className="p-4">Nama Rumah Sakit</th>
                                    <th className="p-4">Alamat</th>
                                    <th className="p-4">Deskripsi</th>
                                    <th className="p-4">Gambar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hospitals.map((hospital, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="p-4 text-blue-600">{hospital.name}</td>
                                        <td className="p-4">{hospital.address}</td>
                                        <td className="p-4">{hospital.description}</td>
                                        <td className="p-4">
                                            {hospital.image ? (
                                                <img src={`http://127.0.0.1:8000/storage/${hospital.image}`} alt={hospital.name} className="w-32 h-32 rounded"/>
                                            ) : (
                                                'No Image'
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </main>
        </div>
    );
};

export default MainContent;
