
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const services = [
  {
    category: "farmers",
    items: [
      {
        title: "Learning Modules",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        ),
        description: "Comprehensive step-by-step guides for organic farming practices, from soil preparation to harvest techniques.",
        details: "Our learning modules include video tutorials, downloadable resources, and interactive quizzes to ensure farmers master organic farming techniques."
      },
      {
        title: "AI Disease Detection",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        description: "Advanced technology to identify crop diseases early and recommend organic treatments.",
        details: "Simply upload a photo of your affected crop and our AI will analyze it, identify the disease, and recommend effective organic treatments and preventive measures."
      },
      {
        title: "Soil Testing",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        ),
        description: "Analyze soil health to optimize organic amendments and ensure sustainable growing conditions.",
        details: "Our field agents collect soil samples and our laboratory conducts comprehensive testing, providing detailed reports with customized recommendations for organic soil improvement."
      },
      {
        title: "Organic Inputs",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        ),
        description: "Access to non-GMO seeds, eco-friendly fertilizers, and natural pest control solutions.",
        details: "We provide high-quality organic farming inputs including heritage seed varieties, compost, vermicompost, bio-pesticides, and other essential organic farming supplies."
      },
    ]
  },
  {
    category: "consumers",
    items: [
      {
        title: "AgriHaat Marketplace",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        description: "Direct-to-consumer platform connecting organic farmers with buyers for fair prices.",
        details: "Shop fresh organic produce directly from local farmers with complete transparency about farming practices, harvest dates, and fair pricing."
      },
      {
        title: "Food Traceability",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        ),
        description: "Track your food from farm to table with complete transparency about growing practices.",
        details: "Scan QR codes on product packaging to view the complete journey of your food, including farmer profiles, cultivation methods, and harvest information."
      },
      {
        title: "Subscription Boxes",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        ),
        description: "Weekly or monthly deliveries of seasonal organic produce direct to your doorstep.",
        details: "Choose from various subscription box options including mixed vegetables, fruits, or specialty items, all freshly harvested and delivered to your home."
      },
      {
        title: "Nutritional Information",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        ),
        description: "Access detailed nutritional benefits of organic produce and healthy recipe suggestions.",
        details: "Our platform provides comprehensive nutritional information for all products, along with seasonal recipes, cooking tips, and storage recommendations."
      }
    ]
  },
  {
    category: "technology",
    items: [
      {
        title: "IoT Soil Monitoring",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        ),
        description: "Real-time monitoring of soil moisture, nutrients, and pH levels for optimal plant growth.",
        details: "Solar-powered IoT sensors continuously monitor key soil parameters and send data to your FarmFilo dashboard, with alerts for any necessary actions."
      },
      {
        title: "Weather Forecasting",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        ),
        description: "Localized weather forecasts to help farmers plan planting, irrigation, and harvesting.",
        details: "Our system provides accurate 7-day forecasts specific to your location, with alerts for extreme weather conditions that might affect your crops."
      },
      {
        title: "Crop Planning Tools",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        description: "Customized crop rotation plans and planting schedules for maximum yield and soil health.",
        details: "Our AI-powered planning tools analyze your soil data, local climate, and market trends to recommend optimal crop rotation and planting schedules."
      },
      {
        title: "Marketplace Analytics",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
        ),
        description: "Market demand insights and pricing trends to help farmers plan their crop selection.",
        details: "Our analytics dashboard provides up-to-date information on market demand, pricing trends, and consumer preferences to help you make informed decisions."
      }
    ]
  }
];

const Services = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 leaf-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-farmfilo-darkGreen mb-4">Our Services</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for farmers and consumers to promote sustainable organic agriculture 
              and ensure food security throughout Bangladesh.
            </p>
          </div>

          <Tabs defaultValue="farmers" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="farmers" className="text-lg px-6 py-3">For Farmers</TabsTrigger>
                <TabsTrigger value="consumers" className="text-lg px-6 py-3">For Consumers</TabsTrigger>
                <TabsTrigger value="technology" className="text-lg px-6 py-3">Technology</TabsTrigger>
              </TabsList>
            </div>

            {services.map((serviceCategory) => (
              <TabsContent key={serviceCategory.category} value={serviceCategory.category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {serviceCategory.items.map((service, index) => (
                    <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                      <CardHeader className="pb-4">
                        <div className="text-farmfilo-primary mb-4">{service.icon}</div>
                        <CardTitle className="text-farmfilo-darkGreen text-2xl">{service.title}</CardTitle>
                        <CardDescription className="text-base text-gray-600">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{service.details}</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen">
                          Learn More
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-20 bg-farmfilo-lightGreen rounded-lg p-8 shadow-inner">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-farmfilo-darkGreen mb-4">Pricing Plans</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the right plan for your farming or consumption needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-farmfilo-primary border-2">
                <CardHeader className="pb-4 text-center bg-farmfilo-primary text-white rounded-t-lg">
                  <CardTitle>Basic Plan</CardTitle>
                  <p className="text-3xl font-bold mt-2">৳499<span className="text-base font-normal">/month</span></p>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Access to learning modules
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Basic soil testing (1/month)
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Marketplace access
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Basic weather forecasting
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Email support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-farmfilo-primary hover:bg-farmfilo-darkGreen">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-farmfilo-accent border-2 shadow-2xl transform scale-105">
                <div className="absolute -top-4 left-0 right-0 text-center">
                  <span className="bg-farmfilo-accent text-farmfilo-darkGreen px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
                <CardHeader className="pb-4 text-center bg-farmfilo-accent text-farmfilo-darkGreen rounded-t-lg">
                  <CardTitle>Pro Plan</CardTitle>
                  <p className="text-3xl font-bold mt-2">৳999<span className="text-base font-normal">/month</span></p>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      All Basic Plan features
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Advanced soil testing (3/month)
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      AI disease detection (10/month)
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Monthly field supervisor visit
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Priority marketplace listing
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Phone and email support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-farmfilo-accent text-farmfilo-darkGreen hover:bg-farmfilo-accent/90">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-farmfilo-darkGreen border-2">
                <CardHeader className="pb-4 text-center bg-farmfilo-darkGreen text-white rounded-t-lg">
                  <CardTitle>Enterprise</CardTitle>
                  <p className="text-3xl font-bold mt-2">৳1999<span className="text-base font-normal">/month</span></p>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      All Pro Plan features
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Unlimited soil testing
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Unlimited disease detection
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      IoT soil monitoring system
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Weekly field supervisor visit
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Machinery rental discounts
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-farmfilo-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      24/7 priority support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-farmfilo-darkGreen hover:bg-farmfilo-darkGreen/90">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-farmfilo-darkGreen mb-4">Need a Custom Solution?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Contact our team for personalized service packages tailored to your specific agricultural needs.
            </p>
            <Button className="bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen" size="lg" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
