import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Box, Truck, ClipboardCheck, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

// Demo order data
const mockOrders = [
  {
    id: 'ORD-2025-001',
    customerName: 'Aminul Islam',
    customerLocation: 'Dhaka',
    date: '2025-05-04',
    total: 420,
    items: [
      { productId: '1', name: 'Organic Rice', quantity: 3, price: 65 },
      { productId: '4', name: 'Honey', quantity: 1, price: 180 }
    ],
    status: 'pending',
    paymentStatus: 'paid'
  },
  {
    id: 'ORD-2025-002',
    customerName: 'Sarah Begum',
    customerLocation: 'Chittagong',
    date: '2025-05-03',
    total: 165,
    items: [
      { productId: '2', name: 'Mixed Vegetables Basket', quantity: 2, price: 45 },
      { productId: '10', name: 'Organic Jaggery', quantity: 1, price: 85 }
    ],
    status: 'processing',
    paymentStatus: 'paid'
  },
  {
    id: 'ORD-2025-003',
    customerName: 'Mohammed Rahman',
    customerLocation: 'Sylhet',
    date: '2025-05-03',
    total: 650,
    items: [
      { productId: '7', name: 'Fresh Hilsa Fish', quantity: 1, price: 650 }
    ],
    status: 'shipped',
    paymentStatus: 'paid'
  },
  {
    id: 'ORD-2025-004',
    customerName: 'Fatima Khatun',
    customerLocation: 'Rajshahi',
    date: '2025-05-02',
    total: 240,
    items: [
      { productId: '3', name: 'Organic Fruits Bundle', quantity: 2, price: 120 }
    ],
    status: 'delivered',
    paymentStatus: 'paid'
  },
  {
    id: 'ORD-2025-005',
    customerName: 'Kamal Hossain',
    customerLocation: 'Dhaka',
    date: '2025-05-01',
    total: 210,
    items: [
      { productId: '6', name: 'Organic Mustard Oil', quantity: 1, price: 210 }
    ],
    status: 'cancelled',
    paymentStatus: 'refunded'
  }
];

const OrderManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('all');
  const [orders, setOrders] = useState(mockOrders);
  
  // Filter orders based on search term, status, and active tab
  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         order.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Apply status filter if not set to 'all'
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    // Apply tab filter
    const matchesTab = activeTab === 'all' || 
                       (activeTab === 'pending' && order.status === 'pending') || 
                       (activeTab === 'processing' && order.status === 'processing') || 
                       (activeTab === 'shipped' && order.status === 'shipped') || 
                       (activeTab === 'delivered' && order.status === 'delivered') || 
                       (activeTab === 'cancelled' && order.status === 'cancelled');
    
    return matchesSearch && matchesStatus && matchesTab;
  });
  
  const updateOrderStatus = (orderId: string, newStatus: string) => {
    // In a real app, this would make an API call
    setOrders(orders.map(order => 
      order.id === orderId ? {...order, status: newStatus} : order
    ));
    
    toast.success(`Order ${orderId} status updated to ${newStatus}`);
  };
  
  // Get counts for badge displays
  const pendingCount = orders.filter(order => order.status === 'pending').length;
  const processingCount = orders.filter(order => order.status === 'processing').length;
  const shippedCount = orders.filter(order => order.status === 'shipped').length;
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="text-amber-600 border-amber-600">Pending</Badge>;
      case 'processing':
        return <Badge className="bg-blue-500">Processing</Badge>;
      case 'shipped':
        return <Badge className="bg-indigo-500">Shipped</Badge>;
      case 'delivered':
        return <Badge className="bg-green-500">Delivered</Badge>;
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };
  
  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge variant="outline" className="bg-green-50 text-green-600 border-green-600">Paid</Badge>;
      case 'pending':
        return <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-600">Pending</Badge>;
      case 'refunded':
        return <Badge variant="outline" className="bg-gray-100 text-gray-600 border-gray-600">Refunded</Badge>;
      case 'failed':
        return <Badge variant="outline" className="bg-red-50 text-red-600 border-red-600">Failed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };
  
  const getNextActionButton = (order: any) => {
    switch (order.status) {
      case 'pending':
        return (
          <Button 
            size="sm" 
            variant="outline" 
            className="text-blue-600"
            onClick={() => updateOrderStatus(order.id, 'processing')}
          >
            <Box className="h-3.5 w-3.5 mr-1" />
            Process Order
          </Button>
        );
      case 'processing':
        return (
          <Button 
            size="sm" 
            variant="outline" 
            className="text-indigo-600"
            onClick={() => updateOrderStatus(order.id, 'shipped')}
          >
            <Truck className="h-3.5 w-3.5 mr-1" />
            Mark as Shipped
          </Button>
        );
      case 'shipped':
        return (
          <Button 
            size="sm" 
            variant="outline" 
            className="text-green-600"
            onClick={() => updateOrderStatus(order.id, 'delivered')}
          >
            <CheckCircle className="h-3.5 w-3.5 mr-1" />
            Confirm Delivery
          </Button>
        );
      case 'delivered':
        return null;
      case 'cancelled':
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Order Management</CardTitle>
          <CardDescription>
            Track, manage, and update customer orders
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search orders..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="w-full md:w-[180px]">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-6">
              <TabsTrigger value="all" className="relative">
                All
                <Badge className="ml-2 bg-gray-500">{orders.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="pending" className="relative">
                Pending
                {pendingCount > 0 && (
                  <Badge className="ml-2 bg-amber-500">{pendingCount}</Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="processing">
                Processing
                {processingCount > 0 && (
                  <Badge className="ml-2 bg-blue-500">{processingCount}</Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="shipped">
                Shipped
                {shippedCount > 0 && (
                  <Badge className="ml-2 bg-indigo-500">{shippedCount}</Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="delivered">Delivered</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-0">
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead className="hidden md:table-cell">Date</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead className="hidden md:table-cell">Total</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden md:table-cell">Payment</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOrders.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-4 text-muted-foreground">
                          No orders found
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">{order.id}</TableCell>
                          <TableCell className="hidden md:table-cell">{order.date}</TableCell>
                          <TableCell>
                            <div>
                              <div className="font-medium">{order.customerName}</div>
                              <div className="text-xs text-gray-500">{order.customerLocation}</div>
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">৳{order.total}</TableCell>
                          <TableCell>{getStatusBadge(order.status)}</TableCell>
                          <TableCell className="hidden md:table-cell">{getPaymentStatusBadge(order.paymentStatus)}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button 
                                size="sm" 
                                variant="ghost"
                                onClick={() => toast.info(`Details for order ${order.id}`)}
                              >
                                <ClipboardCheck className="h-3.5 w-3.5 mr-1" />
                                Details
                              </Button>
                              {getNextActionButton(order)}
                              {order.status !== 'cancelled' && order.status !== 'delivered' && (
                                <Button 
                                  size="sm"
                                  variant="ghost"
                                  className="text-red-600"
                                  onClick={() => updateOrderStatus(order.id, 'cancelled')}
                                >
                                  <XCircle className="h-3.5 w-3.5" />
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderManagement;
