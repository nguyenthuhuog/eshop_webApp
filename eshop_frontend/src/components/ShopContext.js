import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (id) => {
    setCartItems((prev) => {
      const newCartItems = { ...prev };
      newCartItems[id] = (newCartItems[id] || 0) + 1;
      return newCartItems;
    });
  };

  return (
    <ShopContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </ShopContext.Provider>
  );
};
