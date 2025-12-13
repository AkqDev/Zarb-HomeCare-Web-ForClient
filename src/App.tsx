import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import Footer from './components/Footer';

import Homepage from './components/Homepage';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  variants: string[];
  reviews: number;
  rating: number;
  isNew?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedVariant: string;
}

export type OnAddToCart = (product: Product, variant: string) => void;

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart: OnAddToCart = (product, variant) => {
    setCartItems(prev => {
      const existingItem = prev.find(
        item => item.id === product.id && item.selectedVariant === variant
      );

      if (existingItem) {
        return prev.map(item =>
          item.id === product.id && item.selectedVariant === variant
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1, selectedVariant: variant }];
    });
  };

  const updateCartQuantity = (id: string, variant: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(prev =>
        prev.filter(item => !(item.id === id && item.selectedVariant === variant))
      );
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id && item.selectedVariant === variant
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  const removeFromCart = (id: string, variant: string) => {
    setCartItems(prev =>
      prev.filter(item => !(item.id === id && item.selectedVariant === variant))
    );
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header
          totalItems={totalItems}
          isMenuOpen={isMenuOpen}
          onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
          onOpenCart={() => setIsCartOpen(true)}
        />

        <main className="pt-16">
          <Routes>
            {/* ✅ Wrap addToCart to pass a default variant */}
            <Route
              path="/"
              element={
                <Homepage
                  onAddToCart={(product) => addToCart(product, "standard")}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={<h1 className="text-center py-20 text-3xl">404: Page Not Found</h1>}
            />
          </Routes>
        </main>

        <Footer />

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateCartQuantity}
          onRemove={removeFromCart}
        />
      </div>
    </BrowserRouter>
  );
}
