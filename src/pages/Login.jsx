import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Untuk navigasi antar halaman

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({});
    setSuccess(false);

    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/login', formData);
      if (response.data.success) {
        const { token, role } = response.data;

        // Simpan token ke localStorage
        localStorage.setItem('auth_token', token);
        localStorage.setItem('auth_role', role);

        setSuccess(true);
        alert('Login successful!');

        // Redirect berdasarkan role
        if (role === 'admin') {
          navigate('/admin'); // Halaman admin
        } else if (role === 'dokter') {
          navigate('/dokter'); // Halaman dokter
        } else if (role === 'apoteker') {
          navigate('/apoteker'); // Halaman apoteker
        } else {
          navigate('/fitur1'); // Halaman umum
        }
      }
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setError(err.response.data.errors);
      } else if (err.response && err.response.data.message) {
        setError({ general: err.response.data.message });
      } else {
        setError({ general: 'An error occurred during login. Please try again.' });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    // Hapus token dari localStorage
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_role');
    navigate('/login'); // Redirect ke halaman login
  };

  return (
    <div className="bg-white flex min-h-screen">
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <img
          src="https://cdn.pixabay.com/photo/2023/12/26/12/11/ai-generated-8470065_1280.jpg"
          alt="Custom box"
          className="h-auto max-h-[995px] w-full object-cover"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <img
              src="src/assets/images/logokecil.png"
              alt="Logo"
              className="mx-auto mb-4"
              style={{ width: '50px', height: '50px' }}
            />
            <div className="text-4xl font-bold flex items-center justify-center" style={{ fontFamily: "'Lufga', sans-serif" }}>
              Log In
            </div>
          </div>

          {error.general && (
            <p className="text-red-500 text-center mb-4">{error.general}</p>
          )}

          {success && (
            <p className="text-green-500 text-center mb-4">Login successful!</p>
          )}

          <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
                style={{ fontFamily: "'Rubik', sans-serif" }}
              >
                Email
              </label>
              <input
                className={`shadow appearance-none border rounded-full w-full py-5 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error.email ? 'border-red-500' : ''}`}
                id="email"
                name="email"
                placeholder="email@gmail.com"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {error.email && (
                <p className="text-red-500 text-xs mt-1">{error.email[0]}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
                style={{ fontFamily: "'Rubik', sans-serif" }}
              >
                Password
              </label>
              <input
                className={`shadow appearance-none border rounded-full w-full py-5 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error.password ? 'border-red-500' : ''}`}
                id="password"
                name="password"
                placeholder="Enter your password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              {error.password && (
                <p className="text-red-500 text-xs mt-1">{error.password[0]}</p>
              )}
            </div>

            <div className="flex items-center justify-center mb-4">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 w-full rounded-full focus:outline-none focus:shadow-outline"
                type="submit"
                style={{ fontFamily: "'Rubik', sans-serif" }}
                disabled={loading}
              >
                {loading ? 'Logging In...' : 'Log In'}
              </button>
            </div>
          </form>

          <div className="text-center mt-4 text-gray-500" style={{ fontFamily: "'Rubik', sans-serif" }}>
            - Or -
          </div>
          <div className="text-center mt-2">
            <span className="text-gray-500" style={{ fontFamily: "'Rubik', sans-serif" }}>Don't have an account?</span>
            <a href="register" className="text-green-500" style={{ fontFamily: "'Rubik', sans-serif" }}> Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
