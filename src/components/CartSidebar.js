'use client';

export default function CartSidebar({ cart, onRemove }) {
  return (
    <div className="fixed bottom-6 left-6 z-50 w-80 max-w-full p-4 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col items-start justify-start"
      style={{ minHeight: '180px' }}>
      <h3 className="text-xl font-bold mb-3 text-blue-700 self-center w-full text-center">Cart</h3>
      {cart.length === 0 && <div className="text-sm text-gray-500 self-center w-full text-center">No outfits yet</div>}
      <div className="space-y-4 w-full">
        {cart.map(entry => (
          <div key={entry.id} className="border p-3 rounded-lg bg-gray-50 shadow flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-700">Added:</span>
              <span className="text-xs text-gray-700">{new Date(entry.id).toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs">Items:</span>
              <span className="text-xs">{Object.values(entry.outfit).filter(Boolean).length}</span>
            </div>
            <div className="mt-2 flex gap-2 justify-end">
              <button onClick={() => onRemove(entry.id)} className="px-3 py-1 bg-red-500 text-white rounded shadow hover:bg-red-600 text-xs font-semibold">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
