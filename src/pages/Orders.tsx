
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { ShoppingCart, ExternalLink, ArrowRight, Clock, CheckCircle2, Truck, Package, Leaf } from 'lucide-react';

interface OrderType {
  id: string;
  userId: string;
  items: Array<{
    productId: string;
    name: string;
    quantity: number;
    price: number;
  }>;
  shipping: {
    name: string;
    address: string;
    city: string;
    zipcode: string;
    phone: string;
  };
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: 'processing' | 'shipped' | 'in_transit' | 'delivered';
  blockchainHash: string;
  ecoFriendly: boolean;
  createdAt: string;
}

const Orders = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchOrders = () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        const storedOrders = JSON.parse(localStorage.getItem('farmfilo_orders') || '[]');
        
        // Filter orders for the current user
        const userOrders = storedOrders.filter((order: OrderType) => order.userId === user?.id);
        
        // If no orders exist yet, create some dummy orders for demo purposes
        if (userOrders.length === 0 && user) {
          const demoOrders = generateDemoOrders(user.id);
          localStorage.setItem('farmfilo_orders', JSON.stringify([...storedOrders, ...demoOrders]));
          setOrders(demoOrders);
        } else {
          setOrders(userOrders);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  // Generate demo orders for new users
  const generateDemoOrders = (userId: string): OrderType[] => {
    const now = new Date();
    return [
      {
        id: `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        userId,
        items: [
          { productId: '1', name: 'Organic Rice', quantity: 2, price: 65 },
          { productId: '3', name: 'Organic Fruits', quantity: 1, price: 120 },
        ],
        shipping: {
          name: user?.name || 'User',
          address: '123 Green Street',
          city: 'Dhaka',
          zipcode: '1207',
          phone: '+880 1712345678'
        },
        subtotal: 250,
        deliveryFee: 80,
        total: 330,
        status: 'delivered',
        blockchainHash: '0x' + Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join(''),
        ecoFriendly: true,
        createdAt: new Date(now.getTime() - 15 * 24 * 60 * 60 * 1000).toISOString() // 15 days ago
      },
      {
        id: `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        userId,
        items: [
          { productId: '2', name: 'Fresh Vegetables', quantity: 3, price: 45 },
        ],
        shipping: {
          name: user?.name || 'User',
          address: '456 Farm Avenue',
          city: 'Dhaka',
          zipcode: '1212',
          phone: '+880 1712345678'
        },
        subtotal: 135,
        deliveryFee: 50,
        total: 185,
        status: 'in_transit',
        blockchainHash: '0x' + Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join(''),
        ecoFriendly: false,
        createdAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString() // 2 days ago
      }
    ];
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Clock className="h-4 w-4 text-amber-500" />;
      case 'shipped':
        return <Package className="h-4 w-4 text-blue-500" />;
      case 'in_transit':
        return <Truck className="h-4 w-4 text-indigo-500" />;
      case 'delivered':
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'processing':
        return 'Processing';
      case 'shipped':
        return 'Shipped';
      case 'in_transit':
        return 'In Transit';
      case 'delivered':
        return 'Delivered';
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing':
        return 'bg-amber-100 text-amber-700';
      case 'shipped':
        return 'bg-blue-100 text-blue-700';
      case 'in_transit':
        return 'bg-indigo-100 text-indigo-700';
      case 'delivered':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20">
          <div className="animate-pulse space-y-6 max-w-4xl mx-auto">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="h-8 bg-gray-200 rounded w-1/2"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-farmfilo-darkGreen mb-6">My Orders</h1>
          
          {orders.length === 0 ? (
            <Card>
              <CardContent className="py-12 flex flex-col items-center justify-center">
                <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Orders Yet</h3>
                <p className="text-gray-500 max-w-sm text-center mb-6">
                  You haven't placed any orders yet. Start shopping to see your orders here.
                </p>
                <Button 
                  className="bg-farmfilo-primary hover:bg-farmfilo-darkGreen text-white" 
                  asChild
                >
                  <Link to="/marketplace">
                    Browse Products
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList>
                <TabsTrigger value="all">All Orders</TabsTrigger>
                <TabsTrigger value="processing">Processing</TabsTrigger>
                <TabsTrigger value="shipped">Shipped</TabsTrigger>
                <TabsTrigger value="delivered">Delivered</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-6">
                {orders.map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))}
              </TabsContent>
              
              <TabsContent value="processing" className="space-y-6">
                {orders
                  .filter(order => order.status === 'processing')
                  .map((order) => (
                    <OrderCard key={order.id} order={order} />
                  ))}
              </TabsContent>
              
              <TabsContent value="shipped" className="space-y-6">
                {orders
                  .filter(order => ['shipped', 'in_transit'].includes(order.status))
                  .map((order) => (
                    <OrderCard key={order.id} order={order} />
                  ))}
              </TabsContent>
              
              <TabsContent value="delivered" className="space-y-6">
                {orders
                  .filter(order => order.status === 'delivered')
                  .map((order) => (
                    <OrderCard key={order.id} order={order} />
                  ))}
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
    </Layout>
  );
};

