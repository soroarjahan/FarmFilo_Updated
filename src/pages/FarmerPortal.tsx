
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartLine, LineChart } from 'lucide-react';
import { Product } from '@/types/product';
import { mockProducts } from '@/data/mockProducts';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Pencil,
  Trash2,
  Plus,
  ShoppingBag,
  TrendingUp,
  Calendar,
  ArrowUpRight,
  Filter,
  MoreVertical,
  ImageAnalysis
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { format } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuth } from '@/contexts/AuthContext';

// Import our new components
import MyCrops from '@/components/farmer/MyCrops';
import Activities from '@/components/farmer/Activities';
import YieldData from '@/components/farmer/YieldData';
import ImageAnalysisComponent from '@/components/farmer/ImageAnalysis';

const FarmerPortal = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API fetch - in a real app, you'd fetch only the current farmer's products
    const timer = setTimeout(() => {
      setProducts(mockProducts.slice(0, 6));
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleNewProduct = () => {
    navigate('/farmer-product-upload');
  };
  
  const handleEditProduct = (productId: string) => {
    navigate('/farmer-product-upload', { state: { productId } });
  };
  
  const handleDeleteProduct = (productId: string) => {
    // In a real app, you'd send a DELETE request to your API
    setProducts(products.filter(p => p.id !== productId));
  };
  
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM d, yyyy');
    } catch (error) {
      return 'Invalid date';
    }
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-farmfilo-darkGreen mb-2">Farmer Portal</h1>
            <p className="text-gray-600">Manage your crops and track your farming activities</p>
          </div>
          <Button 
            onClick={handleNewProduct}
            className="bg-farmfilo-primary hover:bg-farmfilo-darkGreen mt-4 sm:mt-0"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add New Product
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-farmfilo-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">৳12,450</div>
              <p className="text-xs text-green-500 flex items-center">
                +18% <ArrowUpRight className="ml-1 h-3 w-3" />
              </p>
              <Progress value={65} className="h-2 mt-4" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Products</CardTitle>
              <ShoppingBag className="h-4 w-4 text-farmfilo-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{loading ? '--' : products.length}</div>
              <p className="text-xs text-muted-foreground">
                {loading ? '--' : products.filter(p => p.quantityAvailable > 0).length} in stock
              </p>
              <Progress value={loading ? 0 : (products.filter(p => p.quantityAvailable > 0).length / products.length) * 100} className="h-2 mt-4" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Deliveries</CardTitle>
              <Calendar className="h-4 w-4 text-farmfilo-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">
                3 scheduled for today
              </p>
              <Progress value={60} className="h-2 mt-4" />
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="products" className="space-y-4">
          <TabsList className="flex-wrap">
            <TabsTrigger value="products">My Products</TabsTrigger>
            <TabsTrigger value="crops">My Crops</TabsTrigger>
            <TabsTrigger value="yield">Yield Data</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="image-analysis">Image Analysis</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="products" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Product Listings</h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </div>
            </div>
            
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array(6).fill(0).map((_, i) => (
                  <Card key={i}>
                    <div className="relative h-48 w-full">
                      <Skeleton className="h-full w-full absolute inset-0" />
                    </div>
                    <CardHeader>
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4" />
                    </CardContent>
                    <CardFooter>
                      <Skeleton className="h-10 w-full" />
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map(product => (
                  <Card key={product.id}>
                    <div className="relative h-48 w-full overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                      <div className="absolute top-2 right-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/80 hover:bg-white">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleEditProduct(product.id)} className="flex items-center gap-2">
                              <Pencil className="h-4 w-4" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <DropdownMenuItem 
                                  onSelect={(e) => e.preventDefault()}
                                  className="text-red-600 hover:text-red-700 focus:text-red-700 flex items-center gap-2"
                                >
                                  <Trash2 className="h-4 w-4" /> Delete
                                </DropdownMenuItem>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This will permanently delete {product.name} from your listings. This action cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction 
                                    onClick={() => handleDeleteProduct(product.id)}
                                    className="bg-red-600 hover:bg-red-700"
                                  >
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      
                      <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                        <Badge className={product.organic ? 'bg-green-500' : 'bg-gray-500'}>
                          {product.organic ? 'Organic' : 'Non-Organic'}
                        </Badge>
                        <Badge className="bg-farmfilo-primary">
                          {product.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>{product.farm}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Price:</span>
                        <span className="font-bold text-farmfilo-primary">৳{product.price}/{product.unit}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Available:</span>
                        <span>{product.quantityAvailable} {product.unit}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Selling Method:</span>
                        <span className="capitalize">{product.sellingMethod}</span>
                      </div>
                      
                      {product.auctionEnds && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Auction Ends:</span>
                          <span>{formatDate(product.auctionEnds)}</span>
                        </div>
                      )}
                    </CardContent>
                    
                    <CardFooter>
                      <Button 
                        variant="outline" 
                        className="w-full border-farmfilo-primary text-farmfilo-primary hover:bg-farmfilo-primary hover:text-white"
                        onClick={() => handleEditProduct(product.id)}
                      >
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit Product
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
                
                <Card className="flex flex-col items-center justify-center h-full border-dashed border-2">
                  <CardContent className="pt-6 flex flex-col items-center justify-center">
                    <div className="p-3 rounded-full bg-farmfilo-lightGreen mb-4">
                      <Plus className="h-6 w-6 text-farmfilo-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold">Add New Product</h3>
                    <p className="text-sm text-gray-500 text-center mb-4">
                      List a new product to sell in the FarmFilo marketplace
                    </p>
                    <Button 
                      onClick={handleNewProduct}
                      className="bg-farmfilo-primary hover:bg-farmfilo-darkGreen"
                    >
                      Add Product
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="crops">
            <MyCrops />
          </TabsContent>
          
          <TabsContent value="yield">
            <YieldData />
          </TabsContent>
          
          <TabsContent value="activities">
            <Activities />
          </TabsContent>
          
          <TabsContent value="image-analysis">
            <ImageAnalysisComponent />
          </TabsContent>
          
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Manage and track orders from customers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center h-20 w-20 bg-gray-100 rounded-full mb-6">
                    <ChartLine className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Orders coming soon</h3>
                  <p className="text-gray-500 mb-6 max-w-md mx-auto">
                    The Order Management interface is under development. You'll be able to track and manage customer orders here.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Sales Analytics</CardTitle>
                <CardDescription>Track your product performance and revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center h-20 w-20 bg-gray-100 rounded-full mb-6">
                    <LineChart className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Analytics coming soon</h3>
                  <p className="text-gray-500 mb-6 max-w-md mx-auto">
                    The Analytics dashboard is under development. You'll be able to view sales reports and product performance here.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default FarmerPortal;
