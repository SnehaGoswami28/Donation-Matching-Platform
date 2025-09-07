// src/pages/Donate.js
import React, { useState } from 'react';

const Donate = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    category: '',
    quantity: '',
    location: '',
    description: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5001/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Donation submitted successfully!");
        setFormData({
          itemName: '',
          category: '',
          quantity: '',
          location: '',
          description: '',
        });
      } else {
        setMessage(data.message || "❌ Failed to submit donation.");
      }
    } catch (error) {
      console.error("❌ Submission Error:", error);
      setMessage("❌ Server error. Try again later.");
    }
  };

  return (
    <div>
      <h2>Donate Item</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="itemName" placeholder="Item Name (e.g., Jacket)" value={formData.itemName} onChange={handleChange} required /><br />

        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Clothes">Clothes</option>
          <option value="Books">Books</option>
          <option value="Food">Food</option>
          <option value="Electronics">Electronics</option>
          <option value="Other">Other</option>
        </select><br />

        <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required /><br />

        <input type="text" name="location" placeholder="Your City/Location (e.g., Chandigarh)" value={formData.location} onChange={handleChange} required /><br />

        <textarea name="description" placeholder="Additional Details (optional)" value={formData.description} onChange={handleChange}></textarea><br />

        <button type="submit">Donate</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Donate;
