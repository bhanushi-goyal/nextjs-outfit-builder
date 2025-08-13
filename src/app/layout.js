import './globals.css';
import { CartProvider } from '../components/CartContext';

export const metadata = {
  title: 'Outfit Builder',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="w-full max-w-4xl rounded-xl shadow-lg border border-gray-300 bg-white p-8">
              <header className="mb-6">
                <div className="flex justify-center items-center">
                  <h1 className="text-2xl font-bold text-gray-800">Outfit Builder</h1>
                </div>
              </header>
              <main>{children}</main>
            </div>
          </div>
        </CartProvider>
      </body>
    </html>
  )
}