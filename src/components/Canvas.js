import OutfitSlot from './OutfitSlot'

export default function Canvas({ outfit, onDropToSlot, onClear, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="relative w-[360px] h-[640px] mx-auto border">
        {/* <img src="/assets/body.svg" alt="body" className="absolute inset-0 w-full h-full object-contain" /> */}
        <OutfitSlot id="head" acceptTypes={["head"]} style={{ top: '6%', left: '28%', width: '44%', height: '14%' }} placedItem={outfit.head} onDrop={onDropToSlot} />
        <OutfitSlot id="eyes" acceptTypes={["eyes"]} style={{ top: '18%', left: '30%', width: '40%', height: '8%' }} placedItem={outfit.eyes} onDrop={onDropToSlot} />
        <OutfitSlot id="top" acceptTypes={["top"]} style={{ top: '26%', left: '22%', width: '56%', height: '30%' }} placedItem={outfit.top} onDrop={onDropToSlot} />
        <OutfitSlot id="waist" acceptTypes={["waist"]} style={{ top: '50%', left: '28%', width: '44%', height: '10%' }} placedItem={outfit.waist} onDrop={onDropToSlot} />
        <OutfitSlot id="legs" acceptTypes={["legs"]} style={{ top: '60%', left: '24%', width: '52%', height: '30%' }} placedItem={outfit.legs} onDrop={onDropToSlot} />
        <OutfitSlot id="feet" acceptTypes={["feet"]} style={{ top: '88%', left: '30%', width: '40%', height: '8%' }} placedItem={outfit.feet} onDrop={onDropToSlot} />
      </div>
      <div className="flex gap-4 mt-6 justify-center">
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 font-semibold shadow"
          onClick={onClear}
        >
          Clear Canvas
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold shadow"
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}