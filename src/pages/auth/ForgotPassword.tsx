
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, ArrowLeft, Mail } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"; 
import { LoadingButton } from '@/components/ui/loading-button';

// Define validation schema
const forgotPasswordSchema = z.object({
  email: z.string()
    .email({ message: 'Please enter a valid email address' }),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    setIsLoading(true);
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      toast.success("Reset link sent to your email");
    } catch (error) {
      toast.error("Failed to send reset link");
      console.error('Password reset request failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 leaf-pattern">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-farmfilo-primary" />
            <span className="font-bold text-2xl text-farmfilo-primary">
              Farm<span className="text-farmfilo-accent">Filo</span>
            </span>
          </Link>
        </div>

        <Card className="w-full shadow-lg border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Reset Password</CardTitle>
            <CardDescription className="text-center">
              Enter your email address to reset your password
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <Alert className="bg-green-50 border-green-200">
                <Mail className="h-5 w-5 text-green-600" />
                <AlertTitle className="text-green-800">Check Your Email</AlertTitle>
                <AlertDescription className="text-green-700">
                  We've sent a password reset link to <strong>{form.getValues().email}</strong>. 
                  Please check your inbox and follow the instructions to reset your password.
                </AlertDescription>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">
                    Didn't receive the email? Check your spam folder or{" "}
                    <button 
                      type="button" 
                      className="text-farmfilo-primary hover:text-farmfilo-darkGreen underline font-medium"
                      onClick={() => {
                        setIsLoading(true);
                        setTimeout(() => {
                          toast.success("Reset link resent to your email");
                          setIsLoading(false);
                        }, 1500);
                      }}
                      disabled={isLoading}
                    >
                      click here to resend
                    </button>
                  </p>
                </div>
              </Alert>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="you@example.com" 
                            type="email"
                            {...field} 
                            disabled={isLoading}
                            autoFocus
                          />
                        </FormControl>
                        <FormMessage />
                        <FormDescription className="text-xs">
                          We'll send you a link to reset your password
                        </FormDescription>
                      </FormItem>
                    )}
                  />

                  <LoadingButton 
                    type="submit" 
                    className="w-full bg-farmfilo-primary hover:bg-farmfilo-darkGreen"
                    isLoading={isLoading}
                    loadingText="Sending Reset Link..."
                    icon={<Mail className="h-4 w-4" />}
                  >
                    Send Reset Link
                  </LoadingButton>
                </form>
              </Form>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link to="/login" className="flex items-center text-sm text-farmfilo-primary font-medium hover:text-farmfilo-darkGreen">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Login
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
