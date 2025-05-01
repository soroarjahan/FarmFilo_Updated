
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="font-playfair font-bold text-2xl text-farmfilo-primary">
            Farm<span className="text-farmfilo-accent">Filo</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium text-gray-700 hover:text-farmfilo-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="font-medium text-gray-700 hover:text-farmfilo-primary transition-colors">
            About
          </Link>
          <Link to="/services" className="font-medium text-gray-700 hover:text-farmfilo-primary transition-colors">
            Services
          </Link>
          <Link to="/harvesting" className="font-medium text-gray-700 hover:text-farmfilo-primary transition-colors">
            Harvesting
          </Link>
          <Link to="/equipment" className="font-medium text-gray-700 hover:text-farmfilo-primary transition-colors">
            Equipment Rental
          </Link>
          <Link to="/urban-farming" className="font-medium text-gray-700 hover:text-farmfilo-primary transition-colors">
            Urban Farming
          </Link>
          <Link to="/marketplace" className="font-medium text-gray-700 hover:text-farmfilo-primary transition-colors">
            AgriHaat
          </Link>
          <Link to="/contact" className="font-medium text-gray-700 hover:text-farmfilo-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-farmfilo-primary text-farmfilo-primary hover:bg-farmfilo-primary hover:text-white">
            Login
          </Button>
          <Button className="bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen">
            Register
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-farmfilo-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="block py-2 font-medium text-farmfilo-primary">
              Home
            </Link>
            <Link to="/about" className="block py-2 font-medium text-gray-700 hover:text-farmfilo-primary">
              About
            </Link>
            <Link to="/services" className="block py-2 font-medium text-gray-700 hover:text-farmfilo-primary">
              Services
            </Link>
            <Link to="/harvesting" className="block py-2 font-medium text-gray-700 hover:text-farmfilo-primary">
              Harvesting
            </Link>
            <Link to="/equipment" className="block py-2 font-medium text-gray-700 hover:text-farmfilo-primary">
              Equipment Rental
            </Link>
            <Link to="/urban-farming" className="block py-2 font-medium text-gray-700 hover:text-farmfilo-primary">
              Urban Farming
            </Link>
            <Link to="/marketplace" className="block py-2 font-medium text-gray-700 hover:text-farmfilo-primary">
              AgriHaat
            </Link>
            <Link to="/contact" className="block py-2 font-medium text-gray-700 hover:text-farmfilo-primary">
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
              <Button variant="outline" className="border-farmfilo-primary text-farmfilo-primary hover:bg-farmfilo-primary hover:text-white">
                Login
              </Button>
              <Button className="bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen">
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
