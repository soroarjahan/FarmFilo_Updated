
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center leaf-pattern">
        <div className="text-center px-4 py-16 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg max-w-lg">
          <h1 className="text-4xl font-bold text-farmfilo-darkGreen mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-farmfilo-primary mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Button 
            className="bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen"
            asChild
          >
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
