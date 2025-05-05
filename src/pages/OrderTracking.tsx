
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Package, Truck, Home, CheckCircle, Leaf } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  farmerId: string;
}

interface OrderTrackingData {
  id: string;
  userId: string;
  items: OrderItem[];
  shipping: {
    name: string;
    address: string;
    city: string;
    zipcode: string;
    phone: string;
  };
  status: 'processing' | 'shipped' | 'in_transit' | 'delivered';
  subtotal: number;
  deliveryFee: number;
  total: number;
  blockchainHash: string;
  ecoFriendly: boolean;
  createdAt: string;
}

// Mock tracking events for demonstration
const getTrackingEvents = (orderId: string, createdAt: string) => {
  const orderDate = new Date(createdAt);
  
  // Generate timestamps for events
  const processingTime = new Date(orderDate.getTime());
  const packedTime = new Date(orderDate.getTime() + 1000 * 60 * 60 * 3); // 3 hours later
  const shippedTime = new Date(orderDate.getTime() + 1000 * 60 * 60 * 8); // 8 hours later
  const inTransitTime = new Date(orderDate.getTime() + 1000 * 60 * 60 * 24); // 24 hours later
  
  return [
    {
      id: 1,
      title: 'Order Placed',
      description: 'Your order has been received and is being processed.',
      timestamp: orderDate.toISOString(),
      completed: true,
      blockchainHash: orderId.slice(4, 12) + '...' + Math.random().toString(36).substring(2, 8)
    },
    {
      id: 2,
      title: 'Order Processed',
      description: 'Payment confirmed and order verified.',
      timestamp: processingTime.toISOString(),
      completed: true,
      blockchainHash: orderId.slice(4, 12) + '...' + Math.random().toString(36).substring(2, 8)
    },
    {
      id: 3,
      title: 'Packed & Ready',
      description: 'Your items have been packed and are ready for shipment.',
      timestamp: packedTime.toISOString(),
      completed: Math.random() > 0.2, // 80% chance to be completed
      blockchainHash: orderId.slice(4, 12) + '...' + Math.random().toString(36).substring(2, 8)
    },
    {
      id: 4,
      title: 'Picked by Delivery Partner',
      description: 'Order has been picked up by our delivery partner.',
      timestamp: shippedTime.toISOString(),
      completed: Math.random() > 0.5, // 50% chance to be completed
      blockchainHash: orderId.slice(4, 12) + '...' + Math.random().toString(36).substring(2, 8)
    },
    {
      id: 5,
      title: 'In Transit',
      description: 'Your order is on its way to you.',
      timestamp: inTransitTime.toISOString(),
      completed: Math.random() > 0.7, // 30% chance to be completed
      blockchainHash: orderId.slice(4, 12) + '...' + Math.random().toString(36).substring(2, 8)
    },
    {
      id: 6,
      title: 'Delivered',
      description: 'Your order has been delivered successfully.',
      timestamp: null, // Will be set when delivered
      completed: false,
      blockchainHash: null
    }
  ];
};

