
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/sonner';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CheckCircle2, CreditCard, Landmark, Truck, User } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  postalCode: z.string().min(4, "Postal code must be at least 4 characters"),
  paymentMethod: z.enum(["cash", "card", "bank"]),
  notes: z.string().optional()
});

type FormValues = z.infer<typeof formSchema>;

const Checkout = () => {
  const { cartItems, subtotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: user?.name || "",
      email: user?.email || "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      paymentMethod: "cash",
      notes: ""
    }
  });
  
  const deliveryFee = 60;
  const total = subtotal + deliveryFee;
  
  const onSubmit = (data: FormValues) => {
    setLoading(true);
    
    // Simulate order processing
    setTimeout(() => {
      setLoading(false);
      clearCart();
      
      // Navigate to success page
      navigate('/order-confirmation', { 
        state: { 
          order: {
            id: `ORD-${Date.now()}`,
            items: cartItems,
            customer: data,
            total
          }
        }
      });
      
      toast.success("Your order has been placed successfully!");
    }, 1500);
  };
  
  if (cartItems.length === 0) {
    navigate('/marketplace');
    return null;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-farmfilo-darkGreen mb-4">Checkout</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Almost there! Fill in your delivery and payment details to complete your order.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Contact Information
                    </CardTitle>
                    <CardDescription>
                      Enter your contact details for order updates
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
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
                      <Truck className="h-5 w-5" />
                      Delivery Address
                    </CardTitle>
                    <CardDescription>
                      Enter the address where you want your order delivered
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Street Address</FormLabel>
                          <FormControl>
                            <Input placeholder="House number, street name, area" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input placeholder="Your city" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="postalCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Postal Code</FormLabel>
                            <FormControl>
                              <Input placeholder="Your postal code" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Delivery Notes (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Any special instructions for delivery?" 
                              className="resize-none"
                              {...field}
                            />
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
                      <CreditCard className="h-5 w-5" />
                      Payment Method
                    </CardTitle>
                    <CardDescription>
                      Select your preferred payment method
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="cash" onValueChange={(value: string) => form.setValue("paymentMethod", value as "cash" | "card" | "bank")}>
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="cash">Cash on Delivery</TabsTrigger>
                        <TabsTrigger value="card">Credit/Debit Card</TabsTrigger>
                        <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
                      </TabsList>
                      <TabsContent value="cash" className="p-4 border rounded-md mt-4">
                        <p className="text-sm text-gray-600">Pay with cash when your order is delivered. Our delivery agent will provide a receipt.</p>
                      </TabsContent>
                      <TabsContent value="card" className="p-4 border rounded-md mt-4">
                        <p className="text-sm text-gray-600">Pay securely using your credit or debit card. We accept Visa, Mastercard, and American Express.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <Input placeholder="Card Number" />
                          <Input placeholder="Name on Card" />
                          <Input placeholder="Expiry (MM/YY)" />
                          <Input placeholder="CVV" type="password" maxLength={3} />
                        </div>
                      </TabsContent>
                      <TabsContent value="bank" className="p-4 border rounded-md mt-4">
                        <p className="text-sm text-gray-600">Transfer the payment to our bank account. Use your order ID as the payment reference.</p>
                        <div className="mt-4 bg-gray-50 p-3 rounded">
                          <p className="font-medium">Bank Account Details:</p>
                          <p className="text-sm">Bank: Bangladesh Bank</p>
                          <p className="text-sm">Account Name: FarmFilo Ltd.</p>
                          <p className="text-sm">Account Number: 1234-5678-9012</p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
                
                <div className="hidden lg:block">
                  <Button 
                    type="submit" 
                    className="w-full bg-farmfilo-primary hover:bg-farmfilo-darkGreen"
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Place Order"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          
          <div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                  <CardDescription>
                    {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cartItems.map(item => (
                    <div key={item.product.id} className="flex justify-between">
                      <div>
                        <span className="font-medium">{item.quantity} × </span>
                        <span>{item.product.name}</span>
                      </div>
                      <span className="font-medium">৳{item.product.price * item.quantity}</span>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span>৳{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Delivery Fee</span>
                      <span>৳{deliveryFee}</span>
                    </div>
                    <div className="flex justify-between font-bold text-base pt-2">
                      <span>Total</span>
                      <span className="text-farmfilo-primary">৳{total}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="lg:hidden">
                  <Button 
                    onClick={form.handleSubmit(onSubmit)} 
                    className="w-full bg-farmfilo-primary hover:bg-farmfilo-darkGreen"
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Place Order"}
                  </Button>
                </CardFooter>
              </Card>
              
              <div className="bg-farmfilo-lightGreen p-4 rounded-lg">
                <h3 className="font-medium text-farmfilo-darkGreen mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-farmfilo-primary" />
                  Satisfaction Guarantee
                </h3>
                <p className="text-sm text-gray-700">
                  If you're not 100% satisfied with the quality of our products, we'll replace them or give you a full refund.
                </p>
              </div>
              
              <div className="text-xs text-gray-500">
                <p>By placing your order, you agree to FarmFilo's Terms of Service and Privacy Policy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
