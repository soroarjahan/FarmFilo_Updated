
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tractor } from 'lucide-react';

const equipmentCategories = [
  {
    category: "tillage",
    title: "Tillage Equipment",
    items: [
      {
        name: "Compact Tractor",
        image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&q=80",
        price: "৳1,500/day",
        description: "Suitable for small to medium-sized farms with various attachments available",
        details: "25-40 HP tractor with organic farming compatible attachments. Includes operator training and delivery/pickup."
      },
      {
        name: "Power Tiller",
        image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&q=80",
        price: "৳800/day",
        description: "Perfect for small plots and intensive land preparation",
        details: "Fuel-efficient power tiller ideal for smaller plots. Easy to operate with adjustable tilling depth."
      },
      {
        name: "Disc Harrow",
        image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=400&q=80",
        price: "৳600/day",
        description: "For seedbed preparation and weed control",
        details: "Adjustable disc harrow for effective soil preparation. Can be attached to our rental tractors or your own equipment."
      }
    ]
  },
  {
    category: "irrigation",
    title: "Irrigation Equipment",
    items: [
      {
        name: "Drip Irrigation System",
        image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=400&q=80",
        price: "৳500/week",
        description: "Water-efficient irrigation for row crops and gardens",
        details: "Complete kit for up to 0.5 acre with hoses, drippers, connectors and setup guide. Installation assistance available."
      },
      {
        name: "Portable Sprinkler System",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80",
        price: "৳400/week",
        description: "Even water distribution for field crops",
        details: "Coverage of up to 0.75 acre with adjustable water flow and spray patterns. Includes all connectors and hoses."
      },
      {
        name: "Solar Water Pump",
        image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&q=80",
        price: "৳900/week",
        description: "Sustainable pumping solution for remote areas",
        details: "Solar-powered pump with 1500L/hour capacity. Includes solar panels, controller and necessary connectors."
      }
    ]
  },
  {
    category: "harvesting",
    title: "Harvesting Equipment",
    items: [
      {
        name: "Mini Rice Harvester",
        image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&q=80",
        price: "৳2,000/day",
        description: "Efficient rice harvesting for small to medium plots",
        details: "Walk-behind rice harvester suitable for areas up to 2 acres per day. Includes trained operator and fuel."
      },
      {
        name: "Vegetable Harvester",
        image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=400&q=80",
        price: "৳1,200/day",
        description: "Specialized equipment for root and leaf vegetable harvesting",
        details: "Adjustable for different vegetable types. Reduces labor requirements and harvest damage."
      },
      {
        name: "Harvest Collection Carts",
        image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&q=80",
        price: "৳300/day",
        description: "Mobile collection system for efficient harvesting",
        details: "Set of 3 carts with capacity of 100kg each. Designed for easy movement through crop rows."
      }
    ]
  }
];

const Equipment: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Tractor className="h-10 w-10 text-farmfilo-primary" />
              <h1 className="text-3xl md:text-5xl font-bold text-farmfilo-darkGreen">Equipment Rental</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access modern farming equipment without the high costs of ownership. Our rental service provides well-maintained equipment for organic farming operations of all sizes.
            </p>
          </div>

          <Tabs defaultValue="tillage" className="w-full mb-16">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="tillage" className="text-lg px-6 py-3">Tillage Equipment</TabsTrigger>
                <TabsTrigger value="irrigation" className="text-lg px-6 py-3">Irrigation Systems</TabsTrigger>
                <TabsTrigger value="harvesting" className="text-lg px-6 py-3">Harvesting Equipment</TabsTrigger>
              </TabsList>
            </div>

            {equipmentCategories.map((category) => (
              <TabsContent key={category.category} value={category.category}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.items.map((equipment, index) => (
                    <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={equipment.image} 
                          alt={equipment.name} 
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-farmfilo-darkGreen text-xl">{equipment.name}</CardTitle>
                        <CardDescription className="text-base text-gray-600">{equipment.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">{equipment.details}</p>
                        <div className="font-bold text-farmfilo-primary text-lg">{equipment.price}</div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen">
                          Book Equipment
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-farmfilo-lightGreen rounded-lg p-8 shadow-inner">
              <h2 className="text-2xl font-bold text-farmfilo-darkGreen mb-4">Rental Process</h2>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex items-center justify-center bg-farmfilo-primary text-white rounded-full h-8 w-8 mr-3 shrink-0">1</span>
                  <div>
                    <h3 className="font-semibold text-lg">Book Equipment</h3>
                    <p>Reserve your equipment online or by phone at least 3 days in advance.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center bg-farmfilo-primary text-white rounded-full h-8 w-8 mr-3 shrink-0">2</span>
                  <div>
                    <h3 className="font-semibold text-lg">Delivery or Pickup</h3>
                    <p>Choose delivery to your farm or pickup from our equipment hub.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center bg-farmfilo-primary text-white rounded-full h-8 w-8 mr-3 shrink-0">3</span>
                  <div>
                    <h3 className="font-semibold text-lg">Usage Training</h3>
                    <p>Receive operation and safety training from our equipment experts.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center bg-farmfilo-primary text-white rounded-full h-8 w-8 mr-3 shrink-0">4</span>
                  <div>
                    <h3 className="font-semibold text-lg">Return Equipment</h3>
                    <p>Return the equipment in clean working condition or schedule a pickup.</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="bg-farmfilo-lightGreen rounded-lg p-8 shadow-inner">
              <h2 className="text-2xl font-bold text-farmfilo-darkGreen mb-4">Membership Benefits</h2>
              <p className="mb-4">Join our equipment sharing cooperative for additional benefits:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-farmfilo-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>20% discount on all equipment rentals</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-farmfilo-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority booking during peak seasons</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-farmfilo-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free delivery within 20km radius</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-farmfilo-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to premium equipment not available for individual rental</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-farmfilo-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Monthly equipment maintenance workshops</span>
                </li>
              </ul>
              <Button className="mt-6 bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen w-full">
                Join Cooperative
              </Button>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-farmfilo-darkGreen mb-4">Need Equipment Not Listed?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We're continually expanding our equipment inventory. Let us know what you need, and we'll try to accommodate your requirements.
            </p>
            <Button className="bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen" size="lg">
              Request Equipment
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Equipment;
