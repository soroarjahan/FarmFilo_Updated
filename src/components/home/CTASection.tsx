
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-farmfilo-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Organic Revolution?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Whether you're a farmer looking to transition to organic practices or a consumer seeking chemical-free food, FarmFilo is here to support you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-farmfilo-primary hover:bg-farmfilo-cream hover:text-farmfilo-darkGreen" size="lg">
            Register as Farmer
          </Button>
          <Button className="bg-farmfilo-accent text-farmfilo-darkGreen hover:bg-farmfilo-accent/90" size="lg">
            Shop Organic Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
