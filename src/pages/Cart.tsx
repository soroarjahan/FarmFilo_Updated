
import React from 'react';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/sonner';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!isAuthenticated) {
      toast.info("Please login to proceed to checkout", {
        action: {
          label: "Login",
          onClick: () => navigate('/login')
        }
      });
      return;
    }
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-center min-h-[400px]">
            <ShoppingBag className="h-16 w-16 text-farmfilo-primary mb-6" />
            <h1 className="text-3xl font-bold text-farmfilo-darkGreen mb-4">Your cart is empty</h1>
            <p className="text-lg text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Link to="/marketplace">
              <Button className="bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-farmfilo-darkGreen mb-8">Shopping Cart</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-grow">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                  <h2 className="text-xl font-semibold text-farmfilo-darkGreen">Cart Items</h2>
                  <Button variant="ghost" size="sm" onClick={clearCart} className="text-red-500 hover:text-red-700">
                    <Trash2 className="h-4 w-4 mr-1" /> Clear Cart
                  </Button>
                </div>
                
                {cartItems.map(item => (
                  <div key={item.product.id} className="flex flex-col sm:flex-row items-center py-4 border-b last:border-b-0">
                    <div className="w-20 h-20 mr-4 rounded-md overflow-hidden">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-grow mb-3 sm:mb-0">
                      <h3 className="font-medium text-farmfilo-darkGreen">{item.product.name}</h3>
                      <p className="text-sm text-gray-500">Farmer: {item.product.farmer}</p>
                      {item.product.ecoFriendly && (
                        <span className="inline-flex items-center text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full mt-1">
                          Eco-friendly
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-3 mb-2 sm:mb-0 sm:mr-4">
                      <Button 
                        size="icon" 
                        variant="outline" 
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button 
                        size="icon" 
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    
                    <div className="w-24 text-right sm:ml-4">
                      <p className="font-medium">৳{item.product.price * item.quantity}</p>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-red-500 hover:text-red-700 mt-1 p-0 h-auto"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <Trash2 className="h-3 w-3 mr-1" /> Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full lg:w-80">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-farmfilo-darkGreen mb-4">Order Summary</h2>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">৳{getCartTotal()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">৳50</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-farmfilo-darkGreen">Total</span>
                    <span className="text-lg font-bold text-farmfilo-primary">৳{getCartTotal() + 50}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-farmfilo-primary hover:bg-farmfilo-darkGreen text-white flex items-center justify-center gap-2"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
