import DraggableItem from './DraggableItem'

export default function ItemPalette({ items = [] }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 h-[80vh] overflow-auto">
      <h2 className="font-semibold mb-3">Items</h2>
      <div className="grid grid-cols-2 gap-3">
        {items.map(i => (
          <div key={i.id} className="p-2 border rounded flex flex-col items-center bg-gray-50">
            <DraggableItem item={i} />
            <div className="text-xs mt-2">{i.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}