
import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { LoadingSpinner } from './LoadingSpinner';
import { UserRole } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { isAuthenticated, isLoading, user, hasRole } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      console.log("User is not authenticated, redirecting to login");
    }
    if (!isLoading && isAuthenticated && allowedRoles && !allowedRoles.some(role => hasRole(role))) {
      console.log("User does not have required role, redirecting to dashboard");
    }
  }, [isLoading, isAuthenticated, allowedRoles, hasRole]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    console.log("Redirecting to login from protected route:", location.pathname);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If roles are specified, check if user has required role
  if (allowedRoles && allowedRoles.length > 0) {
    if (!allowedRoles.some(role => hasRole(role))) {
      // Redirect to dashboard if authenticated but doesn't have required role
      console.log("User doesn't have required role, redirecting to dashboard");
      return <Navigate to="/dashboard" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
