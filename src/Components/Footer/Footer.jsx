import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <div className="footer-logo-circle">
              <span className="footer-logo-initial">M</span>
            </div>
            <span className="footer-brand">ModDine</span>
          </div>
          <p className="footer-text">
            &copy; 2025 ModDine Modern Cuisine. All rights reserved.<br />
            <span className="footer-highlight">Crafted with passion for culinary excellence</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
