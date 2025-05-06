import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'react-toastify';

export type UserRole = 'customer' | 'farmer' | 'fieldSupervisor' | 'admin';

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

// Mock user for development
const MOCK_USER: User = {
  id: 'user-1',
  name: 'John Doe',
  email: 'john@example.com',
  roles: ['farmer', 'customer'],
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
          setUser(JSON.parse(storedUser));
        } else {
          // For development, use mock user
          setUser(MOCK_USER);
          localStorage.setItem('user', JSON.stringify(MOCK_USER));
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // In a real app, this would make an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      setUser(MOCK_USER);
      localStorage.setItem('user', JSON.stringify(MOCK_USER));
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
      localStorage.setItem('user', JSON.stringify(newUser));
    } catch (error) {
      console.error('Registration failed:', error);
      throw new Error('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
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
      setUser({
        id: 'social-123',
        name: 'Social User',
        email: 'social@example.com',
        roles: ['consumer']
      });
      
      setIsAuthenticated(true);
      toast.success(`Successfully logged in with ${provider}`);
    } catch (error) {
      console.error('Social login error:', error);
      toast.error('Failed to login with social provider');
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    isAuthenticated: !!user,
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
