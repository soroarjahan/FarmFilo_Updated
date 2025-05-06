
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash, MoveLeft, ShoppingCart, Plus, Minus, AlertCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, totalItems, subtotal } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    if (isAuthenticated) {
      navigate('/checkout');
    } else {
      navigate('/login', { state: { from: '/checkout' } });
    }
  };

  const deliveryFee = 60;
  const total = subtotal + deliveryFee;
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-farmfilo-darkGreen mb-6">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
              <ShoppingCart className="h-10 w-10 text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Button onClick={() => navigate('/marketplace')} className="bg-farmfilo-primary hover:bg-farmfilo-darkGreen">
              Browse Products
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-farmfilo-darkGreen">Cart Items ({totalItems})</h2>
                    <Button 
                      variant="ghost" 
                      onClick={() => navigate('/marketplace')}
                      className="text-farmfilo-primary hover:text-farmfilo-darkGreen hover:bg-farmfilo-lightGreen/20"
                    >
                      <MoveLeft className="mr-2 h-4 w-4" />
                      Continue Shopping
                    </Button>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="p-6">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div 
                          className="w-24 h-24 rounded-lg overflow-hidden cursor-pointer"
                          onClick={() => navigate(`/product/${item.product.id}`)}
                        >
                          <img 
                            src={item.product.image} 
                            alt={item.product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex flex-col sm:flex-row justify-between mb-2">
                            <h3 
                              className="font-medium text-lg cursor-pointer hover:text-farmfilo-primary transition-colors"
                              onClick={() => navigate(`/product/${item.product.id}`)}
                            >
                              {item.product.name}
                            </h3>
                            <span className="font-semibold text-farmfilo-primary">৳{item.product.price}/{item.product.unit}</span>
                          </div>
                          
                          <p className="text-sm text-gray-500 mb-2">Farm: {item.product.farm}</p>
                          
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
                            <div className="flex items-center mb-3 sm:mb-0">
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-8 w-8 rounded-r-none"
                                onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <div className="h-8 w-12 flex items-center justify-center border-y border-input text-sm">
                                {item.quantity}
                              </div>
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-8 w-8 rounded-l-none"
                                onClick={() => updateQuantity(item.product.id, Math.min(item.product.quantityAvailable, item.quantity + 1))}
                                disabled={item.quantity >= item.product.quantityAvailable}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                              <span className="ml-3 text-xs text-gray-500">Max: {item.product.quantityAvailable}</span>
                            </div>
                            
                            <div className="flex items-center justify-between w-full sm:w-auto">
                              <span className="font-semibold sm:mr-8">৳{item.product.price * item.quantity}</span>
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => removeFromCart(item.product.id)}
                                className="text-gray-400 hover:text-red-500 hover:bg-red-50"
                              >
                                <Trash className="h-5 w-5" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                  <CardDescription>Review your order details before checkout</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>৳{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivery Fee</span>
                      <span>৳{deliveryFee}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span className="text-farmfilo-primary">৳{total}</span>
                    </div>
                  </div>
                  
                  {!isAuthenticated && (
                    <Alert className="mt-4">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Account Required</AlertTitle>
                      <AlertDescription>
                        You'll need to log in or create an account to complete your purchase.
                      </AlertDescription>
                    </Alert>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button 
                    className="w-full mb-2 bg-farmfilo-primary hover:bg-farmfilo-darkGreen"
                    onClick={handleCheckout}
                  >
                    {isAuthenticated ? 'Proceed to Checkout' : 'Sign in to Checkout'}
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    By proceeding, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
