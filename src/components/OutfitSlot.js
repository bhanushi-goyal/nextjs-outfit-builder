import { useDrop } from 'react-dnd'

export default function OutfitSlot({ id, acceptTypes = [], style = {}, placedItem, onDrop }) {
  const [{ isOver, canDrop }, dropRef] = useDrop(() => ({
    accept: 'CLOTHING',
    drop: (droppedItem) => {
      if (!acceptTypes.includes(droppedItem.type)) return undefined
      onDrop(id, droppedItem)
      return { moved: true }
    },
    canDrop: (droppedItem) => acceptTypes.includes(droppedItem.type),
    collect: (monitor) => ({ isOver: !!monitor.isOver(), canDrop: !!monitor.canDrop() })
  }));

    // Map placeholder images for empty slots
  const placeholderMap = {
    head: '/assets/hat.png',
    eyes: '/assets/glasses.png',
    top: '/assets/top.png',
    waist: '/assets/belt.webp',
    legs: '/assets/jeans.png',
    feet: '/assets/shoes.webp'
  };

  return (
    <div
      ref={dropRef}
      className={`absolute group ${isOver && canDrop ? 'outline outline-4 outline-blue-300' : ''}`}
      style={style}
    >
      {placedItem && placedItem.src ? (
        <div className="relative w-full h-full">
          <img src={placedItem.src} alt={placedItem.label} className="w-full h-full object-contain" />
          <button
            type="button"
            className="absolute top-1 right-1 w-6 h-6 flex items-center justify-center bg-white bg-opacity-80 rounded-full shadow text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={e => {
              e.stopPropagation();
              onDrop(id, null);
            }}
            title="Remove item"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-gray-400 opacity-40 rounded-md">
          <span className="text-xs text-gray-500 capitalize">{id}</span>
        </div>
      )}
    </div>
  )
}