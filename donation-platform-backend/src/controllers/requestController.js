const Request = require('../models/Request');

// POST /api/requests
const createRequest = async (req, res) => {
  try {
    const { location, urgency, reason, needItem } = req.body;
    const request = await Request.create({
      user: req.user._id,
      location,
      urgency,
      reason,
      needItem,
    });
    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ message: 'Request creation failed' });
  }
};

module.exports = { createRequest };
