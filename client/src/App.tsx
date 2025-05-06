import { useState } from 'react';
import AdminLogin from './admin/AdminLogin.tsx';
import AdminDashboard from './admin/AdminDashboard.tsx';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/login" replace />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;

