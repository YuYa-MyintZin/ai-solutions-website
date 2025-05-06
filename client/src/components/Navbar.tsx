import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const { pathname } = useLocation();

  const navLink = (to: string, label: string) => (
    <Link
      to={to}
      className={`px-4 py-2 rounded hover:bg-blue-100 transition ${
        pathname === to ? 'text-blue-600 font-semibold' : 'text-gray-700'
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-xl font-bold text-blue-600">
        AI-Solutions
      </Link>

      <div className="flex gap-4">
        {navLink('/', 'Home')}
        {navLink('/blogs', 'Blogs')}
        {navLink('/projects', 'Projects')}
        {navLink('/events', 'Events')}
        {navLink('/contact', 'ContactForm')}
      </div>
    </nav>
  );
};

export default NavBar;
