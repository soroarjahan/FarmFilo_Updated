
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Package, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock order data for demonstration
interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Order {
  id: string;
  date: string;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: OrderItem[];
}

const mockOrders: Order[] = [
  {
    id: 'ORD-1234567',
    date: '2025-05-02',
    status: 'delivered',
    total: 350,
    items: [
      { 
        id: '1', 
        name: 'Organic Rice', 
        price: 65, 
        quantity: 3,
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop'
      },
      { 
        id: '8', 
        name: 'Organic Turmeric Powder', 
        price: 95, 
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=2067&auto=format&fit=crop'
      },
      { 
        id: '9', 
        name: 'Free-Range Eggs', 
        price: 60, 
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1557759786-6758d40e765f?q=80&w=2070&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'ORD-7654321',
    date: '2025-04-28',
    status: 'shipped',
    total: 210,
    items: [
      { 
        id: '2', 
        name: 'Mixed Vegetables Basket', 
        price: 45, 
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=2942&auto=format&fit=crop'
      },
      { 
        id: '4', 
        name: 'Honey', 
        price: 120, 
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1587049633312-d628ae10a8c9?q=80&w=2080&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'ORD-9876543',
    date: '2025-04-15',
    status: 'processing',
    total: 130,
    items: [
      { 
        id: '3', 
        name: 'Organic Fruits Bundle', 
        price: 130, 
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=2070&auto=format&fit=crop'
      }
    ]
  }
];

const getStatusIcon = (status: Order['status']) => {
  switch (status) {
    case 'processing':
      return <Clock className="h-5 w-5 text-blue-500" />;
    case 'shipped':
      return <Package className="h-5 w-5 text-orange-500" />;
    case 'delivered':
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case 'cancelled':
      return <AlertTriangle className="h-5 w-5 text-red-500" />;
    default:
      return null;
  }
};

const getStatusText = (status: Order['status']) => {
  switch (status) {
    case 'processing':
      return 'Processing';
    case 'shipped':
      return 'Shipped';
    case 'delivered':
      return 'Delivered';
    case 'cancelled':
      return 'Cancelled';
    default:
      return '';
  }
};

const getStatusColor = (status: Order['status']) => {
  switch (status) {
    case 'processing':
      return 'bg-blue-100 text-blue-800';
    case 'shipped':
      return 'bg-orange-100 text-orange-800';
    case 'delivered':
      return 'bg-green-100 text-green-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      setOrders(mockOrders);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
  };
  
  const handleCloseDetails = () => {
    setSelectedOrder(null);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-farmfilo-darkGreen mb-2">My Orders</h1>
            <p className="text-gray-600">Track and manage your orders</p>
          </div>
          <Button 
            onClick={() => navigate('/marketplace')}
            className="bg-farmfilo-primary hover:bg-farmfilo-darkGreen"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Continue Shopping
          </Button>
        </div>
        
        {loading ? (
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-1/3" />
              <Skeleton className="h-4 w-1/4" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Array(3).fill(0).map((_, i) => (
                  <Skeleton key={i} className="h-16 w-full" />
                ))}
              </div>
            </CardContent>
          </Card>
        ) : orders.length === 0 ? (
          <Card>
            <CardContent className="pt-6 flex flex-col items-center justify-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <ShoppingCart className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Orders Yet</h3>
              <p className="text-gray-500 mb-6 text-center">You haven't placed any orders yet. Start shopping to see your orders here.</p>
              <Button 
                onClick={() => navigate('/marketplace')}
                className="bg-farmfilo-primary hover:bg-farmfilo-darkGreen"
              >
                Browse Products
              </Button>
            </CardContent>
          </Card>
        ) : selectedOrder ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button variant="ghost" onClick={handleCloseDetails}>
                ← Back to Orders
              </Button>
              <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 ${getStatusColor(selectedOrder.status)}`}>
                {getStatusIcon(selectedOrder.status)}
                {getStatusText(selectedOrder.status)}
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Order #{selectedOrder.id}</CardTitle>
                <CardDescription>Placed on {new Date(selectedOrder.date).toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead className="text-right">Quantity</TableHead>
                      <TableHead className="text-right">Subtotal</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedOrder.items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <div className="h-12 w-12 rounded overflow-hidden">
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{item.name}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">৳{item.price}</TableCell>
                        <TableCell className="text-right">{item.quantity}</TableCell>
                        <TableCell className="text-right font-medium">৳{item.price * item.quantity}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell colSpan={3} className="text-right font-bold">
                        Total
                      </TableCell>
                      <TableCell className="text-right font-bold text-farmfilo-primary">
                        ৳{selectedOrder.total}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" onClick={() => navigate('/marketplace')}>
                  Buy Again
                </Button>
              </CardFooter>
            </Card>
            
            {selectedOrder.status === 'shipped' && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Delivery Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Delivery Method</span>
                      <span>Standard Delivery</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Tracking Number</span>
                      <span className="font-medium">TRK12345678BD</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Estimated Delivery</span>
                      <span>May 8, 2025</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>View and manage your recent orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div 
                    key={order.id} 
                    className="border rounded-lg p-4 hover:border-farmfilo-primary transition-colors cursor-pointer"
                    onClick={() => handleViewOrder(order)}
                  >
                    <div className="flex flex-col sm:flex-row justify-between">
                      <div>
                        <h3 className="font-semibold">Order #{order.id}</h3>
                        <p className="text-sm text-gray-500">Placed on {new Date(order.date).toLocaleDateString()}</p>
                      </div>
                      <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                        <div className={`px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-2 ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)}
                          {getStatusText(order.status)}
                        </div>
                        <p className="text-sm font-medium mt-1">৳{order.total}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {order.items.slice(0, 3).map((item) => (
                          <div 
                            key={item.id} 
                            className="h-8 w-8 rounded-full overflow-hidden border-2 border-white"
                          >
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                        ))}
                        {order.items.length > 3 && (
                          <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium border-2 border-white">
                            +{order.items.length - 3}
                          </div>
                        )}
                      </div>
                      <span className="text-sm text-gray-500">
                        {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                      </span>
                      <Button variant="ghost" size="sm" className="ml-auto">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default Orders;
