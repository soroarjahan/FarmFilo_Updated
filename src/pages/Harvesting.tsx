
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Shovel } from 'lucide-react';

const harvestingServices = [
  {
    title: "Crop Harvesting",
    description: "Professional crop harvesting services with skilled labor and modern equipment.",
    details: "Our experienced team provides efficient harvesting for all types of crops, minimizing losses and maximizing yield. We use modern techniques that maintain the quality of your produce.",
    price: "Starting at ৳2,500/acre",
    icon: <Shovel className="h-12 w-12" />
  },
  {
    title: "Post-Harvest Processing",
    description: "Cleaning, sorting, and packaging services for freshly harvested crops.",
    details: "Extend the shelf life of your produce with our professional post-harvest processing. We clean, sort, and package your crops according to market specifications to maximize value.",
    price: "Starting at ৳1,500/ton",
    icon: <Shovel className="h-12 w-12" />
  },
  {
    title: "On-Farm Storage Solutions",
    description: "Temporary storage solutions to maintain product freshness until transport.",
    details: "Our mobile storage solutions help maintain the quality of your harvest until it's ready for transport to market. Temperature and humidity-controlled options available.",
    price: "Starting at ৳800/day",
    icon: <Shovel className="h-12 w-12" />
  },
  {
    title: "Transport Services",
    description: "Safe and timely transportation of harvested crops to markets or processing facilities.",
    details: "Our dedicated transport service ensures your harvest reaches markets or processing facilities quickly and in perfect condition, reducing losses during transit.",
    price: "Starting at ৳1,000/trip",
    icon: <Shovel className="h-12 w-12" />
  },
  {
    title: "Seasonal Labor Management",
    description: "Coordination of skilled harvest workers based on your crop schedule.",
    details: "We provide trained harvest teams exactly when you need them, managed by experienced supervisors to ensure efficient and careful handling of your crops.",
    price: "Custom quotes",
    icon: <Shovel className="h-12 w-12" />
  },
  {
    title: "Harvest Planning",
    description: "Expert planning for optimal harvest timing and resource allocation.",
    details: "Our agricultural experts help plan your harvest schedule based on crop maturity, weather forecasts, and market conditions to maximize returns.",
    price: "Starting at ৳1,200/consultation",
    icon: <Shovel className="h-12 w-12" />
  }
];

const Harvesting: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-farmfilo-darkGreen mb-4">Harvesting Services</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional harvesting solutions to help organic farmers maximize yield and reduce post-harvest losses. Our experienced teams use the latest techniques to ensure your crops reach markets in perfect condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {harvestingServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="text-farmfilo-primary mb-4">{service.icon}</div>
                  <CardTitle className="text-farmfilo-darkGreen text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{service.details}</p>
                  <div className="font-bold text-farmfilo-primary text-lg">{service.price}</div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen w-full">
                    Book Service
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="bg-farmfilo-lightGreen rounded-lg p-8 shadow-inner">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h2 className="text-2xl font-bold text-farmfilo-darkGreen mb-2">Need a Custom Harvesting Solution?</h2>
                <p className="text-gray-700">
                  Our agricultural experts can develop a customized harvesting plan for your farm that maximizes efficiency and minimizes losses.
                </p>
              </div>
              <Button className="bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen whitespace-nowrap" size="lg">
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Harvesting;