// Order Card Component
const OrderCard = ({ order }: { order: OrderType }) => {
  const orderDate = new Date(order.createdAt);
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Clock className="h-4 w-4" />;
      case 'shipped':
        return <Package className="h-4 w-4" />;
      case 'in_transit':
        return <Truck className="h-4 w-4" />;
      case 'delivered':
        return <CheckCircle2 className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing':
        return 'bg-amber-100 text-amber-700';
      case 'shipped':
        return 'bg-blue-100 text-blue-700';
      case 'in_transit':
        return 'bg-indigo-100 text-indigo-700';
      case 'delivered':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case 'processing':
        return 'Processing';
      case 'shipped':
        return 'Shipped';
      case 'in_transit':
        return 'In Transit';
      case 'delivered':
        return 'Delivered';
      default:
        return status;
    }
  };
  
  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <CardTitle className="text-farmfilo-darkGreen">Order #{order.id}</CardTitle>
              {order.ecoFriendly && (
                <Badge className="bg-green-500 hover:bg-green-600">
                  <Leaf className="h-3 w-3 mr-1" /> Eco-Delivery
                </Badge>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-1">Placed on {orderDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <div className="flex items-center space-x-4">
            <Badge className={`${getStatusColor(order.status)} flex items-center gap-1`}>
              {getStatusIcon(order.status)}
              {getStatusText(order.status)}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
            <h3 className="font-medium mb-3">Order Items</h3>
            <div className="space-y-3">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex justify-between">
                  <div>
                    <span className="font-medium">{item.name}</span>
                    <span className="text-gray-500 ml-1">×{item.quantity}</span>
                  </div>
                  <span>৳{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span>৳{order.subtotal}</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-gray-500">Delivery</span>
                <span>৳{order.deliveryFee}</span>
              </div>
              <div className="flex justify-between font-medium mt-2">
                <span>Total</span>
                <span className="text-farmfilo-primary">৳{order.total}</span>
              </div>
            </div>
          </div>
          
          <div className="border-t md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-6 md:w-1/3">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="font-medium mb-2">Shipping Address</h3>
                <p className="text-sm text-gray-700">{order.shipping.name}</p>
                <p className="text-sm text-gray-700">{order.shipping.address}</p>
                <p className="text-sm text-gray-700">{order.shipping.city}, {order.shipping.zipcode}</p>
              </div>
              
              <div className="mt-6">
                <div className="text-xs bg-blue-50 text-blue-700 p-2 rounded-md mb-4 font-mono">
                  Blockchain ID: {order.blockchainHash.slice(0, 14)}...
                </div>
                <Link to={`/order-tracking/${order.id}`}>
                  <Button variant="outline" className="w-full flex items-center justify-center gap-1">
                    Track Order <ExternalLink className="h-4 w-4 ml-1" /> 
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Orders;
