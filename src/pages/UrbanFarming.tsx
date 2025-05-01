
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Leaf, TreeDeciduous } from 'lucide-react';

const UrbanFarming: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TreeDeciduous className="h-10 w-10 text-farmfilo-primary" />
              <h1 className="text-3xl md:text-5xl font-bold text-farmfilo-darkGreen">Urban Farming</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bringing organic farming to cities with innovative solutions for limited spaces. Grow your own food in urban environments using sustainable methods and modern technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="lg:col-span-1">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80" 
                alt="Urban farming" 
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-1 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-farmfilo-darkGreen mb-4">Why Urban Farming?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-farmfilo-lightGreen p-2 rounded-full mr-3">
                    <Leaf className="h-6 w-6 text-farmfilo-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-farmfilo-darkGreen">Food Security</h3>
                    <p className="text-gray-600">Grow fresh, organic food right where you live, reducing dependence on distant food sources.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-farmfilo-lightGreen p-2 rounded-full mr-3">
                    <Leaf className="h-6 w-6 text-farmfilo-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-farmfilo-darkGreen">Environmental Benefits</h3>
                    <p className="text-gray-600">Reduce carbon footprint by minimizing transportation and utilizing otherwise unused spaces.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-farmfilo-lightGreen p-2 rounded-full mr-3">
                    <Leaf className="h-6 w-6 text-farmfilo-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-farmfilo-darkGreen">Community Building</h3>
                    <p className="text-gray-600">Create connections through shared gardening spaces and knowledge exchange.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-farmfilo-lightGreen p-2 rounded-full mr-3">
                    <Leaf className="h-6 w-6 text-farmfilo-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-farmfilo-darkGreen">Educational Opportunity</h3>
                    <p className="text-gray-600">Learn about food production and develop sustainable living skills.</p>
                  </div>
                </li>
              </ul>
              <Button className="mt-8 bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen self-start">
                Get Started
              </Button>
            </div>
          </div>

          <Tabs defaultValue="systems" className="w-full mb-16">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="systems" className="text-lg px-6 py-3">Farming Systems</TabsTrigger>
                <TabsTrigger value="workshops" className="text-lg px-6 py-3">Workshops</TabsTrigger>
                <TabsTrigger value="community" className="text-lg px-6 py-3">Community Projects</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="systems">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="bg-farmfilo-lightGreen p-3 rounded-full inline-flex mb-4">
                      <Leaf className="h-8 w-8 text-farmfilo-primary" />
                    </div>
                    <CardTitle className="text-farmfilo-darkGreen text-xl">Balcony Garden Systems</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Compact gardening solutions designed specifically for balconies. Includes vertical growing systems, hanging planters, and railing-mounted containers.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Space-efficient designs</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Weight-conscious solutions</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Herb and vegetable-focused</span>
                      </li>
                    </ul>
                    <div className="font-bold text-farmfilo-primary text-lg">From ৳3,500</div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen">
                      View Options
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="bg-farmfilo-lightGreen p-3 rounded-full inline-flex mb-4">
                      <Leaf className="h-8 w-8 text-farmfilo-primary" />
                    </div>
                    <CardTitle className="text-farmfilo-darkGreen text-xl">Rooftop Garden Systems</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Comprehensive rooftop farming solutions that include lightweight growing media, water-efficient irrigation, and structural considerations.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Modular bed systems</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Rainwater harvesting integration</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>High-yield food production</span>
                      </li>
                    </ul>
                    <div className="font-bold text-farmfilo-primary text-lg">Custom quotes</div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen">
                      Get Consultation
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="bg-farmfilo-lightGreen p-3 rounded-full inline-flex mb-4">
                      <Leaf className="h-8 w-8 text-farmfilo-primary" />
                    </div>
                    <CardTitle className="text-farmfilo-darkGreen text-xl">Hydroponic Systems</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Soil-less growing systems perfect for indoor spaces with limited access to outdoor areas. Energy-efficient and water-saving.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>NFT and DWC systems</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>LED grow light integration</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Nutrient management systems</span>
                      </li>
                    </ul>
                    <div className="font-bold text-farmfilo-primary text-lg">From ৳7,500</div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen">
                      View Options
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="workshops">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-farmfilo-darkGreen text-xl">Urban Farming Basics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      An introductory workshop covering the fundamentals of growing food in urban environments, including space assessment, plant selection, and basic growing techniques.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-farmfilo-lightGreen p-3 rounded-lg">
                        <span className="block text-sm text-gray-600">Duration</span>
                        <span className="font-medium">3 hours</span>
                      </div>
                      <div className="bg-farmfilo-lightGreen p-3 rounded-lg">
                        <span className="block text-sm text-gray-600">Level</span>
                        <span className="font-medium">Beginner</span>
                      </div>
                      <div className="bg-farmfilo-lightGreen p-3 rounded-lg">
                        <span className="block text-sm text-gray-600">Next Session</span>
                        <span className="font-medium">May 15, 2025</span>
                      </div>
                      <div className="bg-farmfilo-lightGreen p-3 rounded-lg">
                        <span className="block text-sm text-gray-600">Fee</span>
                        <span className="font-medium">৳800</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen">
                      Register Now
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-farmfilo-darkGreen text-xl">Hydroponic Systems Workshop</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Learn how to build and maintain simple hydroponic systems for growing vegetables in your home. Includes hands-on construction of a small system to take home.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-farmfilo-lightGreen p-3 rounded-lg">
                        <span className="block text-sm text-gray-600">Duration</span>
                        <span className="font-medium">4 hours</span>
                      </div>
                      <div className="bg-farmfilo-lightGreen p-3 rounded-lg">
                        <span className="block text-sm text-gray-600">Level</span>
                        <span className="font-medium">Intermediate</span>
                      </div>
                      <div className="bg-farmfilo-lightGreen p-3 rounded-lg">
                        <span className="block text-sm text-gray-600">Next Session</span>
                        <span className="font-medium">May 22, 2025</span>
                      </div>
                      <div className="bg-farmfilo-lightGreen p-3 rounded-lg">
                        <span className="block text-sm text-gray-600">Fee</span>
                        <span className="font-medium">৳1,200</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen">
                      Register Now
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-farmfilo-darkGreen text-xl">Container Gardening Masterclass</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Deep dive into container gardening techniques for balconies and small spaces. Covers soil mixing, fertilization, pest management, and season extension.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-farmfilo-lightGreen p-3 rounded-lg">
                        <span className="block text-sm text-gray-600">Duration</span>
                        <span className="font-medium">2 days</span>
                      </div>
                      <div className="bg-farmfilo-lightGreen p-3 rounded-lg">
                        <span className="block text-sm text-gray-600">Level</span>
                        <span className="font-medium">All levels</span>
                      </div>
                      <div className="bg-farmfilo-lightGreen p-3 rounded-lg">
                        <span className="block text-sm text-gray-600">Next Session</span>
                        <span className="font-medium">June 5-6, 2025</span>
                      </div>
                      <div className="bg-farmfilo-lightGreen p-3 rounded-lg">
                        <span className="block text-sm text-gray-600">Fee</span>
                        <span className="font-medium">৳2,000</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen">
                      Register Now
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-farmfilo-darkGreen text-xl">Urban Farming Business Planning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      For entrepreneurs interested in starting urban farming businesses. Covers market analysis, business models, regulations, and financial planning.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-farmfilo-lightGreen p-3 rounded-lg">
                        <span className="block text-sm text-gray-600">Duration</span>
                        <span className="font-medium">3 days</span>
                      </div>
                      <div className="bg-farmfilo-lightGreen p-3 rounded-lg">
                        <span className="block text-sm text-gray-600">Level</span>
                        <span className="font-medium">Advanced</span>
                      </div>
                      <div className="bg-farmfilo-lightGreen p-3 rounded-lg">
                        <span className="block text-sm text-gray-600">Next Session</span>
                        <span className="font-medium">July 10-12, 2025</span>
                      </div>
                      <div className="bg-farmfilo-lightGreen p-3 rounded-lg">
                        <span className="block text-sm text-gray-600">Fee</span>
                        <span className="font-medium">৳5,000</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen">
                      Register Now
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="community">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80" 
                    alt="Community Garden Project" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-farmfilo-darkGreen mb-3">Dhaka Rooftop Community Gardens</h3>
                    <p className="text-gray-600 mb-4">
                      Network of connected rooftop gardens throughout Dhaka city. Members share resources, knowledge, and harvests. Currently active in 8 neighborhoods with 15+ rooftops.
                    </p>
                    <Button className="w-full bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen">
                      Join Project
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80" 
                    alt="School Garden Project" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-farmfilo-darkGreen mb-3">School Garden Initiative</h3>
                    <p className="text-gray-600 mb-4">
                      Working with local schools to establish educational gardens. These gardens provide hands-on learning for students while supplying fresh produce for school meals.
                    </p>
                    <Button className="w-full bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen">
                      Volunteer
                    </Button>
                  </div>
                </div>

                <div className="md:col-span-2 bg-farmfilo-lightGreen rounded-lg p-8 shadow-inner">
                  <h2 className="text-2xl font-bold text-farmfilo-darkGreen mb-4">Start Your Own Community Project</h2>
                  <p className="text-gray-700 mb-6">
                    FarmFilo offers support for community-initiated urban farming projects. We provide technical guidance, initial resources, and connections to our network of urban farmers.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h3 className="font-bold text-farmfilo-primary mb-2">Technical Support</h3>
                      <p className="text-sm">Expert consultation on site selection, system design, and growing techniques.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h3 className="font-bold text-farmfilo-primary mb-2">Starter Resources</h3>
                      <p className="text-sm">Access to seeds, soil, and basic equipment to get your community project started.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h3 className="font-bold text-farmfilo-primary mb-2">Network Access</h3>
                      <p className="text-sm">Connect with other community farmers for knowledge sharing and collaborative opportunities.</p>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <Button className="bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen" size="lg">
                      Submit Project Proposal
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-farmfilo-darkGreen mb-4">Ready to Start Your Urban Farm?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Book a consultation with our urban farming specialists to assess your space and create a customized plan for your urban farming project.
            </p>
            <Button className="bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen" size="lg">
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UrbanFarming;
