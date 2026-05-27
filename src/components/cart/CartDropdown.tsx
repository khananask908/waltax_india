'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Plus, Minus, Trash2, CreditCard, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '../../store/cartStore';
import { useWalletStore } from '../../store/walletStore';
import Button from '../ui/Button';

interface CartDropdownProps {
  onClose: () => void;
}

const CartDropdown = ({ onClose }: CartDropdownProps) => {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();
  const { balance, applyDiscount, addCashback } = useWalletStore();
  const total = useCartStore((state) => state.total);
  const router = useRouter();
  
  // Calculate wallet discount (30% of wallet balance, max 30% of order total)
  const maxWalletDiscount = Math.min(balance * 0.3, total * 0.3);
  const walletDiscount = Math.floor(maxWalletDiscount);
  const finalTotal = total - walletDiscount;

  const handleProceedToPayment = () => {
    onClose();
    router.push('/payment');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute right-0 top-full mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50"
    >
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-t-2xl flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold">Shopping Cart</h3>
          <p className="text-primary-100 text-sm">{items.length} item(s) in cart</p>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 p-1.5 hover:bg-white/10 rounded-full transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="max-h-80 overflow-y-auto p-4">
        {items.length === 0 ? (
          <div className="text-center py-8">
            <ShoppingCart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Your cart is empty</p>
            <p className="text-gray-400 text-sm mt-2">Add some services to get started</p>
          </div>
        ) : (
          <div className="space-y-3">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gray-50 rounded-xl p-3 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">{item.name}</h4>
                      <p className="text-primary-600 font-bold">₹{item.price.toLocaleString()}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-600 p-1 hover:bg-red-50 rounded-full transition-colors"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-white rounded-lg p-1.5">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, Math.max(1, item.quantity - 1))
                        }
                        className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 font-bold transition-colors text-sm"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="font-semibold text-gray-900 min-w-[16px] text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 font-bold transition-colors text-sm"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Subtotal</p>
                      <p className="font-bold text-gray-900 text-sm">₹{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Checkout Section */}
      {items.length > 0 && (
        <div className="border-t bg-gray-50 p-4 rounded-b-2xl">
          {/* Wallet Discount Section */}
          {balance > 0 && (
            <div className="mb-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-yellow-800 font-medium">💰 Wallet Balance:</span>
                <span className="font-bold text-yellow-800">₹{balance.toLocaleString()}</span>
              </div>
              {walletDiscount > 0 && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-800 font-medium">🎉 Wallet Discount (30%):</span>
                  <span className="font-bold text-green-800">-₹{walletDiscount.toLocaleString()}</span>
                </div>
              )}
            </div>
          )}

          {/* Order Summary */}
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-gray-600 text-sm">
              <span>Subtotal:</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
            {walletDiscount > 0 && (
              <div className="flex justify-between text-green-600 text-sm">
                <span>Wallet Discount:</span>
                <span>-₹{walletDiscount.toLocaleString()}</span>
              </div>
            )}
            <div className="border-t pt-2">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">Total:</span>
                <span className="text-xl font-bold text-primary-600">₹{finalTotal.toLocaleString()}</span>
              </div>
            </div>
            {finalTotal > 0 && (
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  🎁 You'll earn ₹{Math.floor(finalTotal * 0.5).toLocaleString()} cashback!
                </div>
              </div>
            )}
          </div>

          <Button
            onClick={handleProceedToPayment}
            className="w-full py-3 text-base font-bold bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            size="lg"
          >
            <ArrowRight className="h-4 w-4 mr-2" />
            Proceed to Payment
          </Button>
          
          <p className="text-xs text-gray-500 text-center mt-2">
            Secure payment powered by Razorpay
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CartDropdown;