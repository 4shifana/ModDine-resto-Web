import React from 'react';
import { Star, Heart, Plus } from 'lucide-react';
import './MenuItem.css'; // External CSS for styling

const MenuItem = ({ item, favorites, toggleFavorite, addToCart }) => {
  const isFavorite = favorites.includes(item.id);

  return (
    <div className="menu-card">
      <div className="menu-image-wrapper">
        <img 
          src={item.image} 
          alt={item.name}
          className="menu-image"
        />

        <div className="menu-labels">
          {item.isPopular && (
            <span className="menu-label popular">🔥 Popular</span>
          )}
          {item.isNew && (
            <span className="menu-label new">✨ New</span>
          )}
        </div>

        <button
          onClick={() => toggleFavorite(item.id)}
          className="menu-favorite-button"
        >
          <Heart 
            size={18} 
            className={`heart-icon ${isFavorite ? 'active' : ''}`} 
          />
        </button>
      </div>

      <div className="menu-details">
        <div className="menu-header">
          <h4 className="menu-title">{item.name}</h4>
          <div className="menu-rating">
            <Star size={16} className="star-icon" />
            <span className="rating-value">{item.rating}</span>
          </div>
        </div>

        <p className="menu-description">
          {item.description}
        </p>

        <div className="menu-footer">
          <span className="menu-price">₹{item.price}</span>
          <button
            onClick={() => addToCart(item)}
            className="menu-add-button"
          >
            <Plus size={16} className="plus-icon" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
