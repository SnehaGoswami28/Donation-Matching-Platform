import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");

<h2>Welcome {name}, you are logged in as {role}</h2>


  return (
    <div>
      <h2>Welcome, {user?.name || "User"}!</h2>
      <p>Your role: {user?.role}</p>

      {user?.role === "user" && (
        <div>
          <h3>Make a Donation or Request</h3>
          <a href="/donate">Donate Item</a><br/>
          <a href="/request">Request Help</a>
        </div>
      )}

      {user?.role === "admin" && (
        <div>
          <h3>Admin Panel</h3>
          <a href="/admin-dashboard">View All Donations & Requests</a>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
