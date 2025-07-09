// Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header';
import CartSidebar from './Components/Cart/CartSidebar';
import Footer from './Components/Footer/Footer';

const Layout = ({
  getTotalItems,
  setIsCartOpen,
  isCartOpen,
  cart,
  updateQuantity,
  removeFromCart,
  getTotalPrice,
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) => {
  return (
    <>
      {/* Header */}
      <Header
        getTotalItems={getTotalItems}
        setIsCartOpen={setIsCartOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Cart Sidebar */}
      <CartSidebar
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        getTotalPrice={getTotalPrice}
      />

      {/* Main content area */}
      <main className="min-h-screen">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layout;