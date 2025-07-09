import React from 'react';
import { Search } from 'lucide-react';
import MenuItem from './MenuItem';
import './MenuSection.css'; // 👈 import the CSS file

const MenuSection = ({
  searchTerm,
  setSearchTerm,
  activeCategory,
  setActiveCategory,
  filteredMenuItems,
  favorites,
  toggleFavorite,
  addToCart
}) => {
  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
    { id: 'mains', name: 'Main Courses', icon: '🥩' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'beverages', name: 'Beverages', icon: '🍷' }
  ];

  return (
    <section id="menu" className="menu-section">
      <div className="menu-container">
        <div className="menu-heading">
          <span className="menu-tag">Our Menu</span>
          <h3 className="menu-title">Culinary Masterpieces</h3>
          <p className="menu-subtitle">
            Each dish is a work of art, carefully crafted with the finest ingredients
          </p>
        </div>

        {/* Search and Filters */}
        <div className="menu-controls">
          <div className="search-wrapper">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}

              >
                <span>{category.icon}</span> <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="menu-grid">
          {filteredMenuItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
