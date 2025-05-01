
import React from 'react';
import { Button } from '@/components/ui/button';
import { Leaf, TreeDeciduous } from 'lucide-react';
import { Link } from 'react-router-dom';

const UrbanFarmingSection: React.FC = () => {
  return (
    <section className="py-20 bg-farmfilo-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TreeDeciduous className="h-8 w-8 text-farmfilo-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-farmfilo-darkGreen">Urban Farming</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bringing organic farming to cities with innovative solutions for limited spaces. Grow your own food in urban environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <div className="bg-farmfilo-lightGreen p-4 rounded-full inline-flex mb-4">
                <Leaf className="h-8 w-8 text-farmfilo-primary" />
              </div>
              <h3 className="text-2xl font-bold text-farmfilo-darkGreen mb-4">Urban Farming Solutions</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-farmfilo-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Rooftop gardening systems</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-farmfilo-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vertical farming structures</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-farmfilo-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Balcony container gardens</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-farmfilo-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Community garden planning</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-farmfilo-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hydroponic systems</span>
                </li>
              </ul>
              <Button className="w-full bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen" asChild>
                <Link to="/urban-farming">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
              <h3 className="text-xl font-bold text-farmfilo-darkGreen mb-3">Urban Farming Workshop</h3>
              <p className="text-gray-600 mb-4">Join our monthly workshops to learn practical urban farming techniques from experts.</p>
              <div className="flex justify-between items-center">
                <span className="font-medium text-farmfilo-primary">Next: May 15, 2025</span>
                <Button variant="outline" className="border-farmfilo-primary text-farmfilo-primary hover:bg-farmfilo-primary hover:text-white">
                  Register
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
              <h3 className="text-xl font-bold text-farmfilo-darkGreen mb-3">Starter Kits</h3>
              <p className="text-gray-600 mb-4">Complete urban farming kits with everything you need to start growing organic food at home.</p>
              <div className="flex justify-between items-center">
                <span className="font-medium text-farmfilo-primary">From ৳1,200</span>
                <Button variant="outline" className="border-farmfilo-primary text-farmfilo-primary hover:bg-farmfilo-primary hover:text-white">
                  Shop Now
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
              <h3 className="text-xl font-bold text-farmfilo-darkGreen mb-3">Space Analysis</h3>
              <p className="text-gray-600 mb-4">Our experts will assess your urban space and recommend the best farming setup for your needs.</p>
              <div className="flex justify-between items-center">
                <span className="font-medium text-farmfilo-primary">Free Consultation</span>
                <Button variant="outline" className="border-farmfilo-primary text-farmfilo-primary hover:bg-farmfilo-primary hover:text-white">
                  Book Now
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
              <h3 className="text-xl font-bold text-farmfilo-darkGreen mb-3">Community Projects</h3>
              <p className="text-gray-600 mb-4">Join or start a community urban farming project in your neighborhood with our support.</p>
              <div className="flex justify-between items-center">
                <span className="font-medium text-farmfilo-primary">Join 15+ Communities</span>
                <Button variant="outline" className="border-farmfilo-primary text-farmfilo-primary hover:bg-farmfilo-primary hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrbanFarmingSection;
