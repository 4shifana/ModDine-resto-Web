// CartSidebar.jsx
import React from 'react';
import { ShoppingCart, Plus, Minus, X } from 'lucide-react';
import './CartSidebar.css';

const CartSidebar = ({ 
  isCartOpen, 
  setIsCartOpen, 
  cart, 
  updateQuantity, 
  removeFromCart, 
  getTotalPrice 
}) => {
  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-backdrop" onClick={() => setIsCartOpen(false)}></div>
      <div className="cart-sidebar">
        <div className="cart-header">
          <h3 className="cart-title">Your Order</h3>
          <button onClick={() => setIsCartOpen(false)} className="cart-close">
            <X size={24} />
          </button>
        </div>

        <div className="cart-content">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">
                <ShoppingCart size={32} />
              </div>
              <p className="cart-empty-text">Your cart is empty</p>
              <p className="cart-empty-subtext">Add some delicious items to get started</p>
            </div>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p>₹{item.price}</p>
                  </div>
                  <div className="cart-item-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <Minus size={16} />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus size={16} />
                    </button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="cart-item-remove">
                    <X size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>₹{getTotalPrice().toFixed(2)}</span>
            </div>
            <button className="cart-checkout">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
