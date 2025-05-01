
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tractor } from 'lucide-react';
import { Link } from 'react-router-dom';

const equipmentItems = [
  {
    name: "Tractors & Tillers",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&q=80",
    price: "৳1,500/day",
    description: "Various sizes available for different field requirements"
  },
  {
    name: "Irrigation Systems",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&q=80",
    price: "৳800/day",
    description: "Water-efficient drip and sprinkler systems"
  },
  {
    name: "Organic Spreaders",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=400&q=80",
    price: "৳600/day",
    description: "For even distribution of organic fertilizers and amendments"
  }
];

const EquipmentRentalSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Tractor className="h-8 w-8 text-farmfilo-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-farmfilo-darkGreen">Equipment Rental</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl">
              Access modern farming equipment without the high costs of ownership. Rent what you need, when you need it.
            </p>
          </div>
          <Button className="mt-6 md:mt-0 bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen" asChild>
            <Link to="/equipment">View All Equipment</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipmentItems.map((equipment, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={equipment.image} 
                  alt={equipment.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-farmfilo-darkGreen">{equipment.name}</h3>
                  <span className="font-bold text-farmfilo-primary">{equipment.price}</span>
                </div>
                <p className="text-gray-500 mb-4">{equipment.description}</p>
                <Button variant="outline" className="w-full border-farmfilo-primary text-farmfilo-primary hover:bg-farmfilo-primary hover:text-white">
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentRentalSection;
