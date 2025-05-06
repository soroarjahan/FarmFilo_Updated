
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { toast } from '@/components/ui/sonner';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem('farmfilo_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse stored cart', error);
        localStorage.removeItem('farmfilo_cart');
      }
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('farmfilo_cart', JSON.stringify(cartItems));
  }, [cartItems]);
  
  // Calculate total items
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  
  // Add product to cart
  const addToCart = (product: Product, quantity: number) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.product.id === product.id);
      
      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        const newQuantity = updatedItems[existingItemIndex].quantity + quantity;
        
        if (newQuantity > product.quantityAvailable) {
          toast.error(`Sorry, only ${product.quantityAvailable} items available.`);
          return prevItems;
        }
        
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: newQuantity
        };
        return updatedItems;
      } else {
        if (quantity > product.quantityAvailable) {
          toast.error(`Sorry, only ${product.quantityAvailable} items available.`);
          return prevItems;
        }
        return [...prevItems, { product, quantity }];
      }
    });
    
    toast.success(`${quantity} × ${product.name} added to cart.`);
  };
  
  // Update item quantity
  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.product.id === productId) {
          if (quantity > item.product.quantityAvailable) {
            toast.error(`Sorry, only ${item.product.quantityAvailable} items available.`);
            return item;
          }
          return { ...item, quantity };
        }
        return item;
      });
    });
  };
  
  // Remove item from cart
  const removeFromCart = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
    toast.info('Item removed from cart.');
  };
  
  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    toast.info('Cart cleared.');
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      totalItems,
      subtotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
