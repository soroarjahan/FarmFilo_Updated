
import React from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle, Package, Truck, Calendar, Home } from 'lucide-react';

interface OrderConfirmationProps {}

const OrderConfirmation: React.FC<OrderConfirmationProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;
  
  // If no order is in the state, redirect to marketplace
  if (!order) {
    return <Navigate to="/marketplace" replace />;
  }
  
  const orderDate = new Date();
  const estimatedDeliveryDate = new Date();
  estimatedDeliveryDate.setDate(orderDate.getDate() + 3);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center h-20 w-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-farmfilo-darkGreen mb-4">Order Placed Successfully!</h1>
            <p className="text-lg text-gray-600">Thank you for choosing FarmFilo. Your order has been confirmed.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <div>
                <h2 className="font-semibold text-xl">Order #{order.id}</h2>
                <p className="text-sm text-gray-500">Placed on {orderDate.toLocaleDateString()}</p>
              </div>
              <Button 
                variant="outline" 
                onClick={() => navigate('/orders')}
                className="border-farmfilo-primary text-farmfilo-primary hover:bg-farmfilo-primary hover:text-white"
              >
                View Order
              </Button>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                    <Package className="h-4 w-4" />
                    Items
                  </div>
                  <p className="font-medium">{order.items.length} products</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                    <Truck className="h-4 w-4" />
                    Delivery Method
                  </div>
                  <p className="font-medium">Standard Delivery</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                    <Calendar className="h-4 w-4" />
                    Estimated Delivery
                  </div>
                  <p className="font-medium">{estimatedDeliveryDate.toLocaleDateString()}</p>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Home className="h-4 w-4 text-farmfilo-primary" />
                  Delivery Address
                </h3>
                <p>{order.customer.fullName}</p>
                <p>{order.customer.address}</p>
                <p>{order.customer.city}, {order.customer.postalCode}</p>
                <p>Phone: {order.customer.phone}</p>
              </div>
              
              <div className="border-t pt-4">
                <h3 className="font-medium mb-4">Order Summary</h3>
                <div className="space-y-2">
                  {order.items.map((item) => (
                    <div key={item.product.id} className="flex justify-between">
                      <div>
                        <span className="font-medium">{item.quantity}× </span>
                        <span>{item.product.name}</span>
                      </div>
                      <span>৳{item.product.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t mt-4 pt-4 flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-farmfilo-primary">৳{order.total}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center space-y-6">
            <div className="bg-farmfilo-lightGreen p-6 rounded-lg inline-block mx-auto">
              <h3 className="font-medium text-farmfilo-darkGreen mb-2">What happens next?</h3>
              <ol className="text-left space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="bg-farmfilo-primary text-white rounded-full h-5 w-5 flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <span>We'll process your order and notify the farmers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-farmfilo-primary text-white rounded-full h-5 w-5 flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <span>Fresh produce will be harvested and prepared for delivery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-farmfilo-primary text-white rounded-full h-5 w-5 flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <span>Our delivery team will bring your order to your doorstep.</span>
                </li>
              </ol>
            </div>
            
            <Button 
              onClick={() => navigate('/marketplace')} 
              className="bg-farmfilo-primary hover:bg-farmfilo-darkGreen"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderConfirmation;
