// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const registerRoute = require("./routes/registerRoute");
const loginRoute = require("./routes/loginRoute");
const donateRoute = require("./routes/donateRoute");
const requestRoute = require("./routes/requestRoute");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/users", registerRoute);
app.use("/api/users", loginRoute);
app.use('/api/donations', donateRoute);
app.use('/api/request', requestRoute);


// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/DonationDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected");
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
})
.catch((err) => console.error("❌ MongoDB connection error:", err));
