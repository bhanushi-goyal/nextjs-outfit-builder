'use client'
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(outfit) {
    setCart(prev => [{ id: Date.now().toString(), outfit, createdAt: new Date() }, ...prev])
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(i => i.id !== id))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}