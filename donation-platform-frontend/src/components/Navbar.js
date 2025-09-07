// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
       <h1>Donation Platform</h1>

      <Link to="/">Home</Link> {" "}
       <Link to="/register">Register</Link> {" "}
      <Link to="/login">Login</Link> {" "}
     
      <Link to="/dashboard">Dashboard</Link> {" "}
      <Link to="/donate">Donate</Link> {" "}
      <Link to="/request">Request</Link>
    </nav>
  );
}

export default Navbar;
