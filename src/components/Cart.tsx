import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import type { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, variant: string, quantity: number) => void;
  onRemove: (id: string, variant: string) => void;
}

export default function Cart({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemove,
}: CartProps) {
  // Calculations
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;
  const amountToFreeShipping = Math.max(0, 500 - subtotal);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />

      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-semibold">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
            aria-label="Close cart"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <ShoppingBag className="w-24 h-24 text-gray-300 mb-4" />
              <h3 className="text-xl mb-2 text-gray-600">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">
                Add some eco-friendly products to get started!
              </p>
              <button
                onClick={onClose}
                className="bg-[#786808] hover:bg-[#665a07] text-white px-6 py-3 rounded-full transition"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.selectedVariant}`}
                  className="flex gap-4 bg-gray-50 rounded-lg p-4"
                >
                  {/* Image */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-white flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium truncate">{item.name}</h3>
                    <p className="text-xs text-gray-600 mb-2">{item.selectedVariant}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-[#786808] font-semibold">
                        pkr{(item.price * item.quantity).toFixed(2)}
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            onUpdateQuantity(
                              item.id,
                              item.selectedVariant,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <Minus className="w-3 h-3" />
                        </button>

                        <span className="text-sm w-8 text-center">{item.quantity}</span>

                        <button
                          onClick={() =>
                            onUpdateQuantity(item.id, item.selectedVariant, item.quantity + 1)
                          }
                          className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => onRemove(item.id, item.selectedVariant)}
                    className="text-gray-400 hover:text-red-500 transition"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">pkr{subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span
                  className={shipping === 0 ? 'text-[#786808] font-medium' : 'font-medium'}
                >
                  {shipping === 0 ? 'FREE' : `pkr${shipping.toFixed(2)}`}
                </span>
              </div>

              {shipping > 0 && (
                <p className="text-xs text-[#786808] text-right font-medium">
                  Add pkr{amountToFreeShipping.toFixed(2)} more for free shipping!
                </p>
              )}

              <div className="flex justify-between pt-2 border-t border-gray-200">
                <span className="text-sm font-semibold">Total</span>
                <span className="text-sm font-semibold text-[#786808]">
                  pkr{total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              className="w-full bg-[#786808] text-white py-3 rounded-full inline-flex items-center justify-center gap-2 hover:scale-[1.01] transition font-semibold"
              aria-label="Proceed to Checkout"
            >
              Proceed to Checkout
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-xs font-semibold text-center text-gray-500">
              COD Available • Secure Checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
}
