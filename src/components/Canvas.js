'use client'
import React, { useRef, useState } from 'react';
import { useCart } from './CartContext';
import { ShirtIcon, PantIcon, ShoeIcon } from './icons';

export default function Canvas() {
  const canvasRef = useRef(null);
  const iconSize = 130;
  const { addToCart } = useCart();

  const [items, setItems] = useState([
    { id: 'slot-shirt', type: 'shirt', placeholder: true, color: '#cccccc' },
    { id: 'slot-pant', type: 'pant', placeholder: true, color: '#cccccc' },
    { id: 'slot-shoe', type: 'shoe', placeholder: true, color: '#cccccc' }
  ])
  const [selectedId, setSelectedId] = useState(null);

  function onDragOver(e) {
    e.preventDefault();
  };

  function onDrop(e) {
    e.preventDefault();
    const json = e.dataTransfer.getData('application/json');
    if (!json) return
    const payload = JSON.parse(json);

    let targetSlot = null;
    if (payload.type === 'shirt') targetSlot = 'shirt';
    if (payload.type === 'pant') targetSlot = 'pant';
    if (payload.type === 'shoe') targetSlot = 'shoe';

    if (targetSlot) {
      setItems(prev =>
        prev.map(i =>
          i.type === targetSlot
            ? { ...i, color: payload.color, placeholder: false }
            : i
        )
      )
    }
  }

  function handleDelete(id) {
    setItems(prev =>
      prev.map(i =>
        i.id === id
          ? { ...i, placeholder: true, color: '#cccccc' }
          : i
      )
    )
    if (selectedId === id) setSelectedId(null);
  }

  function handleAddToCart() {
    const filled = items.filter(i => !i.placeholder);
    if (filled.length < 3) return alert('Add items to all slots first');
    addToCart(items);
    alert('Outfit added to cart');
  }

  function reset() {
    setItems(prev =>
      prev.map(i => ({ ...i, placeholder: true, color: '#cccccc' }))
    )
    setSelectedId(null);
  }

  function renderIcon(it) {
    const props = { color: it.color, size: iconSize };
    if (it.type === 'shirt') return <ShirtIcon {...props} />
    if (it.type === 'pant') return <PantIcon {...props} />
    if (it.type === 'shoe') return <ShoeIcon {...props} />
    return null;
  }

  return (
  <div className="w-full max-w-3xl mx-auto p-8 rounded-2xl shadow-2xl border border-gray-200 bg-gradient-to-b from-gray-50 via-white to-gray-100" style={{minWidth: 400, maxWidth: 600}}>
      <div
        ref={canvasRef}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onClick={() => setSelectedId(null)}
        className="relative w-full h-[520px] bg-white rounded-xl border-2 border-dashed border-blue-300 overflow-hidden shadow-inner flex flex-col items-center justify-center gap-12"
      >
        {items.map((it, idx) => (
          <div
            key={it.id}
            style={{
              opacity: it.placeholder ? 0.4 : 1,
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              transform: selectedId === it.id ? 'scale(1.05)' : 'scale(1)',
              boxShadow: selectedId === it.id ? '0 0 0 4px rgba(59,130,246,0.6)' : 'none',
              width: iconSize,
              height: iconSize,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: it.placeholder ? '2px dashed #cbd5e1' : 'none',
              borderRadius: '12px',
              backgroundColor: it.placeholder ? '#f8fafc' : 'transparent',
              position: 'relative'
            }}
            onClick={() => setSelectedId(it.id)}
          >
            {renderIcon(it)}
            {!it.placeholder && (
              <button
                onClick={e => {
                  e.stopPropagation()
                  handleDelete(it.id)
                }}
                className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 text-xs shadow hover:bg-red-700"
              >
                ×
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-4 items-center mt-6 justify-center">
        <button
          onClick={handleAddToCart}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg cursor-pointer font-semibold shadow hover:bg-blue-700 transition-all"
        >
          Add to cart
        </button>
        <button
          onClick={reset}
          className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg cursor-pointer font-semibold shadow hover:bg-gray-200 transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
