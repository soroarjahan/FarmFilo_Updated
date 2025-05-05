
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 font-montserrat">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-farmfilo-primary" />
              <span className="font-montserrat font-bold text-2xl text-farmfilo-primary">
                Farm<span className="text-farmfilo-accent">Filo</span>
              </span>
            </div>
            <p className="mb-4 text-gray-600">Transforming conventional farming into organic farming, ensuring chemical-free, nutritious food while reducing pollution and restoring biodiversity.</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-farmfilo-primary text-white p-2 rounded-full hover:bg-farmfilo-darkGreen transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="bg-farmfilo-primary text-white p-2 rounded-full hover:bg-farmfilo-darkGreen transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="bg-farmfilo-primary text-white p-2 rounded-full hover:bg-farmfilo-darkGreen transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
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
                  AgriHaat Marketplace
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
                <span className="text-gray-600">123 Green Street, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-farmfilo-primary shrink-0 mt-1" />
                <span className="text-gray-600">contact@farmfilo.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-farmfilo-primary shrink-0 mt-1" />
                <span className="text-gray-600">+880 12345 67890</span>
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
