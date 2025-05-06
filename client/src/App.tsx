import { useState } from 'react';
import AdminLogin from './admin/AdminLogin.tsx';
import AdminDashboard from './admin/AdminDashboard.tsx';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import ManageBlogs from './admin/ManageBlogs';
import ManageEvents from './admin/ManageEvents';
import Home from './customer/Home';
import Blogs from './customer/Blogs.tsx';
import Projects from './customer/Projects.tsx';
import Events from './customer/Events.tsx';
import ContactForm from './customer/ContactForm.tsx';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/admin/login" element={<AdminLogin />} />
    <Route path="/admin/dashboard" element={<AdminDashboard />} />
    <Route path="/admin/blogs" element={<ManageBlogs />} />
    <Route path="/admin/events" element={<ManageEvents />} />
    <Route path="/blogs" element={<Blogs />} />
<Route path="/projects" element={<Projects />} />
<Route path="/events" element={<Events />} />
<Route path="/contact" element={<ContactForm/>}/>
  </Routes>
  
  );
}

export default App;

