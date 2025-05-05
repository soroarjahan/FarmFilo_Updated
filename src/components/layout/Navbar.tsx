
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Leaf, ChartPie, Users, Calendar, Phone, MessageSquare, LogIn, UserPlus } from 'lucide-react';
import { Plant } from '@/components/icons/CustomIcons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

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
        <nav className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={cn(
                  "px-3 py-2 rounded-md font-montserrat font-medium transition-colors hover:bg-farmfilo-lightGreen/30",
                  isActive("/") ? "text-farmfilo-primary" : "text-gray-700 hover:text-farmfilo-primary"
                )}>
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent hover:bg-farmfilo-lightGreen/30",
                  isActive("/services") || isActive("/harvesting") || isActive("/equipment") || isActive("/urban-farming")
                    ? "text-farmfilo-primary" : "text-gray-700"
                )}>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link to="/services" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-farmfilo-lightGreen/50 to-farmfilo-primary/20 p-6 no-underline outline-none focus:shadow-md">
                          <div className="mb-2 mt-4 text-lg font-medium text-farmfilo-primary">
                            Our Services
                          </div>
                          <p className="text-sm leading-tight text-gray-700">
                            Comprehensive agriculture solutions for modern farming needs
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/harvesting" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-farmfilo-lightGreen/30">
                          <div className="text-sm font-medium text-farmfilo-primary">Harvesting</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-700">
                            Modern harvesting techniques and equipment
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/equipment" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-farmfilo-lightGreen/30">
                          <div className="text-sm font-medium text-farmfilo-primary">Equipment</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-700">
                            Rental and purchasing options for farm equipment
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/urban-farming" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-farmfilo-lightGreen/30">
                          <div className="text-sm font-medium text-farmfilo-primary">Urban Farming</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-700">
                            Solutions for agriculture in urban environments
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent hover:bg-farmfilo-lightGreen/30",
                  isActive("/dashboard") || isActive("/farmer-portal") || isActive("/field-supervisor") || isActive("/crop-guidance") 
                    ? "text-farmfilo-primary" : "text-gray-700"
                )}>Portals</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] md:w-[500px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/dashboard" className="flex items-center gap-2 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-farmfilo-lightGreen/30">
                          <ChartPie className="h-4 w-4 text-farmfilo-primary" />
                          <div>
                            <div className="text-sm font-medium">Dashboard</div>
                            <p className="line-clamp-2 text-xs text-gray-700">Main analytics dashboard</p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/farmer-portal" className="flex items-center gap-2 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-farmfilo-lightGreen/30">
                          <Users className="h-4 w-4 text-farmfilo-primary" />
                          <div>
                            <div className="text-sm font-medium">Farmer Portal</div>
                            <p className="line-clamp-2 text-xs text-gray-700">Farmer-specific tools and resources</p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/field-supervisor" className="flex items-center gap-2 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-farmfilo-lightGreen/30">
                          <Plant className="h-4 w-4 text-farmfilo-primary" />
                          <div>
                            <div className="text-sm font-medium">Field Supervisor</div>
                            <p className="line-clamp-2 text-xs text-gray-700">Field management and supervision tools</p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/crop-guidance" className="flex items-center gap-2 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-farmfilo-lightGreen/30">
                          <Calendar className="h-4 w-4 text-farmfilo-primary" />
                          <div>
                            <div className="text-sm font-medium">Crop Guidance</div>
                            <p className="line-clamp-2 text-xs text-gray-700">Expert advice on crop cultivation</p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/marketplace" className={cn(
                  "px-3 py-2 rounded-md font-montserrat font-medium transition-colors hover:bg-farmfilo-lightGreen/30",
                  isActive("/marketplace") ? "text-farmfilo-primary" : "text-gray-700 hover:text-farmfilo-primary"
                )}>
                  AgriHaat
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/community" className={cn(
                  "px-3 py-2 rounded-md font-montserrat font-medium transition-colors hover:bg-farmfilo-lightGreen/30 flex items-center gap-1",
                  isActive("/community") ? "text-farmfilo-primary" : "text-gray-700 hover:text-farmfilo-primary"
                )}>
                  <MessageSquare className="h-4 w-4" />
                  Community
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact" className={cn(
                  "px-3 py-2 rounded-md font-montserrat font-medium transition-colors hover:bg-farmfilo-lightGreen/30",
                  isActive("/contact") ? "text-farmfilo-primary" : "text-gray-700 hover:text-farmfilo-primary"
                )}>
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden lg:flex items-center space-x-1">
          <Link to="/support" className={cn(
            "px-3 py-2 rounded-md font-montserrat font-medium transition-colors hover:bg-farmfilo-lightGreen/30 flex items-center gap-1",
            isActive("/support") ? "text-farmfilo-primary" : "text-gray-700 hover:text-farmfilo-primary"
          )}>
            <Phone className="h-4 w-4" />
            Support
          </Link>
          
          <div className="ml-2 space-x-2">
            <Button variant="outline" className="font-montserrat border-farmfilo-primary text-farmfilo-primary hover:bg-farmfilo-primary hover:text-white rounded-full px-5 flex items-center gap-1">
              <LogIn className="h-4 w-4" />
              Login
            </Button>
            <Button className="font-montserrat bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen rounded-full px-5 flex items-center gap-1">
              <UserPlus className="h-4 w-4" />
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
            <Link to="/" className={cn(
              "font-montserrat px-3 py-2 rounded-md font-medium hover:bg-farmfilo-lightGreen/30",
              isActive("/") ? "text-farmfilo-primary" : "text-gray-700"
            )}>
              Home
            </Link>
            <Link to="/about" className={cn(
              "font-montserrat px-3 py-2 rounded-md font-medium hover:bg-farmfilo-lightGreen/30",
              isActive("/about") ? "text-farmfilo-primary" : "text-gray-700"
            )}>
              About
            </Link>
            <Link to="/services" className={cn(
              "font-montserrat px-3 py-2 rounded-md font-medium hover:bg-farmfilo-lightGreen/30",
              isActive("/services") ? "text-farmfilo-primary" : "text-gray-700"
            )}>
              Services
            </Link>
            <Link to="/harvesting" className={cn(
              "font-montserrat px-3 py-2 rounded-md font-medium hover:bg-farmfilo-lightGreen/30",
              isActive("/harvesting") ? "text-farmfilo-primary" : "text-gray-700" 
            )}>
              Harvesting
            </Link>
            <Link to="/equipment" className={cn(
              "font-montserrat px-3 py-2 rounded-md font-medium hover:bg-farmfilo-lightGreen/30",
              isActive("/equipment") ? "text-farmfilo-primary" : "text-gray-700"
            )}>
              Equipment
            </Link>
            <Link to="/urban-farming" className={cn(
              "font-montserrat px-3 py-2 rounded-md font-medium hover:bg-farmfilo-lightGreen/30",
              isActive("/urban-farming") ? "text-farmfilo-primary" : "text-gray-700"
            )}>
              Urban Farming
            </Link>
            <Link to="/marketplace" className={cn(
              "font-montserrat px-3 py-2 rounded-md font-medium hover:bg-farmfilo-lightGreen/30",
              isActive("/marketplace") ? "text-farmfilo-primary" : "text-gray-700"
            )}>
              AgriHaat
            </Link>
            <Link to="/community" className={cn(
              "font-montserrat px-3 py-2 rounded-md font-medium hover:bg-farmfilo-lightGreen/30 flex items-center gap-1",
              isActive("/community") ? "text-farmfilo-primary" : "text-gray-700"
            )}>
              <MessageSquare className="h-4 w-4" />
              Community
            </Link>
            <Link to="/contact" className={cn(
              "font-montserrat px-3 py-2 rounded-md font-medium hover:bg-farmfilo-lightGreen/30",
              isActive("/contact") ? "text-farmfilo-primary" : "text-gray-700"
            )}>
              Contact
            </Link>
            <div className="border-t border-gray-100 pt-2 mt-2 space-y-2">
              <Link to="/dashboard" className={cn(
                "font-montserrat px-3 py-2 rounded-md font-medium flex items-center gap-1 hover:bg-farmfilo-lightGreen/30",
                isActive("/dashboard") ? "text-farmfilo-primary" : "text-gray-700"
              )}>
                <ChartPie className="h-4 w-4" />
                Dashboard
              </Link>
              <Link to="/farmer-portal" className={cn(
                "font-montserrat px-3 py-2 rounded-md font-medium flex items-center gap-1 hover:bg-farmfilo-lightGreen/30",
                isActive("/farmer-portal") ? "text-farmfilo-primary" : "text-gray-700"
              )}>
                <Users className="h-4 w-4" />
                Farmer Portal
              </Link>
              <Link to="/field-supervisor" className={cn(
                "font-montserrat px-3 py-2 rounded-md font-medium flex items-center gap-1 hover:bg-farmfilo-lightGreen/30",
                isActive("/field-supervisor") ? "text-farmfilo-primary" : "text-gray-700"
              )}>
                <Plant className="h-4 w-4" />
                Field Supervisor
              </Link>
              <Link to="/crop-guidance" className={cn(
                "font-montserrat px-3 py-2 rounded-md font-medium flex items-center gap-1 hover:bg-farmfilo-lightGreen/30",
                isActive("/crop-guidance") ? "text-farmfilo-primary" : "text-gray-700"
              )}>
                <Calendar className="h-4 w-4" />
                Crop Guidance
              </Link>
              <Link to="/support" className={cn(
                "font-montserrat px-3 py-2 rounded-md font-medium flex items-center gap-1 hover:bg-farmfilo-lightGreen/30",
                isActive("/support") ? "text-farmfilo-primary" : "text-gray-700"
              )}>
                <Phone className="h-4 w-4" />
                Support
              </Link>
            </div>
            <div className="flex flex-col space-y-2 pt-3 border-t border-gray-200">
              <Button variant="outline" className="font-montserrat border-farmfilo-primary text-farmfilo-primary hover:bg-farmfilo-primary hover:text-white rounded-full flex items-center gap-1 justify-center">
                <LogIn className="h-4 w-4" />
                Login
              </Button>
              <Button className="font-montserrat bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen rounded-full flex items-center gap-1 justify-center">
                <UserPlus className="h-4 w-4" />
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
