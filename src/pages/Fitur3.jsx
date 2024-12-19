import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const consultations = [
  { name: 'Dr. Maria Santoso', specialty: 'Spesialis Jantung' },
  { name: 'Dr. Andi Wijaya', specialty: 'Spesialis THT' },
  { name: 'Dr. Siti Rahayu', specialty: 'Spesialis Anak' },
  { name: 'Dr. Budi Hartono', specialty: 'Spesialis Kulit' },
  { name: 'Dr. Emma Kristanti', specialty: 'Spesialis Gizi' },
  { name: 'Dr. Rudi Permana', specialty: 'Spesialis Jiwa' },
  { name: 'Dr. Rina Sukarno', specialty: 'Spesialis Kandungan' },
  { name: 'Dr. Hendra Gunawan', specialty: 'Spesialis Bedah' },
];

const messages = [
  { sender: 'doctor', text: 'Halo, ada keluhan apa hari ini?', time: '8:00 PM' },
  { sender: 'patient', text: 'Saya merasa tidak enak badan akhir-akhir ini', time: '8:05 PM' },
  { sender: 'doctor', text: 'Bisa tolong jelaskan gejala yang Anda rasakan?', time: '8:07 PM' },
];

const KitaSehat = () => {
  const [activeConsultation, setActiveConsultation] = useState(0);
  const [messageInput, setMessageInput] = useState('');

  const sendMessage = () => {
    if (messageInput.trim()) {
      messages.push({
        sender: 'patient',
        text: messageInput,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      setMessageInput('');
    }
  };

  return (
    <main className="flex-grow flex flex-col ml-0 lg:ml-[300px] h-screen">
      <Sidebar />
      <header className="flex flex-wrap items-center justify-between p-4 bg-white border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <img
            src="https://placehold.co/40x40"
            alt="Doctor Avatar"
            className="rounded-full"
          />
          <div>
            <div className="text-gray-700 font-medium">{consultations[activeConsultation].name}</div>
            <div className="text-gray-500 text-sm">
              {consultations[activeConsultation].specialty}
            </div>
          </div>
        </div>
        <div className="flex-grow flex justify-center">
          <img
            src="src/assets/images/logo.png" // Replace with your logo URL
            alt="Kita Sehat Logo"
            className="h-auto w-[80px] lg:w-[161px] object-contain"
          />
        </div>
        <div className="flex space-x-3">
          <div className="w-8 h-8 bg-gray-200 border border-gray-300 flex items-center justify-center rounded-full">
            <img 
              src="https://placehold.co/31x31" 
              alt="Voice Call Placeholder" 
              className="object-cover w-7 h-7" 
            />
          </div>
          <div className="w-8 h-8 bg-gray-200 border border-gray-300 flex items-center justify-center rounded-full">
            <img 
              src="https://placehold.co/31x31" 
              alt="Video Call Placeholder" 
              className="object-cover w-7 h-7" 
            />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">
        <section className="w-full lg:w-80 bg-white border-r border-gray-200 p-4 overflow-y-auto">
          <h2 className="text-gray-600 mb-4 font-semibold">Konsultasi</h2>
          <div className="space-y-3">
            {consultations.map((consultation, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition
                  ${index === activeConsultation
                  ? 'bg-green-50 border-2 border-green-500'
                  : 'hover:bg-gray-50 border border-transparent'
                  }`}
                onClick={() => setActiveConsultation(index)}
              >
                <div>
                  <div className="text-gray-700">{consultation.name}</div>
                  <div className="text-gray-500 text-sm">{consultation.specialty}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'doctor' ? 'items-start' : 'items-end flex-row-reverse'}`}
              >
                <div
                  className={`max-w-lg p-3 rounded-lg 
                    ${msg.sender === 'doctor'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-blue-100 text-blue-800'
                    }`}
                >
                  {msg.text}
                  <div className="text-xs text-gray-500 mt-1 text-right">{msg.time}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200 flex items-center space-x-3">
            <input
              type="text"
              placeholder="Tulis pesan..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-grow p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={sendMessage}
              className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition"
            >
              Kirim
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default KitaSehat;
