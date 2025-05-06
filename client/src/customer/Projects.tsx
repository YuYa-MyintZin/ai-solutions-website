import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
const Projects: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Our Projects</h1>
        <p className="text-gray-700">Discover our innovative AI-powered software solutions and tools.</p>
      </div>
      <Footer/>
    </>
  );
};

export default Projects;
