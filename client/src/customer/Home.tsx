import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (

    
    <div className="flex flex-col gap-12 p-6 sm:p-10">
        <NavBar/>
      {/* Hero Section */}
      <section className="text-center py-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-md">
        <h1 className="text-4xl font-bold mb-4">Welcome to AI-Solutions</h1>
        <p className="text-lg mb-6">Empowering businesses with intelligent AI-driven tools.</p>
        <Link
          to="/contact"
          className="inline-block bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-200 transition"
        >
          Contact Us
        </Link>
      </section>

      {/* About Section */}
      <section className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
        <p className="text-gray-700">
          At AI-Solutions, we build modern, smart software to help companies
          automate, optimize, and scale. Explore our latest blogs, projects, and events.
        </p>
      </section>

      {/* Quick Links */}
      <section className="grid sm:grid-cols-3 gap-6">
        <Link
          to="/blogs"
          className="p-6 border rounded-lg hover:shadow-lg transition text-center bg-white"
        >
          <h3 className="text-xl font-semibold mb-2">Blogs</h3>
          <p className="text-gray-600">Insights and articles on AI technology</p>
        </Link>

        <Link
          to="/projects"
          className="p-6 border rounded-lg hover:shadow-lg transition text-center bg-white"
        >
          <h3 className="text-xl font-semibold mb-2">Projects</h3>
          <p className="text-gray-600">Explore our AI-powered software solutions</p>
        </Link>

        <Link
          to="/events"
          className="p-6 border rounded-lg hover:shadow-lg transition text-center bg-white"
        >
          <h3 className="text-xl font-semibold mb-2">Events</h3>
          <p className="text-gray-600">Check out upcoming and past tech events</p>
        </Link>
      </section>
      <Footer/>
    </div>
    
  );
};

export default Home;
