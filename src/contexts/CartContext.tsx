
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/types/product';
import { toast } from '@/components/ui/sonner';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  cartItems: CartItem[]; // Added alias for cart for compatibility
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  totalItems: number; // Added for convenience
  subtotal: number; // Added for convenience
}

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number) => {
    const existingItem = cart.find(item => item.product.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.product.id === product.id 
          ? { ...item, quantity: item.quantity + quantity } 
          : item
      ));
      toast.success(`Added ${quantity} more ${product.name} to your cart`);
    } else {
      setCart([...cart, { product, quantity }]);
      toast.success(`Added ${product.name} to your cart`);
    }
  };

  const removeFromCart = (productId: string) => {
    const productToRemove = cart.find(item => item.product.id === productId)?.product.name;
    setCart(cart.filter(item => item.product.id !== productId));
    
    if (productToRemove) {
      toast.info(`Removed ${productToRemove} from your cart`);
    }
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(cart.map(item => 
      item.product.id === productId ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => {
    setCart([]);
    toast.info('Cart has been cleared');
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  // Calculate these values for easier access
  const totalItems = getCartCount();
  const subtotal = getCartTotal();

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        cartItems: cart, // Alias for compatibility
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        getCartTotal,
        getCartCount,
        totalItems,
        subtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
