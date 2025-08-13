'use client'
import React from 'react';
import { ShirtIcon, PantIcon, ShoeIcon } from './icons';

export default function Palette({ items = [] }) {
  function handleDragStart(e, item) {
    e.dataTransfer.setData('application/json', JSON.stringify(item))
  }

  function renderIcon(item) {
    if (item.type === 'shirt') return <ShirtIcon color={item.color} size={64} />
    if (item.type === 'pant') return <PantIcon color={item.color} size={64} />
    if (item.type === 'shoe') return <ShoeIcon color={item.color} size={64} />
    return null
  }

  return (
    <div className="p-3 bg-white rounded-md shadow-sm space-y-2 max-h-[60vh] overflow-auto">
      <h3 className="text-sm font-medium mb-2">Clothing palette</h3>
      <div className="grid grid-cols-3 gap-2">
        {items.map(i => (
          <div
            key={i.id}
            draggable
            onDragStart={e => handleDragStart(e, i)}
            className="flex flex-col items-center text-xs cursor-grab"
          >
            {renderIcon(i)}
            <div className="mt-1 text-center">{i.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
