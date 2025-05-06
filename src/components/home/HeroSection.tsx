
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Drone footage background with overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop
          poster="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=2600&q=80"
        >
          <source src="https://static.videezy.com/system/resources/previews/000/044/479/original/Organic-Farm-Drone-Shot.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col items-center text-center mb-12">
          <img
            src="/lovable-uploads/167ba36e-12af-46cc-b7f4-d0dc149379e6.png"
            alt="FarmFilo Logo"
            className="w-64 mb-6"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Revitalizing Agriculture for a Healthier Bangladesh
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-lg">
              Transforming conventional farming into organic farming, ensuring chemical-free, nutritious food while improving farmers' livelihoods through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/register">
                <Button className="bg-farmfilo-primary hover:bg-farmfilo-darkGreen text-white w-full sm:w-auto flex items-center gap-2" size="lg">
                  Get Started
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/community">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-farmfilo-darkGreen w-full sm:w-auto" size="lg">
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in">
            <div className="relative bg-white p-5 rounded-lg shadow-xl max-w-md">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-farmfilo-darkGreen">Why FarmFilo?</h3>
                <p className="text-gray-600">Pioneering organic farming in Bangladesh</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-farmfilo-lightGreen p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-farmfilo-darkGreen" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Chemical-free, nutritious food production</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-farmfilo-lightGreen p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-farmfilo-darkGreen" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Supporting local farmers with modern technology</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-farmfilo-lightGreen p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-farmfilo-darkGreen" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Sustainable farming practices for future generations</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-farmfilo-lightGreen p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-farmfilo-darkGreen" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Farm-to-table marketplace for fresh produce</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
