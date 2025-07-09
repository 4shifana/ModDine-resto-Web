import React from 'react';
import { ShoppingCart, Menu as MenuIcon } from 'lucide-react';
import './Header.css'; // ✅ Import your CSS here

const Header = ({ getTotalItems, setIsCartOpen, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="brand">
            <div className="brand-icon">
              <span className="brand-letter">M</span>
            </div>
            <div>
              <h1 className="brand-title">ModDine</h1>
              <span className="brand-subtitle">Modern Cuisine</span>
            </div>
          </div>

          <nav className="nav-desktop">
            <a href="#home" className="nav-link">Home</a>
            <a href="#menu" className="nav-link">Menu</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="actions">
            <button onClick={() => setIsCartOpen(true)} className="cart-button">
              <ShoppingCart size={20} />
              <span className="cart-label">Cart</span>
              {getTotalItems() > 0 && (
                <span className="cart-badge">{getTotalItems()}</span>
              )}
            </button>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="menu-button">
              <MenuIcon size={24} />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="nav-mobile">
            <nav className="nav-mobile-list">
              <a href="#home" className="nav-mobile-link">Home</a>
              <a href="#menu" className="nav-mobile-link">Menu</a>
              <a href="#about" className="nav-mobile-link">About</a>
              <a href="#contact" className="nav-mobile-link">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
