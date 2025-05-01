
import React from 'react';
import { Button } from '@/components/ui/button';

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
              <Button className="btn-primary w-full sm:w-auto" size="lg">Get Started</Button>
              <Button variant="outline" className="btn-outline w-full sm:w-auto" size="lg">Learn More</Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative animate-fade-in">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80" 
                alt="Organic Farming" 
                className="rounded-lg shadow-xl w-full"
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
