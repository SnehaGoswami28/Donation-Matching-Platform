const NeedRequest = require('../models/NeedRequest');

// @desc    Create a need request
// @route   POST /api/needs
// @access  Private
exports.createNeed = async (req, res) => {
  try {
    const { title, description, category, onBehalfOf } = req.body;

    const need = new NeedRequest({
      title,
      description,
      category,
      onBehalfOf,
      requestedBy: req.user.id
    });

    await need.save();
    res.status(201).json(need);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create need request' });
  }
};

// @desc    Get all need requests
// @route   GET /api/needs
// @access  Public
exports.getNeeds = async (req, res) => {
  try {
    const needs = await NeedRequest.find().populate('requestedBy', 'name email');
    res.json(needs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch need requests' });
  }
};
