import React from 'react';
import './Hero.css'; // Link to the external CSS file

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div 
        className="hero-bg"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1200)'
        }}
      >
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          ✨ Award Winning Restaurant
        </div>

        <h2 className="hero-title">
          Culinary
          <span className="hero-highlight">Excellence</span>
        </h2>

        <p className="hero-subtitle">
          Experience the perfect harmony of flavors, crafted with passion and served with elegance
        </p>

        <div className="hero-buttons">
          <a href="#menu" className="hero-btn primary">Explore Menu</a>
          <a href="#contact" className="hero-btn secondary">Reserve Table</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
