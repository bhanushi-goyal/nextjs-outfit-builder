export async function GET() {
  const sampleItems = [
    { id: 'shirt-red', type: 'shirt', color: '#d32f2f', name: 'Shirt (Red)' },
    { id: 'shirt-blue', type: 'shirt', color: '#1976d2', name: 'Shirt (Blue)' },
    { id: 'shirt-green', type: 'shirt', color: '#388e3c', name: 'Shirt (Green)' },

    { id: 'pant-navy', type: 'pant', color: '#0d47a1', name: 'Jeans (Navy)' },
    { id: 'pant-gray', type: 'pant', color: '#757575', name: 'Jeans (Gray)' },
    { id: 'pant-black', type: 'pant', color: '#212121', name: 'Jeans (Black)' },

    { id: 'shoe-red', type: 'shoe', color: '#c62828', name: 'Shoes (Red)' },
    { id: 'shoe-blue', type: 'shoe', color: '#1565c0', name: 'Shoes (Blue)' },
    { id: 'shoe-green', type: 'shoe', color: '#2e7d32', name: 'Shoes (Green)' },
  ];
  return Response.json(sampleItems);
}
