import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2 className="logo"><Link to="/">MERN Stack Blog</Link></h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        {isLoggedIn ? (
          <>
            <li><Link to="/create">Create Post</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>

    </nav>
  );
};

export default Navbar;
