import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Tambahkan axios untuk permintaan HTTP

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate(); // Untuk navigasi

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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

  const menuItems = [
    { name: 'Cari', icon: 'src/assets/images/cari.png', link: '/fitur1' },
    { name: 'Obat', icon: 'src/assets/images/obat.png', link: '/fitur2' },
    { name: 'Konsultasi Dokter', icon: 'src/assets/images/konsul.png', link: '/fitur3' },
    { name: 'Pengingat', icon: 'src/assets/images/pengingat.png', link: '/fitur4' },
    { name: 'Konten Edukasi', icon: 'src/assets/images/kontenedu.png', link: '/fitur5' },
    { name: 'Riwayat', icon: 'src/assets/images/pelacakan.png', link: '/fitur6' },
    { name: 'Info', icon: 'src/assets/images/info.png', link: '/info' },
  ];

  return (
    <div>
      {/* Toggle button for mobile */}
      <button 
        onClick={toggleSidebar} 
        className="lg:hidden p-4 text-gray-700 focus:outline-none fixed top-4 left-4 z-50"
      >
        <i className="fas fa-bars text-2xl"></i>
      </button>

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 bottom-0 bg-white p-6 shadow-lg z-40 w-[300px] h-full transform 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300`}
      >
        <div>
          <div className="flex items-center mb-8">
            {/* Replace the placeholder image with your logo image */}
            <img src="src/assets/images/logo.png" alt="Logo" className="w-[161px] h-[42px] mr-2" />
          </div>
          <nav>
            <ul>
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className={`mb-6 flex items-center p-2 rounded cursor-pointer
                  ${activeItem === item.name ? 'text-green-700 bg-green-100' : 'text-gray-600 hover:text-green-500 hover:bg-green-100'}`}
                  onClick={() => handleItemClick(item.name)}
                >
                  <img src={item.icon} alt={item.name} className="w-6 h-8 mr-2" /> {/* Image with 24x32 size */}
                  <Link to={item.link} className="w-full">{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <button 
          onClick={handleLogout} 
          className="flex items-center text-red-600 hover:text-white hover:bg-red-600 p-2 rounded cursor-pointer mt-4"
        >
          <i className="fas fa-sign-out-alt mr-2"></i>
          <span>Log Out</span>
        </button>
      </aside>

      {/* Overlay for mobile view */}
      {isSidebarOpen && (
        <div 
          onClick={toggleSidebar} 
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-30"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
