// src/App.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import AdminDashboard from './components/admin/AdminDashboard';
import DriverDashboard from "./components/driver/DriverDashboard";
import UserDashboard from './components/user/UserDashboard';

function App() {
  const [authStatus, setAuthStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthStatus(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuthStatus(false);
    navigate('/');
  };

  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* Authentication Routes */}
        <Route
  path="/auth/:role/register"
  element={authStatus ? <UserDashboard handleLogout={handleLogout} /> : <Auth register={true} setAuthStatus={setAuthStatus} />}
/>
<Route
  path="/auth/:role/login"
  element={authStatus ? <UserDashboard handleLogout={handleLogout} /> : <Auth register={false} setAuthStatus={setAuthStatus} />}
/>


        {/* Role-based Dashboard Routes */}
        <Route path="/admin/dashboard" element={authStatus ? <AdminDashboard handleLogout={handleLogout} /> : <Home />} />
        <Route path="/driver/dashboard" element={authStatus ? <DriverDashboard handleLogout={handleLogout} /> : <Home />} />
        <Route path="/user/dashboard" element={authStatus ? <UserDashboard handleLogout={handleLogout} /> : <Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
