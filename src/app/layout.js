import DndClientProvider from '../components/DndClientProvider';
import './globals.css';
import { CartProvider } from '../components/CartContext';

export const metadata = {
  title: 'Outfit Builder',
  description: 'Drag-and-drop outfit customization tool',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <DndClientProvider>{children}</DndClientProvider>
        </CartProvider>
      </body>
    </html>
  );
}