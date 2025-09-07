import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "donor", // default role
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5001/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const text = await res.text(); // safer than assuming JSON
      let data;

      try {
        data = JSON.parse(text);
      } catch (e) {
        throw new Error("Invalid JSON response from server.");
      }

      if (res.ok) {
        setMessage("✅ Registration successful!");
        setFormData({ name: "", email: "", password: "", role: "donor" });
      } else {
        setMessage(data?.message || "❌ Registration failed.");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      setMessage("🚨 Server Error during registration.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Register</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br /><br />
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br /><br />
        
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        /><br /><br />

        <select name="role" value={formData.role} onChange={handleChange} required>
          <option value="donor">Donor</option>
          <option value="requester">Requester</option>
        </select><br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
