import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 

import Layout from './Layout';
import Hero from './Components/Hero/Hero';
import Stats from './Components/Stats/Stats';
import MenuPage from './Pages/MenuPage';
import About from './Components/About/About';
import Contact from './Components/ContactUs/Contact';

import { CartProvider, useCart } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { FilterProvider } from './context/FilterContext';

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <MenuPage />
      <About />
      <Contact />
    </>
  );
}

function LayoutWrapper() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    getTotalItems,
    isCartOpen,
    setIsCartOpen,
    isMobileMenuOpen,
    setIsMobileMenuOpen
  } = useCart();

  return (
    <Layout
      cart={cart}
      updateQuantity={updateQuantity}
      removeFromCart={removeFromCart}
      getTotalPrice={getTotalPrice}
      getTotalItems={getTotalItems}
      isCartOpen={isCartOpen}
      setIsCartOpen={setIsCartOpen}
      isMobileMenuOpen={isMobileMenuOpen}
      setIsMobileMenuOpen={setIsMobileMenuOpen}
    />
  );
}

function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <FilterProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LayoutWrapper />}>
                <Route index element={<HomePage />} />
              </Route>
            </Routes>
          </Router>
        </FilterProvider>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;
