
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, MapPin, Leaf, Award } from 'lucide-react';

const stats = [
  {
    id: 1,
    icon: Users,
    value: '5,000+',
    label: 'Farmers Supported',
    color: 'bg-green-50 text-green-600'
  },
  {
    id: 2,
    icon: MapPin,
    value: '25+',
    label: 'Districts Covered',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    id: 3,
    icon: Leaf,
    value: '12,000+',
    label: 'Acres Organic Land',
    color: 'bg-amber-50 text-amber-600'
  },
  {
    id: 4,
    icon: Award,
    value: '15+',
    label: 'Awards Won',
    color: 'bg-purple-50 text-purple-600'
  }
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-farmfilo-darkGreen mb-4">Our Impact</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">See how FarmFilo is transforming agriculture across Bangladesh with measurable results and sustainable practices.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.id} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-farmfilo-darkGreen mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
