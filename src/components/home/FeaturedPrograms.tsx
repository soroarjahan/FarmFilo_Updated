
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: 'Farmer Training Initiative',
    description: 'Comprehensive training programs on organic farming techniques, crop management, and sustainable practices.',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Technology Integration',
    description: 'Smart farming solutions using IoT devices and mobile applications to monitor crops and optimize yields.',
    image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Community Development',
    description: 'Building strong farming communities through knowledge sharing, cooperative models, and market access.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
  }
];

const FeaturedPrograms: React.FC = () => {
  return (
    <section className="py-16 bg-farmfilo-lightGreen/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-farmfilo-darkGreen mb-4">Featured Programs</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Our flagship programs designed to empower farmers and promote sustainable agriculture across Bangladesh.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-none h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-farmfilo-darkGreen">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button variant="ghost" className="text-farmfilo-primary hover:text-farmfilo-darkGreen hover:bg-farmfilo-lightGreen/30 p-0 flex items-center">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
