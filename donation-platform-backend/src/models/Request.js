// models/RequestModel.js
const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  needItem: {
    type: String,
    required: true
  },
  urgency: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
    location: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Request = mongoose.model("Request", requestSchema);
module.exports = Request;
