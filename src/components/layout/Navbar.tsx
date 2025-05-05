
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Leaf, ChartPie, Users, Plant, Calendar, Phone } from 'lucide-react';

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
      "fixed w-full z-50 transition-all duration-300 font-montserrat",
      isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-3 border-b border-gray-100"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-farmfilo-primary" />
          <span className="font-montserrat font-bold text-2xl text-farmfilo-primary">
            Farm<span className="text-farmfilo-accent">Filo</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex space-x-1">
            <li>
              <Link to="/" className="px-3 py-2 rounded-md font-montserrat font-medium text-gray-700 hover:text-farmfilo-primary transition-colors hover:bg-farmfilo-lightGreen/30">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="px-3 py-2 rounded-md font-montserrat font-medium text-gray-700 hover:text-farmfilo-primary transition-colors hover:bg-farmfilo-lightGreen/30">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="px-3 py-2 rounded-md font-montserrat font-medium text-gray-700 hover:text-farmfilo-primary transition-colors hover:bg-farmfilo-lightGreen/30">
                Services
              </Link>
            </li>
            <li>
              <Link to="/harvesting" className="px-3 py-2 rounded-md font-montserrat font-medium text-gray-700 hover:text-farmfilo-primary transition-colors hover:bg-farmfilo-lightGreen/30">
                Harvesting
              </Link>
            </li>
            <li>
              <Link to="/equipment" className="px-3 py-2 rounded-md font-montserrat font-medium text-gray-700 hover:text-farmfilo-primary transition-colors hover:bg-farmfilo-lightGreen/30">
                Equipment
              </Link>
            </li>
            <li>
              <Link to="/urban-farming" className="px-3 py-2 rounded-md font-montserrat font-medium text-gray-700 hover:text-farmfilo-primary transition-colors hover:bg-farmfilo-lightGreen/30">
                Urban Farming
              </Link>
            </li>
            <li>
              <Link to="/marketplace" className="px-3 py-2 rounded-md font-montserrat font-medium text-gray-700 hover:text-farmfilo-primary transition-colors hover:bg-farmfilo-lightGreen/30">
                AgriHaat
              </Link>
            </li>
            <li>
              <Link to="/contact" className="px-3 py-2 rounded-md font-montserrat font-medium text-gray-700 hover:text-farmfilo-primary transition-colors hover:bg-farmfilo-lightGreen/30">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden lg:flex items-center space-x-1">
          <Link to="/support" className="px-3 py-2 rounded-md font-montserrat font-medium text-gray-700 hover:text-farmfilo-primary transition-colors hover:bg-farmfilo-lightGreen/30 flex items-center gap-1">
            <Phone className="h-4 w-4" />
            Support
          </Link>
          <Link to="/dashboard" className="px-3 py-2 rounded-md font-montserrat font-medium text-farmfilo-primary hover:text-farmfilo-darkGreen transition-colors flex items-center gap-1">
            <ChartPie className="h-4 w-4" />
            Dashboard
          </Link>
          <div className="ml-2 space-x-2">
            <Button variant="outline" className="font-montserrat border-farmfilo-primary text-farmfilo-primary hover:bg-farmfilo-primary hover:text-white rounded-full px-5">
              Login
            </Button>
            <Button className="font-montserrat bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen rounded-full px-5">
              Register
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden p-2"
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
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container px-4 py-4 flex flex-col space-y-2">
            <Link to="/" className="font-montserrat px-3 py-2 rounded-md font-medium text-farmfilo-primary hover:bg-farmfilo-lightGreen/30">
              Home
            </Link>
            <Link to="/about" className="font-montserrat px-3 py-2 rounded-md font-medium text-gray-700 hover:text-farmfilo-primary hover:bg-farmfilo-lightGreen/30">
              About
            </Link>
            <Link to="/services" className="font-montserrat px-3 py-2 rounded-md font-medium text-gray-700 hover:text-farmfilo-primary hover:bg-farmfilo-lightGreen/30">
              Services
            </Link>
            <Link to="/harvesting" className="font-montserrat px-3 py-2 rounded-md font-medium text-gray-700 hover:text-farmfilo-primary hover:bg-farmfilo-lightGreen/30">
              Harvesting
            </Link>
            <Link to="/equipment" className="font-montserrat px-3 py-2 rounded-md font-medium text-gray-700 hover:text-farmfilo-primary hover:bg-farmfilo-lightGreen/30">
              Equipment
            </Link>
            <Link to="/urban-farming" className="font-montserrat px-3 py-2 rounded-md font-medium text-gray-700 hover:text-farmfilo-primary hover:bg-farmfilo-lightGreen/30">
              Urban Farming
            </Link>
            <Link to="/marketplace" className="font-montserrat px-3 py-2 rounded-md font-medium text-gray-700 hover:text-farmfilo-primary hover:bg-farmfilo-lightGreen/30">
              AgriHaat
            </Link>
            <Link to="/contact" className="font-montserrat px-3 py-2 rounded-md font-medium text-gray-700 hover:text-farmfilo-primary hover:bg-farmfilo-lightGreen/30">
              Contact
            </Link>
            <div className="border-t border-gray-100 pt-2 mt-2 space-y-2">
              <Link to="/dashboard" className="font-montserrat px-3 py-2 rounded-md font-medium text-farmfilo-primary flex items-center gap-1 hover:bg-farmfilo-lightGreen/30">
                <ChartPie className="h-4 w-4" />
                Dashboard
              </Link>
              <Link to="/farmer-portal" className="font-montserrat px-3 py-2 rounded-md font-medium text-gray-700 flex items-center gap-1 hover:bg-farmfilo-lightGreen/30">
                <Users className="h-4 w-4" />
                Farmer Portal
              </Link>
              <Link to="/field-supervisor" className="font-montserrat px-3 py-2 rounded-md font-medium text-gray-700 flex items-center gap-1 hover:bg-farmfilo-lightGreen/30">
                <Plant className="h-4 w-4" />
                Field Supervisor
              </Link>
              <Link to="/crop-guidance" className="font-montserrat px-3 py-2 rounded-md font-medium text-gray-700 flex items-center gap-1 hover:bg-farmfilo-lightGreen/30">
                <Calendar className="h-4 w-4" />
                Crop Guidance
              </Link>
              <Link to="/support" className="font-montserrat px-3 py-2 rounded-md font-medium text-gray-700 flex items-center gap-1 hover:bg-farmfilo-lightGreen/30">
                <Phone className="h-4 w-4" />
                Support
              </Link>
            </div>
            <div className="flex flex-col space-y-2 pt-3 border-t border-gray-200">
              <Button variant="outline" className="font-montserrat border-farmfilo-primary text-farmfilo-primary hover:bg-farmfilo-primary hover:text-white rounded-full">
                Login
              </Button>
              <Button className="font-montserrat bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen rounded-full">
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
