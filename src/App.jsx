import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./Layout";
import Hero from "./Components/Hero/Hero";
import Stats from "./Components/Stats/Stats";
import MenuPage from "./Pages/MenuPage";
import About from "./Components/About/About";
import Contact from "./Components/ContactUs/Contact";

import { CartProvider, useCart } from "./context/CartContext.jsx";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import { FilterProvider } from "./context/FilterContext.jsx";

// 👉 This is your homepage content
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

// 👉 Wraps layout so we can pass cart/favorites props
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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LayoutWrapper />}>
                {/* 👇 This is your one‑page content */}
                <Route index element={<HomePage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </FilterProvider>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;
