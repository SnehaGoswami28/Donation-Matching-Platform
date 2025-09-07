import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ axios response ko res ya response variable me store karo
      const response = await axios.post("http://localhost:5001/api/users/login", {
        email,
        password,
      });

      // ✅ ab response use kar sakte ho
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.user.role);
      localStorage.setItem("name", response.data.user.name);

      alert("Login successful");
      window.location.href = "/dashboard"; // redirect
    } catch (err) {
      console.error("Login error:", err);
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}><br></br>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
