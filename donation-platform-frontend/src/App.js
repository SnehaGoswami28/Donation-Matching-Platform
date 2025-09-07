import React from "react";
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./utils/PrivateRoute";
import Donate from "./pages/Donate";
import Request from "./pages/Request";


function App() {
  return (
    <BrowserRouter>
      <div>
        {/* ✅ Navbar goes OUTSIDE of <Routes> */}
        <Navbar />

        {/* ✅ Only <Route> components go inside <Routes> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/request" element={<Request />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
