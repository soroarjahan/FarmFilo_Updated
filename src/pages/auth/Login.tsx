
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/AuthContext';
import { Leaf, LogIn } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import PasswordInput from '@/components/auth/PasswordInput';
import { LoadingButton } from '@/components/ui/loading-button';
import SocialLoginButton from '@/components/auth/SocialLoginButton';

// Define validation schema
const loginSchema = z.object({
  email: z.string()
    .email({ message: 'Please enter a valid email address' }),
  password: z.string()
    .min(8, { message: 'Password must be at least 8 characters' }),
  remember: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const { login, socialLogin, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [authMode, setAuthMode] = useState<'email' | 'phone'>('email');
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  
  const from = (location.state as any)?.from?.pathname || '/dashboard';

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await login(data.email, data.password);
      // Navigate is handled in the login function
    } catch (error) {
      // Error is handled in the login function
      console.error('Login failed:', error);
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'facebook') => {
    try {
      setSocialLoading(provider);
      await socialLogin(provider);
      // Navigation handled in the socialLogin function
    } catch (error) {
      console.error(`${provider} login failed:`, error);
    } finally {
      setSocialLoading(null);
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
            <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
            <CardDescription className="text-center">
              Sign in to access your FarmFilo account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="email" onClick={() => setAuthMode('email')}>Email</TabsTrigger>
                <TabsTrigger value="phone" onClick={() => setAuthMode('phone')}>Phone</TabsTrigger>
              </TabsList>

              <TabsContent value="email">
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
                              {...field} 
                              autoComplete="email"
                              disabled={isLoading}
                              className="focus:border-farmfilo-primary"
                              autoFocus
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex items-center justify-between">
                            <FormLabel>Password</FormLabel>
                            <Link to="/forgot-password" className="text-xs font-medium text-farmfilo-primary hover:text-farmfilo-darkGreen">
                              Forgot Password?
                            </Link>
                          </div>
                          <FormControl>
                            <PasswordInput
                              placeholder="••••••••" 
                              {...field} 
                              autoComplete="current-password"
                              disabled={isLoading}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="remember"
                      render={({ field }) => (
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <Checkbox 
                              checked={field.value} 
                              onCheckedChange={field.onChange}
                              disabled={isLoading}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal cursor-pointer">Remember me for 30 days</FormLabel>
                        </FormItem>
                      )}
                    />

                    <LoadingButton 
                      type="submit" 
                      className="w-full bg-farmfilo-primary hover:bg-farmfilo-darkGreen"
                      isLoading={isLoading}
                      loadingText="Signing in..."
                      icon={<LogIn className="h-4 w-4" />}
                    >
                      Sign In
                    </LoadingButton>
                  </form>
                </Form>
              </TabsContent>

              <TabsContent value="phone">
                <div className="text-center py-4 space-y-3">
                  <p className="text-sm text-gray-500">
                    Phone authentication coming soon. Please use email login for now.
                  </p>
                  <div className="flex justify-center">
                    <svg className="animate-spin h-6 w-6 text-farmfilo-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <SocialLoginButton 
                provider="google" 
                onClick={() => handleSocialLogin('google')} 
                disabled={isLoading || !!socialLoading}
              />
              <SocialLoginButton 
                provider="facebook" 
                onClick={() => handleSocialLogin('facebook')} 
                disabled={isLoading || !!socialLoading}
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <SocialLoginButton 
                provider="github" 
                onClick={() => toast.info("GitHub login coming soon")} 
                disabled={isLoading || !!socialLoading}
              />
              <SocialLoginButton 
                provider="apple" 
                onClick={() => toast.info("Apple login coming soon")} 
                disabled={isLoading || !!socialLoading}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link to="/register" className="text-farmfilo-primary font-medium hover:text-farmfilo-darkGreen">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Demo accounts:</p>
          <p className="mt-1">Email: farmer@farmfilo.com | Password: password123</p>
          <p>Email: supervisor@farmfilo.com | Password: password123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
