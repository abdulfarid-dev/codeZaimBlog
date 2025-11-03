import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../css/Login.css";
import API from "../../api"; // ✅ your axios instance
import Posts from "../Posts";

export default function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Send login data to backend
      const res = await API.post("/user/login", {
        email: formData.email,
        password: formData.password,
      });

      console.log("Login response:", res.data);

      // ✅ Example backend response expected:
      // { token: "abcd1234", user: { name: "Farid", email: "..." } }

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        alert(`Welcome back, ${res.data.user?.name || "User"}!`);
        navigate("/Posts"); // redirect after successful login
      } else {
        alert("Invalid credentials! No token received.");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed! Please try again.");
    }
  };



  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login to CommunityHub</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account? <Link to="/register">Register Here</Link>
        </p>
      </div>
    </div>
  );
}



// onChange → updates state
// value → shows updated state