
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from '@/components/ui/sonner';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Upload, Info, Calendar, DollarSign, Tag, Clock, Camera } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Switch } from '@/components/ui/switch';

const productSchema = z.object({
  name: z.string().min(3, "Product name must be at least 3 characters"),
  category: z.string().min(1, "Please select a category"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.coerce.number().positive("Price must be positive"),
  unit: z.string().min(1, "Please select a unit"),
  quantity: z.coerce.number().int().positive("Quantity must be a positive integer"),
  organic: z.boolean(),
  sellingMethod: z.enum(["fixed", "auction"]),
  deliveryStartDate: z.string().min(1, "Please select a start date"),
  deliveryEndDate: z.string().min(1, "Please select an end date"),
  auctionEndDate: z.string().optional(),
});

type ProductFormValues = z.infer<typeof productSchema>;

const FarmerProductUpload = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      category: "",
      description: "",
      price: 0,
      unit: "kg",
      quantity: 1,
      organic: true,
      sellingMethod: "fixed",
      deliveryStartDate: "",
      deliveryEndDate: "",
      auctionEndDate: ""
    }
  });
  
  const watchSellingMethod = form.watch("sellingMethod");
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setImageFile(file);
      
      // Preview image
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const onSubmit = (data: ProductFormValues) => {
    if (!uploadedImage) {
      toast.error("Please upload a product image");
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Product uploaded successfully!");
      navigate('/farmer-portal');
    }, 1500);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-farmfilo-darkGreen mb-2">Upload New Product</h1>
            <p className="text-gray-600">Add your organic products to the FarmFilo marketplace</p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Info className="h-5 w-5" />
                        Product Information
                      </CardTitle>
                      <CardDescription>
                        Basic details about your product
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Product Name</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Organic Rice" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Category</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Vegetables">Vegetables</SelectItem>
                                  <SelectItem value="Fruits">Fruits</SelectItem>
                                  <SelectItem value="Grains">Grains</SelectItem>
                                  <SelectItem value="Dairy & Honey">Dairy & Honey</SelectItem>
                                  <SelectItem value="Oils & Spices">Oils & Spices</SelectItem>
                                  <SelectItem value="Fish & Meat">Fish & Meat</SelectItem>
                                  <SelectItem value="Sweeteners">Sweeteners</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="organic"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-end space-x-3 space-y-0 mt-8">
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  Certified Organic
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Product Description</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Describe your product in detail" 
                                className="resize-none min-h-[120px]" 
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Include information about quality, growing methods, and special features.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Tag className="h-5 w-5" />
                        Pricing & Inventory
                      </CardTitle>
                      <CardDescription>
                        Set your pricing and available quantity
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="price"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Price (৳)</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                  <Input type="number" min={0} className="pl-10" {...field} />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="unit"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Unit</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Unit" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="kg">Kilogram (kg)</SelectItem>
                                  <SelectItem value="g">Gram (g)</SelectItem>
                                  <SelectItem value="piece">Piece</SelectItem>
                                  <SelectItem value="dozen">Dozen</SelectItem>
                                  <SelectItem value="liter">Liter</SelectItem>
                                  <SelectItem value="jar">Jar</SelectItem>
                                  <SelectItem value="packet">Packet</SelectItem>
                                  <SelectItem value="bundle">Bundle</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="quantity"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Available Quantity</FormLabel>
                              <FormControl>
                                <Input type="number" min={1} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="sellingMethod"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Selling Method</FormLabel>
                            <FormDescription>
                              Choose how you want to sell your product
                            </FormDescription>
                            <FormControl>
                              <Tabs 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                                className="w-full"
                              >
                                <TabsList className="grid w-full grid-cols-2">
                                  <TabsTrigger value="fixed">Fixed Price</TabsTrigger>
                                  <TabsTrigger value="auction">Auction/Bidding</TabsTrigger>
                                </TabsList>
                                <TabsContent value="fixed" className="pt-4">
                                  <p className="text-sm text-gray-600">
                                    Sell your product at a fixed price. Buyers can purchase at the price you set.
                                  </p>
                                </TabsContent>
                                <TabsContent value="auction" className="pt-4">
                                  <p className="text-sm text-gray-600 mb-4">
                                    Let buyers bid on your product. The highest bidder at the end of the auction wins.
                                  </p>
                                  <FormField
                                    control={form.control}
                                    name="auctionEndDate"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>Auction End Date</FormLabel>
                                        <FormControl>
                                          <Input type="date" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </TabsContent>
                              </Tabs>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Delivery Window
                      </CardTitle>
                      <CardDescription>
                        When can you deliver this product?
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="deliveryStartDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Available From</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="deliveryEndDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Available Until</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <div className="sticky top-24 space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Camera className="h-5 w-5" />
                          Product Image
                        </CardTitle>
                        <CardDescription>
                          Upload a high-quality image
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center">
                            {uploadedImage ? (
                              <div className="relative">
                                <img 
                                  src={uploadedImage} 
                                  alt="Product preview" 
                                  className="mx-auto h-40 w-full object-cover rounded-md"
                                />
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => {
                                    setUploadedImage(null);
                                    setImageFile(null);
                                  }}
                                  className="absolute top-2 right-2 h-6 w-6 p-1 bg-white/80 hover:bg-white rounded-full"
                                >
                                  ×
                                </Button>
                              </div>
                            ) : (
                              <div className="py-6">
                                <div className="flex flex-col items-center">
                                  <Upload className="h-10 w-10 text-gray-400 mb-2" />
                                  <p className="text-sm text-gray-500 mb-2">
                                    Click to upload or drag and drop
                                  </p>
                                  <p className="text-xs text-gray-400">
                                    PNG, JPG up to 5MB
                                  </p>
                                </div>
                              </div>
                            )}
                            
                            <input
                              type="file"
                              accept="image/*"
                              className={`absolute inset-0 w-full h-full opacity-0 cursor-pointer ${uploadedImage ? 'hidden' : ''}`}
                              onChange={handleImageUpload}
                            />
                          </div>
                          
                          <div className="text-xs text-gray-500">
                            <p>
                              <span className="font-medium">Tip:</span> Use clear, well-lit photos that showcase your product quality.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-farmfilo-primary hover:bg-farmfilo-darkGreen"
                      disabled={loading}
                    >
                      {loading ? "Uploading..." : "Add Product to Marketplace"}
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default FarmerProductUpload;
