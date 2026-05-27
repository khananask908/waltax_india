import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      
      addItem: (item) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex((i) => i.id === item.id);
        
        let newItems: CartItem[];
        
        if (existingItemIndex >= 0) {
          // Update existing item quantity
          newItems = currentItems.map((i, index) =>
            index === existingItemIndex
              ? { ...i, quantity: i.quantity + (item.quantity || 1) }
              : i
          );
        } else {
          // Add new item
          newItems = [...currentItems, { ...item, quantity: item.quantity || 1 }];
        }
        
        const newTotal = calculateTotal(newItems);
        
        set({
          items: newItems,
          total: newTotal
        });
        
        console.log('Item added to cart:', item);
        console.log('New cart state:', { items: newItems, total: newTotal });
      },
      
      removeItem: (id) => {
        const currentItems = get().items;
        const newItems = currentItems.filter((item) => item.id !== id);
        const newTotal = calculateTotal(newItems);
        
        set({
          items: newItems,
          total: newTotal
        });
        
        console.log('Item removed from cart:', id);
        console.log('New cart state:', { items: newItems, total: newTotal });
      },
      
      updateQuantity: (id, quantity) => {
        const currentItems = get().items;
        const newItems = currentItems.map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        );
        const newTotal = calculateTotal(newItems);
        
        set({
          items: newItems,
          total: newTotal
        });
        
        console.log('Quantity updated:', { id, quantity });
        console.log('New cart state:', { items: newItems, total: newTotal });
      },
      
      clearCart: () => {
        set({ items: [], total: 0 });
        console.log('Cart cleared');
      },
      
      getTotal: () => {
        const items = get().items;
        return calculateTotal(items);
      }
    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({
        items: state.items,
        total: state.total
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Recalculate total after rehydration
          const newTotal = calculateTotal(state.items);
          state.total = newTotal;
        }
      }
    }
  )
);