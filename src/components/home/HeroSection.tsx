
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden leaf-pattern">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-farmfilo-darkGreen mb-6 leading-tight">
              Revitalizing Agriculture for a Healthier Bangladesh
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Transforming conventional farming into organic farming, ensuring chemical-free, nutritious food while improving farmers' livelihoods through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button className="bg-farmfilo-primary hover:bg-farmfilo-darkGreen text-white w-full sm:w-auto flex items-center gap-2" size="lg">
                  Get Started
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/community">
                <Button variant="outline" className="border-farmfilo-primary text-farmfilo-primary hover:bg-farmfilo-primary hover:text-white w-full sm:w-auto" size="lg">
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative animate-fade-in">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1500151549154-50b24c9ebc3d?auto=format&fit=crop&w=800&q=80" 
                alt="Organic Farming" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-farmfilo-accent/20 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-farmfilo-primary/20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
