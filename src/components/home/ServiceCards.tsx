
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Tractor, Leaf, ShoppingBag, Building } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Organic Harvesting',
    description: 'Harvest chemical-free, nutritious crops using our expert guidance and sustainable methods.',
    image: 'https://images.unsplash.com/photo-1500151549154-50b24c9ebc3d?auto=format&fit=crop&w=800&q=80',
    icon: Leaf,
    link: '/harvesting'
  },
  {
    id: 2,
    title: 'Equipment Rental',
    description: 'Access modern farming equipment without the cost of ownership. Rent what you need, when you need it.',
    image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=800&q=80',
    icon: Tractor,
    link: '/equipment'
  },
  {
    id: 3,
    title: 'Urban Farming',
    description: 'Transform urban spaces into productive green areas with our specialized urban farming solutions.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
    icon: Building,
    link: '/urban-farming'
  },
  {
    id: 4,
    title: 'Marketplace',
    description: 'Buy and sell fresh, organic produce directly from farmers to consumers through our digital marketplace.',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80',
    icon: ShoppingBag,
    link: '/marketplace'
  }
];

const ServiceCards: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-farmfilo-lightGreen/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-farmfilo-darkGreen mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Empowering farmers and transforming agriculture through our comprehensive range of services designed for sustainability and profitability.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader className="relative">
                <div className="absolute -top-8 left-4 bg-farmfilo-primary text-white p-2 rounded-full">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-farmfilo-darkGreen">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button asChild variant="outline" className="border-farmfilo-primary text-farmfilo-primary hover:bg-farmfilo-primary hover:text-white">
                  <Link to={service.link} className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
