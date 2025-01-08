import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Mail className="w-6 h-6 mx-auto mb-4 text-red-700" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-600">emiledonzel@bluewin.ch</p>
          </div>
          <div className="text-center">
            <Phone className="w-6 h-6 mx-auto mb-4 text-red-700" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+41 75 417 57 74</p>
          </div>
          <div className="text-center">
            <MapPin className="w-6 h-6 mx-auto mb-4 text-red-700" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-gray-600">Yverdon-les-Bains, CH</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-700 focus:ring-red-700"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-700 focus:ring-red-700"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-700 focus:ring-red-700"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;