
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 leaf-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-farmfilo-darkGreen mb-4">About FarmFilo</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transforming agriculture in Bangladesh through sustainable organic farming practices
              for healthier food and improved farmer livelihoods.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80" 
                alt="Organic Farming" 
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-farmfilo-darkGreen mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At FarmFilo, our mission is to transform conventional farming practices in Bangladesh 
                into sustainable organic farming, ensuring chemical-free, nutritious food while 
                reducing pollution and restoring biodiversity.
              </p>
              <p className="text-gray-700 mb-4">
                We aim to address critical issues facing our nation, including food insecurity 
                affecting 25% of the population and the 36% of children under five suffering from 
                stunting due to chronic malnutrition.
              </p>
              <p className="text-gray-700">
                Through our technology-driven platform, we empower farmers with the knowledge, 
                resources, and marketplace access they need to transition to eco-friendly farming 
                practices while improving their livelihoods.
              </p>
            </div>
          </div>

          <div className="bg-farmfilo-cream rounded-lg p-8 shadow-lg mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-farmfilo-darkGreen mb-6 text-center">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-farmfilo-primary mb-4 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-farmfilo-darkGreen text-center">Education</h3>
                  <p className="text-gray-600 text-center">
                    Comprehensive training modules and personalized support from field supervisors to guide 
                    farmers through every stage of organic farming.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-farmfilo-primary mb-4 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-farmfilo-darkGreen text-center">Technology</h3>
                  <p className="text-gray-600 text-center">
                    Integration of IoT, AI, and data analytics to improve farming decisions, monitor soil health, 
                    and detect crop diseases early.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-farmfilo-primary mb-4 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-farmfilo-darkGreen text-center">Market Access</h3>
                  <p className="text-gray-600 text-center">
                    Direct-to-consumer marketplace connecting organic farmers with buyers, ensuring fair pricing 
                    and transparent supply chains.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-farmfilo-darkGreen mb-6 text-center">The Problem We're Solving</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-farmfilo-darkGreen">Food Insecurity</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>25% of Bangladesh's population is food insecure</li>
                    <li>36% of children under five suffer from stunting due to chronic malnutrition</li>
                    <li>Globally, unsafe food affects 600 million people annually</li>
                    <li>400,000 deaths annually, including 125,000 child deaths linked to food-related illnesses</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-farmfilo-darkGreen">Environmental Degradation</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Overuse of chemical fertilizers and pesticides</li>
                    <li>Increased non-communicable diseases from chemical exposure</li>
                    <li>Soil degradation and reduced biodiversity</li>
                    <li>Water and air pollution from agricultural chemicals</li>
                  </ul>
                </div>
              </div>
              <Separator className="my-6" />
              <div>
                <h3 className="text-xl font-semibold mb-4 text-farmfilo-darkGreen">Our Solution</h3>
                <p className="text-gray-700 mb-4">
                  FarmFilo guides farmers through every stage of organic farming, from soil testing to crop sales, 
                  while providing access to non-GMO seeds, eco-friendly fertilizers, and natural pest control solutions. 
                  Our AgriHaat marketplace connects farmers directly with consumers, ensuring fair prices and transparency.
                </p>
                <p className="text-gray-700">
                  We've aligned our mission with UN Sustainable Development Goals to promote sustainable 
                  agriculture and improve food security in Bangladesh and beyond.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-farmfilo-darkGreen mb-6">Join the Organic Revolution</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Whether you're a farmer looking to transition to organic practices or a consumer seeking 
              chemical-free food, FarmFilo is here to support you on your journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen font-semibold py-3 px-6 rounded-md transition-colors duration-300"
              >
                Contact Us
              </a>
              <a 
                href="/" 
                className="border-2 border-farmfilo-primary text-farmfilo-primary hover:bg-farmfilo-primary hover:text-white font-semibold py-[10px] px-6 rounded-md transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
