// routes/donateRoutes.js
const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation'); // Make sure this path is correct

// @route   POST /api/donations
// @desc    Create a new donation
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { itemName, category, quantity, location, description } = req.body;

    // Simple validation
    if (!itemName || !category || !quantity || !location) {
      return res.status(400).json({ message: 'Please fill in all required fields.' });
    }

    const donation = new Donation({
      itemName,
      category,
      quantity,
      location,
      description,
    });

    await donation.save();

    res.status(201).json({ message: 'Donation submitted successfully', donation });
  } catch (error) {
    console.error('Donation error:', error.message);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

module.exports = router;
