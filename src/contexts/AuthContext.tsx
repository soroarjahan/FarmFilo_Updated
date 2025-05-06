import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from '@/components/ui/sonner'; 

export type UserRole = 'customer' | 'farmer' | 'fieldSupervisor' | 'admin' | 'consumer';

interface User {
  id: string;
  name: string;
  email: string;
  roles: UserRole[];
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role?: UserRole) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
  updateProfile: (userData: Partial<User>) => Promise<void>;
  hasRole: (role: UserRole) => boolean;
  socialLogin: (provider: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Demo accounts for logging in
const DEMO_ACCOUNTS = {
  farmer: {
    id: 'farmer-1',
    name: 'John Farmer',
    email: 'farmer@farmfilo.com',
    password: 'password123',
    roles: ['farmer' as UserRole],
    avatar: 'https://i.pravatar.cc/150?u=johnfarmer'
  },
  supervisor: {
    id: 'supervisor-1',
    name: 'Sam Supervisor',
    email: 'supervisor@farmfilo.com',
    password: 'password123',
    roles: ['fieldSupervisor' as UserRole],
    avatar: 'https://i.pravatar.cc/150?u=samsupervisor'
  }
};

// Mock user for development
const MOCK_USER: User = {
  id: 'user-1',
  name: 'John Doe',
  email: 'john@example.com',
  roles: ['farmer', 'customer'] as UserRole[],
  avatar: 'https://i.pravatar.cc/150?u=john'
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Check for stored auth on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // In a real app, this would check token validity with backend
        const storedUser = localStorage.getItem('user');
        
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          setIsAuthenticated(true);
          console.log("User authenticated from localStorage:", parsedUser);
        } else {
          // For development, we'll just clear the auth state
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Check for demo accounts first
      if (email === DEMO_ACCOUNTS.farmer.email && password === DEMO_ACCOUNTS.farmer.password) {
        const farmerUser: User = { 
          id: DEMO_ACCOUNTS.farmer.id, 
          name: DEMO_ACCOUNTS.farmer.name, 
          email: DEMO_ACCOUNTS.farmer.email,
          roles: DEMO_ACCOUNTS.farmer.roles,
          avatar: DEMO_ACCOUNTS.farmer.avatar
        };
        setUser(farmerUser);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(farmerUser));
        toast.success(`Welcome, ${farmerUser.name}!`);
        console.log("Farmer logged in successfully:", farmerUser);
        return;
      } 
      
      if (email === DEMO_ACCOUNTS.supervisor.email && password === DEMO_ACCOUNTS.supervisor.password) {
        const supervisorUser: User = { 
          id: DEMO_ACCOUNTS.supervisor.id, 
          name: DEMO_ACCOUNTS.supervisor.name, 
          email: DEMO_ACCOUNTS.supervisor.email,
          roles: DEMO_ACCOUNTS.supervisor.roles,
          avatar: DEMO_ACCOUNTS.supervisor.avatar
        };
        setUser(supervisorUser);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(supervisorUser));
        toast.success(`Welcome, ${supervisorUser.name}!`);
        console.log("Supervisor logged in successfully:", supervisorUser);
        return;
      }
      
      // Mock successful login for other accounts
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser(MOCK_USER);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(MOCK_USER));
      toast.success(`Welcome, ${MOCK_USER.name}!`);
      console.log("Default user logged in successfully:", MOCK_USER);
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string, role: UserRole = 'customer') => {
    setIsLoading(true);
    try {
      // In a real app, this would make an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful registration
      const newUser: User = {
        id: `user-${Date.now()}`,
        name,
        email,
        roles: [role],
      };
      
      setUser(newUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(newUser));
      toast.success(`Welcome to FarmFilo, ${name}!`);
      console.log("User registered successfully:", newUser);
    } catch (error) {
      console.error('Registration failed:', error);
      throw new Error('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    toast.success('You have been logged out successfully');
    console.log("User logged out");
  };

  const forgotPassword = async (email: string) => {
    // In a real app, this would make an API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Mock successful password reset email
  };

  const resetPassword = async (token: string, password: string) => {
    // In a real app, this would make an API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Mock successful password reset
  };

  const updateProfile = async (userData: Partial<User>) => {
    if (!user) throw new Error('No authenticated user');
    
    setIsLoading(true);
    try {
      // In a real app, this would make an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update user data
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (error) {
      console.error('Profile update failed:', error);
      throw new Error('Profile update failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const hasRole = (role: UserRole): boolean => {
    return user?.roles.includes(role) || false;
  };

  const socialLogin = async (provider: string) => {
    setIsLoading(true);
    try {
      // Implementation of social login
      console.log(`Logging in with ${provider}`);
      
      // Mock successful login after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Set mock user data
      const socialUser: User = {
        id: 'social-123',
        name: 'Social User',
        email: 'social@example.com',
        roles: ['consumer' as UserRole]
      };
      
      setUser(socialUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(socialUser));
      toast.success(`Successfully logged in with ${provider}`);
      console.log("Social login successful:", socialUser);
    } catch (error) {
      console.error('Social login error:', error);
      toast.error('Failed to login with social provider');
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    updateProfile,
    hasRole,
    socialLogin
  };

  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  );
};
