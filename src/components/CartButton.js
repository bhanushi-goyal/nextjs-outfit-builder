export default function CartButton({ onAdd }) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onAdd}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add outfit to cart
      </button>
      <div className="text-sm text-gray-600">
        Your outfit will be saved to localStorage (demo)
      </div>
    </div>
  )
}