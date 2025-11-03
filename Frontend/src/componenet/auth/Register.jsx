import React, { useState } from "react";
import "../../css/Register.css";
import API from "../../api"; // your axios instance

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Send registration data to backend
      const res = await API.post("/user/register", {
        name: formData.username, // match backend field name
        email: formData.email,
        password: formData.password,
      });

      console.log("Registered user:", res.data);
      // cConsole log	What it shows
// console.log(res)
// console.log(res.data)
console.log(res.data.message)	
// console.log(res.data.newUser)	
// console.log(res.data.newUser.name)	
console.log(res.data.newUser.email)
      alert("Registered Successfully!");
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      alert("Registration failed! Check console for details.");
    }
  };

  return (
    <div className="register-page">
      <div className="form-container">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
