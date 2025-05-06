
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      
      {/* Scroll to top button */}
      <Button
        className="fixed bottom-8 right-8 z-50 bg-farmfilo-primary hover:bg-farmfilo-darkGreen rounded-full h-12 w-12 shadow-lg transition-all duration-300 opacity-80 hover:opacity-100 p-0 flex items-center justify-center"
        onClick={scrollToTop}
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Layout;
