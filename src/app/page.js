'use client'
import { useState } from 'react'
import ItemPalette from '../components/ItemPalette'
import Canvas from '../components/Canvas'
import CartButton from '../components/CartButton'
import CartSidebar from '../components/CartSidebar'

const ITEMS = [
  { id: 'hat-1', type: 'head', label: 'Hat', src: '/hat.png' },
  { id: 'hat-2', type: 'head', label: 'Hat', src: '/cap.png' },
  { id: 'glasses-1', type: 'eyes', label: 'Glasses', src: '/glasses.png' },
  { id: 'top-1', type: 'top', label: 'Top', src: '/top.png' },
  { id: 'top-2', type: 'top', label: 'Top', src: '/top1.webp' },
  { id: 'top-3', type: 'top', label: 'Top', src: '/top2.jpg' },
  { id: 'top-4', type: 'top', label: 'Top', src: '/top3.jpg' },
  { id: 'top-5', type: 'top', label: 'Top', src: '/top5.png' },
  { id: 'belt-1', type: 'waist', label: 'Belt', src: '/belt.webp' },
  { id: 'belt-2', type: 'waist', label: 'Belt', src: '/belt.jpg' },
  { id: 'jeans-1', type: 'legs', label: 'Jeans', src: '/jeans.png' },
  { id: 'jeans-2', type: 'legs', label: 'Jeans', src: '/bottom1.webp' },
  { id: 'jeans-3', type: 'legs', label: 'Jeans', src: '/bottom2.webp' },
  { id: 'jeans-4', type: 'legs', label: 'Jeans', src: '/bottom3.jpg' },
  { id: 'jeans-5', type: 'legs', label: 'Jeans', src: '/bottom5.png' },
  { id: 'shoes-1', type: 'feet', label: 'Shoes', src: '/shoes.webp' },
  { id: 'shoes-2', type: 'feet', label: 'Shoes', src: '/shoes2.webp' },
  { id: 'shoes-3', type: 'feet', label: 'Shoes', src: '/shoes3.jpg' },
  { id: 'shoes-4', type: 'feet', label: 'Shoes', src: '/shoes4.jpg' },
  { id: 'shoes-5', type: 'feet', label: 'Shoes', src: '/shoes5.png' }
]

export default function HomePage() {
  const [outfit, setOutfit] = useState({ head: null, eyes: null, top: null, waist: null, legs: null, feet: null });
  const [cart, setCart] = useState([]);

  function onDropToSlot(slotId, item) {
    setOutfit(prev => ({ ...prev, [slotId]: item }));
  }

  function handleAddToCart() {
    const snapshot = { id: Date.now(), outfit };
    setCart(prev => [...prev, snapshot]);
    localStorage.setItem('outfit_cart', JSON.stringify([...cart, snapshot]));
    alert('Added outfit to cart');
  }

  function handleRemoveFromCart(id) {
    setCart(prev => prev.filter(entry => entry.id !== id));
    localStorage.setItem('outfit_cart', JSON.stringify(cart.filter(entry => entry.id !== id)));
  }

  function handleClearCanvas() {
    setOutfit({ head: null, eyes: null, top: null, waist: null, legs: null, feet: null });
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Outfit Builder</h1>
      <div className="flex gap-6">
        <div className="w-80">
          <ItemPalette items={ITEMS} />
        </div>
        <div className="flex-1">
          <Canvas
            outfit={outfit}
            onDropToSlot={onDropToSlot}
            onAddToCart={handleAddToCart}
            onClear={handleClearCanvas}
          />
        </div>
      </div>
      <CartSidebar cart={cart} onRemove={handleRemoveFromCart} />
    </div>
  );
}