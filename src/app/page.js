import Palette from '../components/Palette';
import Canvas from '../components/Canvas';
import CartSidebar from '../components/CartSidebar';

async function getItems() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/items`, { next: { revalidate: 0 } });
  return res.json();
}

export default async function Page() {
  const items = await getItems();
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-3">
        <Palette items={items} />
        <div className="mt-4">
          <CartSidebar />
        </div>
      </div>
      <div className="col-span-9">
        <Canvas modelSrc={null} />
      </div>
    </div>
  );
}
