import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const App = () => {
    const [report, setReport] = useState('');

    const handleGenerateReport = () => {
        const email = document.getElementById('email').value;
        const month = document.getElementById('bulan').value;

        if (email && month) {
            setReport(`Laporan Kesehatan untuk ${month} telah dikirim ke ${email}.

            Ringkasan:
            - Kesehatan Anda dalam bulan ${month} menunjukkan peningkatan yang signifikan.
            - Pastikan untuk tetap aktif dan menjaga pola makan.
            - Jadwalkan pemeriksaan kesehatan rutin untuk hasil terbaik.`);
        } else {
            alert('Silakan masukkan email dan bulan.');
        }
    };

    const handleDownloadReport = () => {
        if (!report) {
            alert('Laporan kosong! Harap buat laporan terlebih dahulu.');
            return;
        }
        const blob = new Blob([report], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'laporan_kesehatan.txt';
        link.click();
        URL.revokeObjectURL(link.href);
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar className="hidden md:block w-[300px]" />

            {/* Main content */}
            <main className="flex-1 bg-white rounded shadow p-6 md:ml-[300px]">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 space-y-4 md:space-y-0">
                    <div className="relative w-full md:w-1/2">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full p-2 border rounded"
                        />
                        <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
                    </div>
                    <div className="flex items-center space-x-4">
                        <i className="fas fa-bell text-gray-400"></i>
                        <img
                            src="https://placehold.co/40x40"
                            alt="User Avatar"
                            className="rounded-full"
                        />
                    </div>
                </header>

                {/* Content */}
                <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">
                    Hasilkan Laporan Kesehatan Anda Sekarang!
                </h2>

                <label htmlFor="email" className="block text-gray-700 mb-2">
                    Masukkan Email dan Bulan
                </label>
                <div className="flex flex-col md:flex-row items-center md:space-x-2 space-y-2 md:space-y-0 mb-6">
                    <input
                        type="email"
                        id="email"
                        placeholder="Alamat email"
                        className="p-2 border rounded w-full md:w-auto"
                    />
                    <input
                        type="text"
                        id="bulan"
                        placeholder="Bulan"
                        className="p-2 border rounded w-full md:w-auto"
                    />
                    <button
                        onClick={handleGenerateReport}
                        className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition w-full md:w-auto"
                    >
                        Kirim
                    </button>
                </div>

                {/* Report Display */}
                <div className="mt-8 p-4 border rounded bg-gray-50">
                    <h3 className="text-xl font-semibold mb-2">Laporan Kesehatan:</h3>
                    <pre className="text-gray-700">
                        {report || 'Laporan akan muncul di sini setelah Anda mengirimkan informasi.'}
                    </pre>
                </div>

                {/* Download Button */}
                <button
                    onClick={handleDownloadReport}
                    className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition w-full md:w-auto"
                >
                    Unduh Laporan Kesehatan
                </button>
            </main>
        </div>
    );
};

export default App;
