
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Leaf, MoveLeft, Clock, TrendingUp, Info, MapPin } from 'lucide-react';
import { mockProducts } from '@/data/mockProducts';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RelatedProducts from '@/components/marketplace/RelatedProducts';
import { Skeleton } from '@/components/ui/skeleton';
import { Product } from '@/types/product';
import BidSection from '@/components/marketplace/BidSection';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate API fetch
    const timer = setTimeout(() => {
      const found = mockProducts.find(p => p.id === productId);
      setProduct(found || null);
      setLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      toast({
        title: "Added to cart",
        description: `${quantity} × ${product.name} added to your cart.`,
        duration: 3000,
      });
    }
  };
  
  const handleQuantityChange = (value: number) => {
    if (product && value >= 1 && value <= product.quantityAvailable) {
      setQuantity(value);
    }
  };
  
  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Skeleton className="h-[400px] w-full rounded-lg" />
            <div className="space-y-4">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="mb-6 text-5xl">😢</div>
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/marketplace')}>
            <MoveLeft className="mr-2 h-4 w-4" /> Back to Marketplace
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center mb-6">
          <Button variant="ghost" onClick={() => navigate('/marketplace')} className="text-gray-500 hover:text-farmfilo-primary">
            <MoveLeft className="mr-2 h-4 w-4" /> Back to Marketplace
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge className="bg-farmfilo-primary hover:bg-farmfilo-darkGreen">
                {product.category}
              </Badge>
              {product.organic && (
                <Badge className="bg-green-500 hover:bg-green-600 flex items-center gap-1">
                  <Leaf className="h-3 w-3" /> Organic
                </Badge>
              )}
              {product.sellingMethod === 'auction' && (
                <Badge className="bg-farmfilo-accent hover:bg-farmfilo-accent/90 text-farmfilo-darkGreen flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" /> Auction
                </Badge>
              )}
            </div>
            
            <h1 className="text-3xl font-bold text-farmfilo-darkGreen mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-farmfilo-primary">৳{product.price}/{product.unit}</span>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-500">
                From {product.farm}, {product.farmer}
              </span>
            </div>
            
            {product.sellingMethod === 'fixed' ? (
              <>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                      className="h-10 w-10 rounded-r-none"
                    >
                      -
                    </Button>
                    <div className="h-10 w-14 flex items-center justify-center border-y border-input">
                      {quantity}
                    </div>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => handleQuantityChange(quantity + 1)}
                      disabled={quantity >= product.quantityAvailable}
                      className="h-10 w-10 rounded-l-none"
                    >
                      +
                    </Button>
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.quantityAvailable} {product.unit} available
                  </span>
                </div>
                
                <Button 
                  className="bg-farmfilo-primary hover:bg-farmfilo-darkGreen text-white w-full mb-4 flex items-center gap-2"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </>
            ) : (
              <BidSection product={product} />
            )}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <Tabs defaultValue="details">
            <TabsList className="mb-4 grid w-full grid-cols-3">
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="farmer">Farmer Info</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Delivery</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="space-y-4">
              <h3 className="font-semibold text-lg">About this product</h3>
              <p>
                Our {product.name.toLowerCase()} is grown using sustainable and organic farming practices. 
                Free from harmful pesticides and chemicals, this product offers superior taste and nutritional value.
              </p>
              
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Nutritional Information</AccordionTrigger>
                  <AccordionContent>
                    <p>Detailed nutritional information coming soon. Our products are tested regularly for quality and nutritional content.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Storage Instructions</AccordionTrigger>
                  <AccordionContent>
                    <p>For optimal freshness, store in a cool, dry place. Refrigerate after opening and consume within the recommended period.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Certifications</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-green-500 text-green-700">Organic Certified</Badge>
                      <Badge variant="outline" className="border-blue-500 text-blue-700">Pesticide-Free</Badge>
                      <Badge variant="outline" className="border-purple-500 text-purple-700">Non-GMO</Badge>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            
            <TabsContent value="farmer">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <img 
                  src="https://images.unsplash.com/photo-1592878940526-0214b0f374f6?q=80&w=1000&auto=format&fit=crop"
                  alt={product.farmer}
                  className="rounded-lg w-full md:w-1/3 h-auto object-cover"
                />
                <div>
                  <h3 className="font-bold text-xl mb-2">{product.farmer}</h3>
                  <h4 className="font-medium text-lg text-farmfilo-primary mb-2">{product.farm}</h4>
                  <p className="text-gray-700 mb-4">
                    {product.farmer} is a dedicated organic farmer with over 10 years of experience in sustainable agriculture. 
                    Located in the fertile regions of Bangladesh, {product.farm} spans over 5 acres of certified organic farmland.
                  </p>
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-farmfilo-primary" />
                    <span className="text-sm">Joined FarmFilo in 2022</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="shipping">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Delivery Information</h3>
                  <p className="text-gray-700">We currently deliver to all major cities in Bangladesh. Delivery time varies based on your location and the farmer's delivery schedule.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-farmfilo-primary" />
                      Standard Delivery
                    </h4>
                    <p className="text-sm text-gray-600">2-3 business days</p>
                    <p className="text-sm font-medium mt-2">৳50 - ৳100</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-farmfilo-primary" />
                      Express Delivery
                    </h4>
                    <p className="text-sm text-gray-600">Next day delivery</p>
                    <p className="text-sm font-medium mt-2">৳150 - ৳200</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h3 className="font-semibold text-lg">Return Policy</h3>
                  <p className="text-gray-700">
                    If you're not satisfied with the quality of the products received, please contact our customer service within 24 hours of delivery for a replacement or refund.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <RelatedProducts currentProductId={product.id} category={product.category} />
      </div>
    </Layout>
  );
};

export default ProductDetail;
