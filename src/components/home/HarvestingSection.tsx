
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shovel } from 'lucide-react';
import { Link } from 'react-router-dom';

const harvestingServices = [
  {
    title: "Crop Harvesting",
    description: "Professional crop harvesting services with skilled labor and modern equipment for all types of crops.",
    icon: <Shovel className="h-12 w-12" />
  },
  {
    title: "Post-Harvest Handling",
    description: "Proper sorting, cleaning, and packaging to maintain product quality and extend shelf life.",
    icon: <Shovel className="h-12 w-12" />
  },
  {
    title: "Seasonal Scheduling",
    description: "Planned harvesting schedules based on crop maturity and optimal market timing.",
    icon: <Shovel className="h-12 w-12" />
  }
];

const HarvestingSection: React.FC = () => {
  return (
    <section className="py-20 bg-farmfilo-lightGreen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-farmfilo-darkGreen mb-4">Harvesting Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl font-montserrat">
              Professional harvesting solutions to maximize yield and reduce post-harvest losses for organic farmers across Bangladesh.
            </p>
          </div>
          <Button className="mt-6 md:mt-0 bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen font-montserrat" asChild>
            <Link to="/harvesting">Explore Services</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {harvestingServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-farmfilo-primary hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-farmfilo-primary mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-farmfilo-darkGreen">{service.title}</h3>
              <p className="text-gray-600 mb-4 font-montserrat">{service.description}</p>
              <Button variant="outline" className="w-full border-farmfilo-primary text-farmfilo-primary hover:bg-farmfilo-primary hover:text-white font-montserrat">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HarvestingSection;
