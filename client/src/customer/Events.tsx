import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const Events: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Upcoming & Past Events</h1>
        <p className="text-gray-700">Stay updated with the events we're hosting or participating in.</p>
      </div>
      <Footer/>
    </>
  );
};

export default Events;
