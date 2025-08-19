import { useDrag } from 'react-dnd'

export default function DraggableItem({ item }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'CLOTHING',
    item: { ...item },
    collect: monitor => ({ isDragging: !!monitor.isDragging() })
  }))

  return (
    <div ref={dragRef} className={`w-20 h-20 flex items-center justify-center ${isDragging ? 'opacity-50' : ''}`}>
      <img src={item.src} alt={item.label} className="max-w-full max-h-full" />
    </div>
  )
}