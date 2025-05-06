
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing! You'll receive updates soon.");
    setEmail('');
  };
  
  return (
    <footer className="bg-white border-t border-gray-200 font-montserrat">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 p-6 bg-farmfilo-primary/10 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-farmfilo-primary">Subscribe to Our Newsletter</h3>
              <p className="mt-2 text-gray-600">Stay updated with our latest organic farming tips and product offerings.</p>
            </div>
            <div>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
                <Button type="submit" className="bg-farmfilo-primary hover:bg-farmfilo-darkGreen">
                  Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="https://i.postimg.cc/qqpsSXn7/Farmfilo-Logo.png" 
                alt="FarmFilo Logo" 
                className="h-16" // Significantly enlarged footer logo
              />
            </div>
            <p className="mb-4 text-gray-600">Transforming conventional farming into organic farming, ensuring chemical-free, nutritious food while reducing pollution and restoring biodiversity.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/farmfilobd" target="_blank" rel="noopener noreferrer" className="bg-farmfilo-primary text-white p-2 rounded-full hover:bg-farmfilo-darkGreen transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/farmfilobd" target="_blank" rel="noopener noreferrer" className="bg-farmfilo-primary text-white p-2 rounded-full hover:bg-farmfilo-darkGreen transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/farm_filo" target="_blank" rel="noopener noreferrer" className="bg-farmfilo-primary text-white p-2 rounded-full hover:bg-farmfilo-darkGreen transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@farmfilo" target="_blank" rel="noopener noreferrer" className="bg-farmfilo-primary text-white p-2 rounded-full hover:bg-farmfilo-darkGreen transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-farmfilo-primary border-b border-farmfilo-lightGreen pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-farmfilo-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-farmfilo-accent rounded-full inline-block"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-farmfilo-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-farmfilo-accent rounded-full inline-block"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-farmfilo-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-farmfilo-accent rounded-full inline-block"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-gray-600 hover:text-farmfilo-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-farmfilo-accent rounded-full inline-block"></span>
                  Farmfilo Basket
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-farmfilo-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-farmfilo-accent rounded-full inline-block"></span>
                  Smart Farming Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-farmfilo-primary border-b border-farmfilo-lightGreen pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-farmfilo-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-farmfilo-accent rounded-full inline-block"></span>
                  Organic Farming Training
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-farmfilo-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-farmfilo-accent rounded-full inline-block"></span>
                  Harvesting Services
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="text-gray-600 hover:text-farmfilo-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-farmfilo-accent rounded-full inline-block"></span>
                  Equipment Rental
                </Link>
              </li>
              <li>
                <Link to="/urban-farming" className="text-gray-600 hover:text-farmfilo-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-farmfilo-accent rounded-full inline-block"></span>
                  Urban Farming Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-farmfilo-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-farmfilo-accent rounded-full inline-block"></span>
                  Crop Disease Detection
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-farmfilo-primary border-b border-farmfilo-lightGreen pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-farmfilo-primary shrink-0 mt-1" />
                <span className="text-gray-600">RCRC Street, Court para, Kushtia Sadar, Kushtia-7000</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-farmfilo-primary shrink-0 mt-1" />
                <span className="text-gray-600">info@farmfilo.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-farmfilo-primary shrink-0 mt-1" />
                <span className="text-gray-600">+8801822-917633</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 mt-8 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} FarmFilo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
