export async function GET() {
  const sampleItems = [
    { id: 'shirt-red', type: 'shirt', color: '#d32f2f', name: 'Shirt (Red)' },
    { id: 'shirt-blue', type: 'shirt', color: '#1976d2', name: 'Shirt (Blue)' },
    { id: 'shirt-green', type: 'shirt', color: '#388e3c', name: 'Shirt (Green)' },

    { id: 'pant-navy', type: 'pant', color: '#0d47a1', name: 'Jeans (Navy)' },
    { id: 'pant-gray', type: 'pant', color: '#757575', name: 'Jeans (Gray)' },
    { id: 'pant-black', type: 'pant', color: '#212121', name: 'Jeans (Black)' },

    { id: 'shoe-red', type: 'shoe', color: '#d32f2f', name: 'Shoes (Red)' },
    { id: 'shoe-green', type: 'shoe', color: '#388e3c', name: 'Shoes (Green)' },
    { id: 'shoe-gray', type: 'shoe', color: '#757575', name: 'Shoes (Black)' },
  ];
  return Response.json(sampleItems);
}
