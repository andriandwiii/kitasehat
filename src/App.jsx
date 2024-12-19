import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './adminpages/Admin';
import Admin2 from './adminpages/Admin2';
import Admin3 from './adminpages/Admin3';
import Admin4 from './adminpages/Admin4';
import Register from './pages/Register';
// import Fitur1 from './pages/Fitur1';
import Fitur2 from './pages/Fitur2';
import Fitur3 from './pages/Fitur3';
import Fitur4 from './pages/Fitur4';
import Fitur5 from './pages/Fitur5';
import Fitur6 from './pages/Fitur6';
import Addkonten from './adminpages/addkonten';
import Info from './pages/Info';
import Addrs from './adminpages/addrs';
import Addobat from './adminpages/addobat';
import Addusers from './adminpages/addusers';
import UpdateKonten from './adminpages/updatekonten';
import UpdateRumahSakit from './adminpages/updaters';
import Updateusers from './adminpages/updateusers';
import Footer from './components/Footer'; 
import Navbar from './components/navbar1'; 
import Sidebar from './components/Sidebar';

 // Impor Footer

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin2" element={<Admin2 />} />
            <Route path="/admin3" element={<Admin3 />} />
            <Route path="/admin4" element={<Admin4 />} />
            <Route path="/Fitur1" element={<Fitur1 />} />
            <Route path="/Fitur2" element={<Fitur2 />} />
            <Route path="/Fitur3" element={<Fitur3 />} />
            <Route path="/Fitur4" element={<Fitur4 />} />
            <Route path="/Fitur5" element={<Fitur5 />} />
            <Route path="/Fitur6" element={<Fitur6 />} />
            <Route path="/addkonten" element={<Addkonten />} />
            <Route path="/info" element={<Info />} />
            <Route path="/addrs" element={<Addrs />} />
            <Route path="/addobat" element={<Addobat />} />
            <Route path="/addusers" element={<Addusers />} />
            <Route path="/updatekonten/:id" element={<UpdateKonten />} />
            <Route path="/updaters/:id" element={<UpdateRumahSakit />} />
            <Route path="/updateusers/:id" element={<Updateusers />} />
          </Routes>
        </div>

       
      </div>
    </Router>
  );
}

export default App;