const OrderTracking = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<OrderTrackingData | null>(null);
  const [trackingEvents, setTrackingEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching order from API (we're using localStorage here)
    const fetchOrder = () => {
      setLoading(true);
      try {
        const storedOrders = JSON.parse(localStorage.getItem('farmfilo_orders') || '[]');
        const foundOrder = storedOrders.find((o: OrderTrackingData) => o.id === orderId);
        
        if (foundOrder) {
          setOrder(foundOrder);
          setTrackingEvents(getTrackingEvents(orderId || '', foundOrder.createdAt));
        }
      } catch (error) {
        console.error("Error fetching order:", error);
      } finally {
        setLoading(false);
      }
    };

    if (orderId) {
      fetchOrder();
    }
  }, [orderId]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
              <div className="h-64 bg-gray-200 rounded"></div>
              <div className="h-32 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!order) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-farmfilo-darkGreen mb-6">Order Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">We couldn't find the order you're looking for.</p>
            <Link to="/orders">
              <Button className="bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Orders
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Get the last completed event to determine current status
  const lastCompletedEvent = [...trackingEvents].reverse().find(event => event.completed);
  const currentStatus = lastCompletedEvent ? lastCompletedEvent.title : 'Order Placed';
  const orderDate = new Date(order.createdAt);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/orders" className="inline-flex items-center text-farmfilo-primary hover:text-farmfilo-darkGreen">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Orders
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-farmfilo-darkGreen">Order Tracking</h1>
              <p className="text-gray-600">Track the status of your order in real-time</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Badge variant="secondary" className="bg-farmfilo-lightGreen/80 text-farmfilo-darkGreen">
                Order #{order.id}
              </Badge>
              {order.ecoFriendly && (
                <Badge className="ml-2 bg-green-500 hover:bg-green-600">
                  <Leaf className="h-3 w-3 mr-1" /> Eco-friendly Delivery
                </Badge>
              )}
            </div>
          </div>
          
          <Card className="mb-8">
            <CardHeader className="bg-farmfilo-lightGreen/30">
              <CardTitle className="flex items-center justify-between">
                <span className="text-farmfilo-darkGreen">Current Status: {currentStatus}</span>
                <span className="text-sm font-normal">
                  Order Date: {orderDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {/* Order Progress Visualization */}
              <div className="relative">
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-gray-200" style={{ left: '1.5rem' }}></div>
                
                {trackingEvents.map((event, index) => (
                  <div key={event.id} className="mb-8 last:mb-0 relative">
                    <div className="flex flex-col md:flex-row items-start">
                      <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0 relative z-10">
                        {event.completed ? (
                          <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center text-white">
                            <CheckCircle className="h-5 w-5" />
                          </div>
                        ) : (
                          <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-white">
                            {event.id === 3 && <Package className="h-4 w-4" />}
                            {event.id === 4 && <Truck className="h-4 w-4" />}
                            {event.id === 5 && <Truck className="h-4 w-4" />}
                            {event.id === 6 && <Home className="h-4 w-4" />}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <h3 className="font-semibold text-farmfilo-darkGreen text-lg">{event.title}</h3>
                          {event.timestamp && (
                            <span className="text-sm text-gray-500">
                              {new Date(event.timestamp).toLocaleString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mt-1">{event.description}</p>
                        
                        {event.completed && event.blockchainHash && (
                          <div className="mt-2 flex items-center">
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md flex items-center">
                              <span className="mr-1">Blockchain Verified:</span>
                              <span className="font-mono">{event.blockchainHash}</span>
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Order ID</span>
                    <span className="font-medium">{order.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Date Placed</span>
                    <span className="font-medium">
                      {new Date(order.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Blockchain Hash</span>
                    <span className="font-mono text-xs bg-blue-50 p-1 rounded">
                      {order.blockchainHash.slice(0, 10)}...{order.blockchainHash.slice(-6)}
                    </span>
                  </div>
                </div>
                
                <div className="border-t pt-3 space-y-2">
                  <h4 className="font-medium">Order Items</h4>
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span>{item.name} × {item.quantity}</span>
                      <span className="font-medium">৳{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-3 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subtotal</span>
                    <span>৳{order.subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Delivery Fee</span>
                    <span>৳{order.deliveryFee}</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span className="text-farmfilo-primary">৳{order.total}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Delivery Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Shipping Address</h4>
                  <p className="text-gray-700">{order.shipping.name}</p>
                  <p className="text-gray-700">{order.shipping.address}</p>
                  <p className="text-gray-700">{order.shipping.city}, {order.shipping.zipcode}</p>
                  <p className="text-gray-700">Phone: {order.shipping.phone}</p>
                </div>
                
                {order.ecoFriendly && (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <Leaf className="h-5 w-5 text-green-500 mr-2" />
                      <h4 className="font-medium text-green-700">Eco-Friendly Delivery</h4>
                    </div>
                    <p className="text-sm text-green-700 mt-1">
                      This order is being delivered using electric vehicles, reducing carbon emissions and supporting sustainable agriculture.
                    </p>
                  </div>
                )}
                
                <div className="border-t pt-3">
                  <h4 className="font-medium mb-2">Blockchain Verification</h4>
                  <p className="text-sm text-gray-700">
                    This order's journey is being recorded on a secure blockchain ledger, ensuring complete transparency and traceability from farm to doorstep.
                  </p>
                </div>
                
                <div className="pt-4">
                  <Button variant="outline" className="w-full">
                    Download Delivery Receipt
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderTracking;
