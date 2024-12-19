import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const Content = () => {
  // Sample data for Jadwal Obat and Janji Dokter
  const medicineSchedules = [
    { id: 1, name: "Paracetamol", instructions: "Minum Satu Pil Setiap 8 Jam" },
    { id: 2, name: "Amoxicillin", instructions: "Minum Satu Kapsul Setelah Makan" },
    { id: 3, name: "Ibuprofen", instructions: "Minum Satu Pil Jika Diperlukan" },
    { id: 4, name: "Vitamin C", instructions: "Minum Satu Tablet Setiap Pagi" },
  ];

  const doctorAppointments = [
    { id: 1, doctor: "dr. Susi Amelia", specialty: "Pediatri", time: "Janji temu besok jam 09.00" },
    { id: 2, doctor: "dr. Andi Wijaya", specialty: "Kardiologi", time: "Janji temu besok jam 14.00" },
    { id: 3, doctor: "dr. Rina Santoso", specialty: "Onkologi", time: "Janji temu hari Kamis jam 11.00" },
    { id: 4, doctor: "dr. Budi Prasetyo", specialty: "Neurologi", time: "Janji temu hari Jumat jam 08.30" },
  ];

  const [medicineName, setMedicineName] = useState("");
  const [period, setPeriod] = useState("");
  const [schedule, setSchedule] = useState("");
  const [startDate, setStartDate] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [date, setDate] = useState("");

  const handleAddReminder = () => {
    console.log("Reminder added:", {
      medicineName,
      period,
      schedule,
      startDate,
      doctorName,
      specialty,
      date,
    });
  };

  return (
    <main className="flex-1 p-8 space-y-8 ml-[300px]"> 
        <Sidebar />
      <header className="flex justify-between items-center">
        <input type="text" placeholder="Search" className="w-1/2 p-2 border rounded" />
        <div className="flex items-center">
          <img src="https://placehold.co/24x24" alt="Notification Icon" className="mr-4" />
          <img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full" />
        </div>
      </header>

      <section>
        <h1 className="text-2xl font-semibold mb-4">Pengingat</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4"> {/* Responsive grid */}
          <div>
            <label htmlFor="medicineName" className="block text-gray-700 mb-1">
              Nama Obat
            </label>
            <input
              type="text"
              id="medicineName"
              placeholder="Masukan Nama Obat"
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="period" className="block text-gray-700 mb-1">
              Periode Minum
            </label>
            <input
              type="text"
              id="period"
              placeholder="Masukan Periode Minum"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="schedule" className="block text-gray-700 mb-1">
              Jadwal Konsumsi
            </label>
            <input
              type="text"
              id="schedule"
              placeholder="Jadwal Konsumsi"
              value={schedule}
              onChange={(e) => setSchedule(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex items-end">
            <div className="w-full">
              <label htmlFor="startDate" className="block text-gray-700 mb-1">
                Tanggal Mulai-Selesai
              </label>
              <input
                type="text"
                id="startDate"
                placeholder="Tanggal Mulai-Selesai"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div>
            <label htmlFor="doctorName" className="block text-gray-700 mb-1">
              Nama Dokter
            </label>
            <input
              type="text"
              id="doctorName"
              placeholder="Nama Dokter"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="specialty" className="block text-gray-700 mb-1">
              Spesialis
            </label>
            <input
              type="text"
              id="specialty"
              placeholder="Spesialis"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-gray-700 mb-1">
              Tanggal
            </label>
            <input
              type="text"
              id="date"
              placeholder="Masukan Tanggal"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            onClick={handleAddReminder}
            className="bg-white text-green-500 px-2 py-1 rounded-full border hover:text-white border-green-500 hover:bg-green-500 transition"
          >
            Tambah
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Jadwal Obat Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Jadwal Obat</h2>
          <div className="space-y-4">
            {medicineSchedules.map((schedule) => (
              <div key={schedule.id} className="flex items-center bg-white p-4 rounded shadow">
                <img src="https://placehold.co/67x91" alt="Medicine Schedule" className="mr-4" />
                <div>
                  <h3 className="text-lg font-bold">{schedule.name}</h3>
                  <p>{schedule.instructions}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Janji Dokter Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Janji Dokter</h2>
          <div className="space-y-4">
            {doctorAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center bg-white p-4 rounded shadow">
                <img src="https://placehold.co/53x51" alt="Doctor" className="rounded-full mr-4" />
                <div>
                  <p className="font-bold">{appointment.doctor}</p>
                  <p className="text-gray-500">{appointment.specialty}</p>
                  <div className="flex items-center">
                    <img src="https://placehold.co/20x20/00FF00/00FF00" alt="Status Icon" className="rounded-full mr-2" />
                    <p className="text-green-500">{appointment.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Content;
