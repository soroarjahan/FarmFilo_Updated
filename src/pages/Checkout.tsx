
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';
import { Leaf, CreditCard, Truck } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const deliveryOptions = [
  {
    id: "standard",
    name: "Standard Delivery",
    price: 50,
    time: "3-5 business days",
    ecoFriendly: false,
  },
  {
    id: "express",
    name: "Express Delivery",
    price: 120,
    time: "1-2 business days",
    ecoFriendly: false,
  },
  {
    id: "eco",
    name: "Eco-Friendly Delivery",
    price: 80,
    time: "2-4 business days",
    ecoFriendly: true,
    description: "Delivered using electric vehicles. Lower carbon footprint.",
  },
];

const paymentMethods = [
  { id: "card", name: "Credit/Debit Card" },
  { id: "bkash", name: "bKash" },
  { id: "nagad", name: "Nagad" },
  { id: "cod", name: "Cash on Delivery" },
];

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState("eco");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    zipcode: "",
    notes: "",
    saveInfo: true,
  });

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  const selectedDelivery = deliveryOptions.find(option => option.id === deliveryOption) || deliveryOptions[0];
  const subtotal = getCartTotal();
  const deliveryFee = selectedDelivery.price;
  const total = subtotal + deliveryFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, saveInfo: checked }));
  };

  const validateForm = () => {
    const requiredFields = ['name', 'email', 'phone', 'address', 'city', 'zipcode'];
    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData]) {
        toast.error(`Please enter your ${field}`);
        return false;
      }
    }
    return true;
  };

  const generateOrderId = () => {
    return 'ORD-' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substr(2, 5).toUpperCase();
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) return;
    
    setIsProcessing(true);
    
    try {
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const orderId = generateOrderId();
      
      // Mock blockchain hash for transparency
      const blockchainHash = '0x' + Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('');
      
      // Create an order object that would typically be sent to the backend
      const orderData = {
        id: orderId,
        userId: user?.id,
        items: cartItems.map(item => ({
          productId: item.product.id,
          name: item.product.name,
          price: item.product.price,
          quantity: item.quantity,
          farmerId: item.product.farmer,
        })),
        deliveryOption,
        paymentMethod,
        shipping: {
          name: formData.name,
          address: formData.address,
          city: formData.city,
          zipcode: formData.zipcode,
          phone: formData.phone,
        },
        subtotal,
        deliveryFee,
        total,
        status: "processing",
        blockchainHash,
        ecoFriendly: selectedDelivery.ecoFriendly,
        createdAt: new Date().toISOString(),
      };
      
      // In a real app, we would store this in a database
      // For now, we'll just store it in localStorage for demo purposes
      const existingOrders = JSON.parse(localStorage.getItem('farmfilo_orders') || '[]');
      localStorage.setItem('farmfilo_orders', JSON.stringify([...existingOrders, orderData]));
      
      // Clear the cart
      clearCart();
      
      toast.success('Order placed successfully!');
      navigate(`/order-tracking/${orderId}`);
      
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Failed to place order. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-farmfilo-darkGreen mb-8">Checkout</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-grow space-y-6">
              {/* Shipping Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Information</CardTitle>
                  <CardDescription>Enter your delivery details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input 
                      id="address" 
                      name="address" 
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your street address" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input 
                        id="city" 
                        name="city" 
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Enter your city" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipcode">Zip Code</Label>
                      <Input 
                        id="zipcode" 
                        name="zipcode" 
                        value={formData.zipcode}
                        onChange={handleInputChange}
                        placeholder="Enter your zip code" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">Order Notes (Optional)</Label>
                    <Textarea 
                      id="notes" 
                      name="notes" 
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Special instructions for delivery" 
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox 
                      id="saveInfo" 
                      checked={formData.saveInfo} 
                      onCheckedChange={handleCheckboxChange} 
                    />
                    <Label htmlFor="saveInfo">Save this information for next time</Label>
                  </div>
                </CardContent>
              </Card>
              
              {/* Delivery Options */}
              <Card>
                <CardHeader>
                  <CardTitle>Delivery Method</CardTitle>
                  <CardDescription>Select your preferred delivery option</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup 
                    value={deliveryOption} 
                    onValueChange={setDeliveryOption}
                    className="space-y-3"
                  >
                    {deliveryOptions.map((option) => (
                      <div 
                        key={option.id}
                        className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-colors ${
                          deliveryOption === option.id ? 'border-farmfilo-primary bg-farmfilo-lightGreen/20' : 'border-gray-200'
                        }`}
                      >
                        <RadioGroupItem value={option.id} id={`delivery-${option.id}`} />
                        <div className="flex-grow">
                          <Label 
                            htmlFor={`delivery-${option.id}`}
                            className="font-medium cursor-pointer flex items-center"
                          >
                            {option.name}
                            {option.ecoFriendly && (
                              <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                                <Leaf className="h-3 w-3 mr-1" /> Eco-friendly
                              </span>
                            )}
                          </Label>
                          <p className="text-sm text-gray-500">Estimated delivery in {option.time}</p>
                          {option.description && (
                            <p className="text-xs text-gray-500 mt-1">{option.description}</p>
                          )}
                        </div>
                        <span className="font-medium">৳{option.price}</span>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
              
              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>Select your preferred payment option</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup 
                    value={paymentMethod} 
                    onValueChange={setPaymentMethod}
                    className="space-y-3"
                  >
                    {paymentMethods.map((method) => (
                      <div 
                        key={method.id}
                        className={`flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-colors ${
                          paymentMethod === method.id ? 'border-farmfilo-primary bg-farmfilo-lightGreen/20' : 'border-gray-200'
                        }`}
                      >
                        <RadioGroupItem value={method.id} id={`payment-${method.id}`} />
                        <Label 
                          htmlFor={`payment-${method.id}`}
                          className="font-medium cursor-pointer flex-grow"
                        >
                          {method.name}
                        </Label>
                        {method.id === 'card' && <CreditCard className="h-5 w-5 text-gray-500" />}
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>
            
            <div className="w-full lg:w-80 space-y-6">
              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                  <CardDescription>Review your order</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.product.id} className="flex justify-between">
                        <div>
                          <p className="font-medium text-sm">{item.product.name}</p>
                          <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        </div>
                        <span className="text-sm font-medium">৳{item.product.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span>৳{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Delivery</span>
                      <span>৳{deliveryFee}</span>
                    </div>
                    <div className="flex justify-between font-medium pt-2 border-t border-gray-200">
                      <span>Total</span>
                      <span className="text-farmfilo-primary">৳{total}</span>
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex items-start space-x-2">
                      <Truck className="h-5 w-5 text-farmfilo-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Blockchain-Verified Order Tracking</p>
                        <p className="text-xs text-gray-500">Every step of your order is recorded on a secure blockchain for complete transparency</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-farmfilo-primary hover:bg-farmfilo-darkGreen"
                    disabled={isProcessing}
                    onClick={handlePlaceOrder}
                  >
                    {isProcessing ? 'Processing...' : 'Place Order'}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
