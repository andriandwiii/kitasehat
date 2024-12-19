import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const CekObat = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    // Handle search functionality here
  };

  // Sample data for each card
  const medicines = [
    { id: 1, name: "Abiraxat 250 mg 120 Tablet", description: "Effective for relieving mild pain and reducing inflammation.", dosage: "Take one tablet every 8 hours", imgUrl: "https://via.placeholder.com/150" },
    { id: 2, name: "Ibuprofen 200 mg", description: "Commonly used to relieve pain, fever, and inflammation.", dosage: "Take two tablets every 6 hours", imgUrl: "https://via.placeholder.com/150" },
    { id: 3, name: "Paracetamol 500 mg", description: "Used to reduce fever and alleviate mild pain.", dosage: "Take one tablet every 4 hours", imgUrl: "https://via.placeholder.com/150" },
    { id: 4, name: "Aspirin 100 mg", description: "Effective for pain relief and reducing blood clots.", dosage: "Take one tablet daily", imgUrl: "https://via.placeholder.com/150" },
    { id: 5, name: "Amoxicillin 500 mg", description: "Antibiotic used to treat bacterial infections.", dosage: "Take one tablet every 12 hours", imgUrl: "https://via.placeholder.com/150" },
    { id: 6, name: "Cetirizine 10 mg", description: "Used for allergy relief, reduces runny nose and sneezing.", dosage: "Take one tablet daily", imgUrl: "https://via.placeholder.com/150" },
    { id: 7, name: "Omeprazole 20 mg", description: "Reduces stomach acid, used to treat GERD.", dosage: "Take one tablet daily before meals", imgUrl: "https://via.placeholder.com/150" },
    { id: 8, name: "Metformin 500 mg", description: "Used to control blood sugar in diabetes.", dosage: "Take one tablet with meals", imgUrl: "https://via.placeholder.com/150" },
    { id: 9, name: "Lisinopril 10 mg", description: "Used to treat high blood pressure.", dosage: "Take one tablet daily", imgUrl: "https://via.placeholder.com/150" },
    { id: 10, name: "Atorvastatin 20 mg", description: "Lowers cholesterol levels in the blood.", dosage: "Take one tablet at bedtime", imgUrl: "https://via.placeholder.com/150" },
    { id: 11, name: "Hydrochlorothiazide 25 mg", description: "Diuretic used to reduce fluid retention.", dosage: "Take one tablet in the morning", imgUrl: "https://via.placeholder.com/150" },
    { id: 12, name: "Clopidogrel 75 mg", description: "Prevents blood clots in patients with heart conditions.", dosage: "Take one tablet daily", imgUrl: "https://via.placeholder.com/150" },
  ];

  return (
    <main className="flex-1 p-4 md:p-8 ml-0 md:ml-[300px]">
      <Sidebar />
      <div className="flex items-center justify-between mb-8">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 p-2 border border-gray-300 rounded"
        />
        <div className="flex items-center ml-4">
          <i className="fas fa-bell text-gray-600 mr-4"></i>
          <img
            src="https://placehold.co/40x40"
            alt="User Avatar"
            className="rounded-full"
          />
        </div>
      </div>
      <h1 className="text-xl md:text-2xl font-semibold mb-4">Cek Obat</h1>

      {/* Filter Input Section with Labels */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
        <div className="w-full md:w-1/3">
          <label htmlFor="obat" className="block text-gray-700 mb-1">
            Nama Obat/gejala penyakit
          </label>
          <input
            type="text"
            id="obat"
            placeholder="Masukan Nama Obat"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="w-full md:w-1/3">
          <label htmlFor="kategori" className="block text-gray-700 mb-1">
            Kategori
          </label>
          <input
            type="text"
            id="kategori"
            placeholder="Masukan Kategori"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="w-full md:w-auto">
          <button
            onClick={handleSearch}
            className="w-full md:w-auto bg-white text-green-500 px-6 py-2 rounded-full border hover:text-white border-green-500 hover:bg-green-500 transition"
          >
            Cari
          </button>
        </div>
      </div>

      {/* Cek Obat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {medicines.map((medicine) => (
          <div
            key={medicine.id}
            className="p-2 bg-white border rounded-lg shadow w-full h-auto flex flex-col"
          >
            <img
              src={medicine.imgUrl}
              alt={medicine.name}
              className="w-full h-28 rounded-lg object-cover mb-2"
            />
            <h3 className="text-base font-semibold truncate">{medicine.name}</h3>
            <p className="text-sm text-gray-600 truncate">
              {medicine.description}
            </p>
            <p className="mt-2 text-xs font-bold">Dosis</p>
            <p className="text-xs text-gray-600 truncate">{medicine.dosage}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CekObat;
