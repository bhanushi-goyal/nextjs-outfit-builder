'use client'
import React, { useRef } from 'react';
import Image from 'next/image';

export default function CanvasItem({ item, selected, onSelect, onMove, onDelete }) {
  const dragState = useRef(null);

  function handlePointerDown(e) {
    e.stopPropagation();
    onSelect(item.id);

    dragState.current = {
      startX: e.clientX,
      startY: e.clientY,
      origX: item.x,
      origY: item.y,
    }
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  }

  function onPointerMove(e) {
    if (!dragState.current) return
    const dx = e.clientX - dragState.current.startX
    const dy = e.clientY - dragState.current.startY
    onMove(item.id, dragState.current.origX + dx, dragState.current.origY + dy)
  }

  function onPointerUp() {
    dragState.current = null
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      style={{
        position: 'absolute',
        left: item.x - (item.width || 80) / 2,
        top: item.y - (item.height || 80) / 2,
        zIndex: item.z || 1,
        touchAction: 'none',
        marginBottom: 24,
        marginTop: 24,
        boxShadow: selected ? '0 4px 24px 0 #60a5fa33' : '0 2px 8px 0 #e0e7ef22',
        borderRadius: '16px',
        background: 'rgba(255,255,255,0.85)',
        border: selected ? '2px solid #3b82f6' : '1px solid #e0e7ef',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s cubic-bezier(.4,2,.3,1)',
        overflow: 'visible'
      }}
      className={`canvas-item ${selected ? 'ring-2 ring-blue-400' : ''}`}
    >
      <Image
        src={item.src}
        alt="placed"
        width={item.width || 80}
        height={item.height || 80}
        style={{ objectFit: 'contain', borderRadius: 8, background: '#fff' }}
        unoptimized
      />
      {selected && (
        <button
          onClick={(e) => { e.stopPropagation(); onDelete(item.id) }}
          className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 text-xs"
        >
          X
        </button>
      )}
    </div>
  )
}