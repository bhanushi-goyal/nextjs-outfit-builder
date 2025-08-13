'use client'
import React from 'react';
import { useCart } from './CartContext';

export default function CartSidebar() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-3 bg-white rounded-md shadow-sm">
      <h3 className="text-sm font-medium">Cart</h3>
      {cart.length === 0 && <div className="text-xs text-gray-500 mt-2">No outfits yet</div>}
      <div className="space-y-2 mt-2">
        {cart.map(entry => (
          <div key={entry.id} className="border p-2 rounded">
            <div className="text-xs text-gray-700">Added: {new Date(entry.createdAt).toLocaleString()}</div>
            <div className="text-xs">Items: {entry.outfit.length}</div>
            <div className="mt-1 flex gap-2">
              <button onClick={() => removeFromCart(entry.id)} className="text-red-500 text-xs cursor-pointer">Remove</button>
            </div>
          </div>
        ))}
      </div>  
    </div>
  );
};