import React from 'react';
import MenuSection from '../Components/Menu/MenuSection';
import { menuItems } from '../Components/Menu/Data/Menujson';

import { useFilter } from '../context/FilterContext';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';

function MenuPage() {
  const { searchTerm, setSearchTerm, activeCategory, setActiveCategory } = useFilter();
  const { favorites, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();

  const filteredMenuItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <MenuSection
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      filteredMenuItems={filteredMenuItems}
      favorites={favorites}
      toggleFavorite={toggleFavorite}
      addToCart={addToCart}
    />
  );
}

export default MenuPage;
