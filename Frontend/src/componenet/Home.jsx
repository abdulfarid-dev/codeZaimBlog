import React from "react";
import "../css/Home.css";

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to CommunityHub</h1>
          <p>
            Connect, share, and grow together. A place where ideas turn into
            opportunities!
          </p>
          <button className="cta-btn">Get Started</button>
        </div>
      </div>

      {/* About Section */}
      <div className="about">
        <h2>About Us</h2>
        <p>
          CommunityHub is a platform where students and professionals come
          together to share knowledge, collaborate on projects, and grow
          together as a community.
        </p>
      </div>

      {/* Features Section */}
      <div className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-card">🤝 Connect with Peers</div>
          <div className="feature-card">💡 Share Knowledge</div>
          <div className="feature-card">🚀 Grow Together</div>
          <div className="feature-card">📝 Write Blog Posts</div>
          <div className="feature-card">💬 Comment & Discuss</div>
          <div className="feature-card">🔔 Notifications</div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2>Ready to Join the Community?</h2>
        <p>Sign up today and start sharing your ideas!</p>
        <button className="cta-btn gradient-btn">Join Now</button>
      </div>
    </div>
  );
}
