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
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/AuthContext';
import { Leaf, UserPlus } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import PasswordInput from '@/components/auth/PasswordInput';
import { LoadingButton } from '@/components/ui/loading-button';
import SocialLoginButton from '@/components/auth/SocialLoginButton';

// Define validation schema
const registerSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(11, { message: 'Phone number must be at least 11 characters' }).optional(),
  role: z.enum(['farmer', 'fieldSupervisor', 'consumer', 'customer', 'admin'] as const), // Match UserRole enum
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
  confirmPassword: z.string(),
  terms: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions',
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

type RegisterFormValues = z.infer<typeof registerSchema>;

// Update the UserRole type at the top of the file
type UserRole = 'farmer' | 'fieldSupervisor' | 'consumer';

const Register = () => {
  const { register, socialLogin, isLoading } = useAuth();
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  const [registrationStep, setRegistrationStep] = useState(1);
  const totalSteps = 2;

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      role: 'farmer',
      password: '',
      confirmPassword: '',
      terms: false,
    },
    mode: 'onChange'
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      await register(data.name, data.email, data.password, data.role);
      // Navigation is handled inside the register function
    } catch (error) {
      // Error is handled in the register function
      console.error('Registration failed:', error);
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'facebook') => {
    try {
      setSocialLoading(provider);
      await socialLogin(provider);
    } catch (error) {
      console.error(`${provider} login failed:`, error);
    } finally {
      setSocialLoading(null);
    }
  };

  const nextStep = () => {
    if (registrationStep === 1) {
      // Validate first step fields before proceeding
      const result = form.trigger(['name', 'email', 'phone', 'role']);
      if (result) {
        setRegistrationStep(2);
      }
    }
  };

  const prevStep = () => {
    if (registrationStep > 1) {
      setRegistrationStep(registrationStep - 1);
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
            <CardTitle className="text-2xl text-center">Create an Account</CardTitle>
            <CardDescription className="text-center">
              Join the organic farming revolution
            </CardDescription>
            
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
              <div 
                className="bg-farmfilo-primary h-2.5 rounded-full transition-all duration-300" 
                style={{ width: `${(registrationStep / totalSteps) * 100}%` }}
              ></div>
            </div>
            <p className="text-xs text-center text-gray-500 mt-1">Step {registrationStep} of {totalSteps}</p>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {registrationStep === 1 && (
                  <>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your full name" 
                              {...field} 
                              disabled={isLoading}
                              autoFocus
                            />
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
                            <Input 
                              placeholder="you@example.com" 
                              type="email"
                              {...field} 
                              disabled={isLoading}
                            />
                          </FormControl>
                          <FormMessage />
                          <FormDescription className="text-xs">
                            We'll send a verification link to this email
                          </FormDescription>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your phone number" 
                              type="tel"
                              {...field} 
                              disabled={isLoading}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>I am a</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                            disabled={isLoading}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="farmer">Farmer</SelectItem>
                              <SelectItem value="fieldSupervisor">Field Supervisor</SelectItem>
                              <SelectItem value="consumer">Consumer</SelectItem>
                              <SelectItem value="customer">Customer</SelectItem>
                              <SelectItem value="admin">Admin</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <LoadingButton
                      type="button"
                      className="w-full bg-farmfilo-primary hover:bg-farmfilo-darkGreen"
                      onClick={nextStep}
                      disabled={isLoading}
                    >
                      Continue
                    </LoadingButton>
                  </>
                )}

                {registrationStep === 2 && (
                  <>
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <PasswordInput 
                              showStrengthMeter
                              placeholder="••••••••" 
                              {...field} 
                              disabled={isLoading}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <PasswordInput 
                              placeholder="••••••••" 
                              {...field} 
                              disabled={isLoading}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="terms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              disabled={isLoading}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to the{" "}
                              <Link 
                                to="/terms" 
                                className="text-farmfilo-primary hover:text-farmfilo-darkGreen"
                              >
                                terms of service
                              </Link>
                              {" "}and{" "}
                              <Link 
                                to="/privacy" 
                                className="text-farmfilo-primary hover:text-farmfilo-darkGreen"
                              >
                                privacy policy
                              </Link>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <div className="flex gap-3">
                      <LoadingButton
                        type="button"
                        variant="outline"
                        className="flex-1"
                        onClick={prevStep}
                        disabled={isLoading}
                      >
                        Back
                      </LoadingButton>
                      <LoadingButton 
                        type="submit" 
                        className="flex-1 bg-farmfilo-primary hover:bg-farmfilo-darkGreen"
                        isLoading={isLoading}
                        loadingText="Creating Account..."
                        icon={<UserPlus className="h-4 w-4" />}
                      >
                        Create Account
                      </LoadingButton>
                    </div>
                  </>
                )}
              </form>
            </Form>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or sign up with</span>
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
              Already have an account?{" "}
              <Link to="/login" className="text-farmfilo-primary font-medium hover:text-farmfilo-darkGreen">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;
