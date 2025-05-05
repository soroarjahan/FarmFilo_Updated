
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';

// Define user types for role-based access
export type UserRole = 'admin' | 'farmer' | 'fieldSupervisor' | 'consumer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  socialLogin: (provider: 'google' | 'facebook') => Promise<void>;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  hasRole: (role: UserRole | UserRole[]) => boolean;
}

// Create authentication context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user database (would be replaced with actual backend)
const MOCK_USERS = [
  {
    id: '1',
    name: 'Demo Admin',
    email: 'admin@farmfilo.com',
    password: 'password123',
    role: 'admin' as UserRole,
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&q=80'
  },
  {
    id: '2',
    name: 'Demo Farmer',
    email: 'farmer@farmfilo.com',
    password: 'password123',
    role: 'farmer' as UserRole,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
  },
  {
    id: '3',
    name: 'Demo Supervisor',
    email: 'supervisor@farmfilo.com',
    password: 'password123',
    role: 'fieldSupervisor' as UserRole,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80'
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Check for saved user on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('farmfilo_user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Failed to parse stored user', error);
        localStorage.removeItem('farmfilo_user');
      }
    }
    setIsLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Find user in mock database
      const foundUser = MOCK_USERS.find(u => u.email === email && u.password === password);
      
      if (!foundUser) {
        throw new Error('Invalid email or password');
      }
      
      // Extract user data without password
      const { password: _, ...userData } = foundUser;
      
      // Store user in state and localStorage
      setUser(userData);
      localStorage.setItem('farmfilo_user', JSON.stringify(userData));
      
      toast.success('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Login failed');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Social login function
  const socialLogin = async (provider: 'google' | 'facebook') => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo, we'll use a default user
      const socialUser = {
        id: '4',
        name: `${provider.charAt(0).toUpperCase() + provider.slice(1)} User`,
        email: `${provider}user@farmfilo.com`,
        role: 'farmer' as UserRole,
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80'
      };
      
      // Store user in state and localStorage
      setUser(socialUser);
      localStorage.setItem('farmfilo_user', JSON.stringify(socialUser));
      
      toast.success(`${provider} login successful!`);
      navigate('/dashboard');
    } catch (error) {
      toast.error(`${provider} login failed`);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Register function
  const register = async (name: string, email: string, password: string, role: UserRole) => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user exists in mock database
      if (MOCK_USERS.some(u => u.email === email)) {
        throw new Error('Email already registered');
      }
      
      // Create new user
      const newUser = {
        id: `${MOCK_USERS.length + 1}`,
        name,
        email,
        role,
      };
      
      // Store user in state and localStorage
      setUser(newUser);
      localStorage.setItem('farmfilo_user', JSON.stringify(newUser));
      
      toast.success('Registration successful!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Registration failed');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('farmfilo_user');
    toast.success('Logged out successfully');
    navigate('/login');
  };

  // Role check function
  const hasRole = (role: UserRole | UserRole[]): boolean => {
    if (!user) return false;
    if (Array.isArray(role)) {
      return role.includes(user.role);
    }
    return user.role === role;
  };

  const contextValue = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    socialLogin,
    register,
    logout,
    hasRole
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
