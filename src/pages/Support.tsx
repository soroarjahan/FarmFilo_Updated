
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, Clock, Calendar } from 'lucide-react';
import { toast } from 'sonner';

const Support = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const handleSupportRequest = () => {
    // Simulate sending support request
    toast.success('Support request submitted successfully!');
    // Clear form
    setName('');
    setPhone('');
    setMessage('');
    setSubject('');
  };

  const handleCallSupport = () => {
    toast.success('Connecting to support agent...');
  };

  return (
    <Layout>
      <div className="relative pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-farmfilo-darkGreen font-montserrat mb-2">24/7 Support Center</h1>
            <p className="text-gray-600 font-montserrat">Get help with your farming needs anytime, anywhere</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Contact Support</CardTitle>
                  <CardDescription>Fill out the form and our team will get back to you</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select 
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="technical">Technical Support</option>
                      <option value="farming">Farming Advice</option>
                      <option value="account">Account Issues</option>
                      <option value="equipment">Equipment Problems</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      rows={5} 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary"
                      placeholder="Describe your issue or question"
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      className="bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen"
                      onClick={handleSupportRequest}
                    >
                      Submit Request
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Frequently Asked Questions</CardTitle>
                  <CardDescription>Quick answers to common questions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-5">
                    <div>
                      <h3 className="font-medium mb-2">How do I set up my farm profile?</h3>
                      <p className="text-sm text-gray-600">To set up your farm profile, navigate to the Dashboard and click on "Farm Settings". From there, you can add your farm details including location, size, crops, and other relevant information.</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">What devices are compatible with the FarmFilo platform?</h3>
                      <p className="text-sm text-gray-600">FarmFilo is accessible on any device with an internet connection. We have optimized the platform for smartphones, tablets, laptops, and desktop computers. For field use, we recommend our mobile app available for both Android and iOS.</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">How accurate are the weather predictions?</h3>
                      <p className="text-sm text-gray-600">Our weather predictions use data from multiple sources including local weather stations and satellite data. The accuracy is typically 85-90% for 3-day forecasts and 70-75% for 7-day forecasts. We continuously improve our algorithms for better accuracy.</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">How can I upload my field images for analysis?</h3>
                      <p className="text-sm text-gray-600">You can upload field images in the Farmer Portal under the "Image Analysis" tab. Simply click the "Upload" button and select images from your device. Our system accepts JPG, PNG, and HEIF formats up to 20MB per image.</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">What types of issues can the chatbot help with?</h3>
                      <p className="text-sm text-gray-600">Our AI chatbot can help with basic farming questions, platform navigation, troubleshooting common issues, providing quick crop guidance, and weather information. For complex issues, it will connect you with a human support agent.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-farmfilo-primary text-white">
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat">Quick Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">Call Support</p>
                        <p className="text-white/80 text-sm">Get immediate assistance</p>
                        <Button 
                          className="mt-2 bg-white text-farmfilo-primary hover:bg-white/90"
                          onClick={handleCallSupport}
                        >
                          Call Now
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <MessageSquare className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">Chat with Bot</p>
                        <p className="text-white/80 text-sm">AI-powered assistance</p>
                        <Button className="mt-2 bg-white text-farmfilo-primary hover:bg-white/90">
                          Start Chat
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Support Hours</CardTitle>
                  <CardDescription>When you can reach us</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-farmfilo-primary mr-3" />
                      <div>
                        <p className="font-medium">24/7 Support</p>
                        <p className="text-sm text-gray-600">Available all day, every day</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-farmfilo-primary mr-3" />
                      <div>
                        <p className="font-medium">Call Center</p>
                        <p className="text-sm text-gray-600">6:00 AM - 10:00 PM (Local Time)</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-5 w-5 text-farmfilo-primary mr-3" />
                      <div>
                        <p className="font-medium">Live Chat</p>
                        <p className="text-sm text-gray-600">Available 24/7</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-farmfilo-primary mr-3" />
                      <div>
                        <p className="font-medium">Field Visits</p>
                        <p className="text-sm text-gray-600">Monday to Friday, 8:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Emergency Contacts</CardTitle>
                  <CardDescription>For urgent farming issues</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-3">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Equipment Breakdown</p>
                        <p className="text-sm text-gray-600">+880 12-345-6789</p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-3">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Pest Outbreak</p>
                        <p className="text-sm text-gray-600">+880 12-345-6790</p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <div className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-3">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Irrigation Issues</p>
                        <p className="text-sm text-gray-600">+880 12-345-6791</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Call Support Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          className="bg-farmfilo-primary hover:bg-farmfilo-darkGreen text-white rounded-full h-16 w-16 flex items-center justify-center shadow-lg"
          onClick={handleCallSupport}
        >
          <Phone className="h-6 w-6" />
        </Button>
      </div>
    </Layout>
  );
};

export default Support;
