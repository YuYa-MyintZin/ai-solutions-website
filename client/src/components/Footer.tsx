import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-6 mt-12 border-t">
      <div className="mb-4">
        <nav className="flex justify-center gap-4 flex-wrap text-blue-600">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/blogs" className="hover:underline">Blogs</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/events" className="hover:underline">Events</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
      <p>© {new Date().getFullYear()} AI-Solutions. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
