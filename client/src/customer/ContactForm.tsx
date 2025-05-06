import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';


const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    businessType: '',
    email: '',
    phone: '',
    serviceType: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      await axios.post('http://localhost:5000/api/customer/contact', formData);
      alert('Your message has been submitted!');
      setFormData({
        name: '',
        companyName: '',
        businessType: '',
        email: '',
        phone: '',
        serviceType: '',
        description: '',
      });
    } catch (error: any) {
      console.error('Failed to submit contact form:', error);
      alert('There was a problem submitting your message. Please try again later.');
    }
  };
  

  return (
    <>
      <NavBar />
      <div className="p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact AI-Solutions</h2>
        <p className="text-gray-600 mb-6">Fill out this form to discuss your business needs with us.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          >
            <option value="">Select Business Type</option>
            <option value="Trading">Trading</option>
            <option value="Services">Services</option>
            <option value="Retail">Retail</option>
          </select>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          >
            <option value="">Select a Service to Discuss</option>
            <option value="AI-Solutions">AI-Solutions</option>
            <option value="Ecommerce Website">Ecommerce Website</option>
            <option value="ERP Systems">ERP Systems</option>
            <option value="HR Softwares">HR Softwares</option>
            <option value="POS System">POS System</option>
          </select>
          <textarea
            name="description"
            placeholder="Any Description?"
            value={formData.description}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            rows={4}
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
