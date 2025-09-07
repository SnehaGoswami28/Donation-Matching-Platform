const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  name: String,
  email: String,
  item: String,
  category: String,
  quantity: String,
  location: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Donation', donationSchema);
