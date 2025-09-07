// routes/requestRoutes.js
const express = require("express");
const router = express.Router();
const Request = require("../models/Request"); // Adjust path if needed
const { createRequest } = require('../controllers/requestController');
// POST /api/request - Create a new donation request
router.post("/",createRequest, async (req, res) => {
  try {
    const { name, email, item, quantity, description } = req.body;

    const newRequest = new Request({
      name,
      email,
      item,
      quantity,
      description,
    });

    await newRequest.save();
    res.status(201).json({ message: "Request submitted successfully" });
  } catch (error) {
    console.error("Request creation error:", error);
    res.status(500).json({ message: "Server error while submitting request" });
  }
});

module.exports = router;
