// src/pages/CreateRequestPage.js
import React, { useState } from 'react';
import axios from 'axios';

const Request = () => {
  const [formData, setFormData] = useState({
    location: '',
    urgency: '',
    reason: '',
    needItem: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // ensure user is logged in
      const response = await axios.post(
        'http://localhost:5001/api/requests',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      );
      setMessage('Request created successfully!');
      setFormData({
        location: '',
        urgency: '',
        reason: '',
        needItem: ''
      });
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || 'Request creation failed.');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto shadow-xl mt-6 bg-white rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Create Help Request</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter your location"
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="urgency"
          value={formData.urgency}
          onChange={handleChange}
          placeholder="Urgency level (High, Medium, Low)"
          required
          className="border p-2 rounded"
        />
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          placeholder="Describe your situation"
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="needItem"
          value={formData.needItem}
          onChange={handleChange}
          placeholder="What item(s) do you need?"
          required
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Submit Request
        </button>
      </form>
      {message && <p className="mt-4 text-center text-red-600">{message}</p>}
    </div>
  );
};

export default Request;
