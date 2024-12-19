import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Pastikan Anda mengimpor useNavigate dari react-router-dom
import axios from 'axios';

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate(); // Gunakan useNavigate untuk redirect ke halaman login

  const handleLogout = async () => {
    try {
      // Kirim permintaan logout ke backend
      await axios.post('http://127.0.0.1:8000/auth/logout', {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth_token')}`, // Sertakan token di header
        },
      });

      // Hapus token dan role dari localStorage
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_role');

      // Arahkan ke halaman login
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Gagal logout. Silakan coba lagi.');
    }
  };

  // Navigation items data
  const navItems = [
    { id: 'users', label: 'Users', href: '/admin' },
    { id: 'obat', label: 'Obat', href: '/admin2' },
    { id: 'rumahSakit', label: 'Rumah Sakit', href: '/admin3' },
    { id: 'konten', label: 'Konten', href: 'admin4' },
    { id: 'helpCenter', label: 'Help Center', href: '#' }
  ];

  return (
    <header className="bg-green-500 p-4 flex justify-between items-center">
      {/* Left Section with Logo and Navigation Links */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
          <span className="text-green-500 text-xl font-bold">+</span>
        </div>

        {/* Navigation Menu */}
        <nav className="flex space-x-4">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a
                href={item.href}
                className="text-white font-medium px-2 py-1 relative"
              >
                {item.label}
                {hoveredItem === item.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full" />
                )}
              </a>
            </div>
          ))}
        </nav>
      </div>

      {/* Right Section with Profile and Log Out Button */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          {/* Profile Icon */}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-500 font-bold">
            A
          </div>
          {/* Username */}
          <span className="text-white font-medium">Andrian</span>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Log Out
        </button>
      </div>
    </header>
  );
};

export default Navbar;
