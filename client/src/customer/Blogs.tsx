import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const Blogs: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Our Blogs</h1>
        <p className="text-gray-700">Explore our latest insights and articles on AI and technology.</p>
      </div>
      <Footer/>
    </>
  );
};

export default Blogs;
