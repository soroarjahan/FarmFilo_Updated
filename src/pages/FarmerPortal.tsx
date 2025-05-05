
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Calendar, Upload, Image, FileSpreadsheet } from 'lucide-react';
import { Plant, Rainfall } from '@/components/icons/CustomIcons';

const FarmerPortal = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  
  return (
    <Layout>
      <div className="relative">
        {/* Hero section with full-width agricultural image */}
        <div className="relative h-72 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80" 
            alt="Farmer in field"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
            <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-2">Farmer Portal</h1>
              <p className="text-white/90 font-montserrat">Manage your crops and track your farming activities</p>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-4 -mt-10 pb-16">
          <Tabs defaultValue="overview" className="w-full">
            <Card className="mb-6 bg-white/95 backdrop-blur shadow-lg">
              <CardContent className="p-0">
                <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 p-0 h-auto">
                  <TabsTrigger 
                    value="overview" 
                    className="data-[state=active]:bg-farmfilo-primary data-[state=active]:text-white rounded-none py-4 font-montserrat"
                  >
                    <Plant className="h-4 w-4 mr-2" />
                    My Crops
                  </TabsTrigger>
                  <TabsTrigger 
                    value="activities" 
                    className="data-[state=active]:bg-farmfilo-primary data-[state=active]:text-white rounded-none py-4 font-montserrat"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Activities
                  </TabsTrigger>
                  <TabsTrigger 
                    value="yield" 
                    className="data-[state=active]:bg-farmfilo-primary data-[state=active]:text-white rounded-none py-4 font-montserrat"
                  >
                    <FileSpreadsheet className="h-4 w-4 mr-2" />
                    Yield Data
                  </TabsTrigger>
                  <TabsTrigger 
                    value="analysis" 
                    className="data-[state=active]:bg-farmfilo-primary data-[state=active]:text-white rounded-none py-4 font-montserrat"
                  >
                    <Image className="h-4 w-4 mr-2" />
                    Image Analysis
                  </TabsTrigger>
                </TabsList>
              </CardContent>
            </Card>

            {/* Overview Tab */}
            <TabsContent value="overview" className="mt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">My Active Crops</CardTitle>
                    <CardDescription>Current crops under your management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {['Rice', 'Wheat', 'Vegetables'].map((crop, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-16 h-16 bg-farmfilo-lightGreen rounded-md flex items-center justify-center text-farmfilo-primary mr-4">
                                <Plant className="h-8 w-8" />
                              </div>
                              <div>
                                <h3 className="font-semibold">{crop}</h3>
                                <p className="text-sm text-gray-500">North Field, Plot {index + 1}</p>
                                <p className="text-sm text-gray-500">Planted: April {10 + index}, 2025</p>
                              </div>
                            </div>
                            <div>
                              <Button size="sm" className="bg-farmfilo-primary text-white mb-2">View Details</Button>
                              <div className="text-xs text-gray-500">Expected harvest: June {20 + index}, 2025</div>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Growth Progress</span>
                              <span className="text-sm font-medium">{65 - index * 10}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-farmfilo-primary h-2 rounded-full" 
                                style={{ width: `${65 - index * 10}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Field Conditions</CardTitle>
                    <CardDescription>Current environmental data</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4 bg-blue-50/50">
                        <div className="flex items-center">
                          <Rainfall className="h-8 w-8 text-blue-500 mr-3" />
                          <div>
                            <h3 className="font-semibold">Soil Moisture</h3>
                            <p className="text-2xl font-bold">68%</p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Last updated: Today, 9:30 AM</p>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h3 className="font-semibold mb-3">Today's Weather</h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="bg-yellow-100 rounded-full p-2 mr-3">
                              <Plant className="h-5 w-5 text-yellow-600" />
                            </div>
                            <div>
                              <p className="font-medium">32°C</p>
                              <p className="text-sm text-gray-500">Sunny</p>
                            </div>
                          </div>
                          <div>
                            <p className="font-medium">Humidity</p>
                            <p className="text-sm text-gray-500">65%</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h3 className="font-semibold mb-2">Tasks Due Today</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-farmfilo-primary mr-2"></div>
                            <span className="text-sm">Irrigate rice field (North)</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-farmfilo-primary mr-2"></div>
                            <span className="text-sm">Apply organic fertilizer</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="activities">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Farming Activities</CardTitle>
                  <CardDescription>Log and track your farming activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h3 className="font-medium mb-4">Log New Activity</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Activity Type</label>
                        <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary">
                          <option value="">Select activity</option>
                          <option value="sowing">Sowing/Planting</option>
                          <option value="irrigation">Irrigation</option>
                          <option value="fertilizer">Fertilizer Application</option>
                          <option value="pesticide">Pesticide Application</option>
                          <option value="weeding">Weeding</option>
                          <option value="harvesting">Harvesting</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Crop/Field</label>
                        <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary">
                          <option value="">Select crop/field</option>
                          <option value="rice">Rice - North Field</option>
                          <option value="wheat">Wheat - East Field</option>
                          <option value="vegetables">Vegetables - South Field</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                        <input 
                          type="date" 
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                      <textarea 
                        rows={3}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary"
                        placeholder="Add any additional details about the activity..."
                      ></textarea>
                    </div>
                    <Button className="mt-4 bg-farmfilo-primary text-white">Log Activity</Button>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Recent Activities</h3>
                    <div className="border rounded-lg overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crop/Field</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">May 3, 2025</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">Irrigation</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">Rice - North Field</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">May 1, 2025</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">Fertilizer Application</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">Wheat - East Field</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">April 28, 2025</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">Weeding</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">Vegetables - South Field</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">April 25, 2025</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">Pesticide Application</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">Rice - North Field</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="yield">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Yield Data</CardTitle>
                  <CardDescription>Track past yields and forecast future harvests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-4">Past Yield Performance</h3>
                      <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">Yield performance chart</p>
                      </div>
                      <div className="mt-4 space-y-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Rice - Last Season</p>
                            <p className="text-sm text-gray-500">Harvested: November 2024</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">4.2 tons/acre</p>
                            <p className="text-xs text-green-600">+8% from previous</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Wheat - Last Season</p>
                            <p className="text-sm text-gray-500">Harvested: February 2025</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">3.8 tons/acre</p>
                            <p className="text-xs text-green-600">+5% from previous</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-4">Expected Yield Forecast</h3>
                      <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">Yield forecast chart</p>
                      </div>
                      <div className="mt-4 space-y-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Rice - Current Season</p>
                            <p className="text-sm text-gray-500">Expected harvest: June 2025</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">4.5 tons/acre</p>
                            <p className="text-xs text-green-600">+7% forecast</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Wheat - Next Season</p>
                            <p className="text-sm text-gray-500">Projected for Feb 2026</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">4.0 tons/acre</p>
                            <p className="text-xs text-green-600">+5% forecast</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-medium mb-4">Factors Affecting Yield</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium flex items-center">
                          <Rainfall className="h-4 w-4 mr-2 text-blue-500" />
                          Water Management
                        </h4>
                        <p className="text-sm mt-2">Optimized irrigation schedule has improved water efficiency by 15%.</p>
                        <div className="mt-2 flex justify-between">
                          <span className="text-xs text-gray-500">Impact on yield:</span>
                          <span className="text-xs font-medium text-green-600">+8%</span>
                        </div>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium flex items-center">
                          <Plant className="h-4 w-4 mr-2 text-green-500" />
                          Organic Fertilizer
                        </h4>
                        <p className="text-sm mt-2">Use of organic fertilizer improved soil quality and nutrient content.</p>
                        <div className="mt-2 flex justify-between">
                          <span className="text-xs text-gray-500">Impact on yield:</span>
                          <span className="text-xs font-medium text-green-600">+12%</span>
                        </div>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-purple-500" />
                          Planting Schedule
                        </h4>
                        <p className="text-sm mt-2">Optimized planting date based on weather patterns and soil conditions.</p>
                        <div className="mt-2 flex justify-between">
                          <span className="text-xs text-gray-500">Impact on yield:</span>
                          <span className="text-xs font-medium text-green-600">+5%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analysis">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Image Analysis</CardTitle>
                  <CardDescription>Upload and analyze field images</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                        {selectedImage ? (
                          <div className="space-y-4 w-full">
                            <img src={selectedImage} alt="Uploaded field" className="w-full h-64 object-cover rounded-md" />
                            <Button 
                              className="w-full bg-farmfilo-primary text-white"
                              onClick={() => setSelectedImage(null)}
                            >
                              Remove Image
                            </Button>
                          </div>
                        ) : (
                          <>
                            <Upload className="h-12 w-12 text-gray-400 mb-4" />
                            <p className="text-gray-500 mb-2">Upload a field image for analysis</p>
                            <p className="text-xs text-gray-400 mb-4">Supports JPG, PNG up to 10MB</p>
                            <label className="cursor-pointer">
                              <input 
                                type="file" 
                                className="hidden" 
                                onChange={handleImageUpload}
                                accept="image/*"
                              />
                              <span className="px-4 py-2 bg-farmfilo-primary text-white rounded-md hover:bg-farmfilo-darkGreen transition-colors">
                                Select Image
                              </span>
                            </label>
                          </>
                        )}
                      </div>
                      {selectedImage && (
                        <Button className="w-full mt-4 bg-farmfilo-accent text-farmfilo-darkGreen hover:bg-farmfilo-accent/90">
                          Analyze Image
                        </Button>
                      )}
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-medium">Recent Image Analyses</h3>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex items-start">
                          <img 
                            src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=300&h=200&q=80"
                            alt="Field analysis" 
                            className="w-24 h-24 object-cover rounded-md mr-4"
                          />
                          <div>
                            <h4 className="font-medium">Rice Field Analysis</h4>
                            <p className="text-sm text-gray-500">May 1, 2025</p>
                            <div className="flex space-x-2 mt-2">
                              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Healthy: 85%</span>
                              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Stress: 12%</span>
                              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Disease: 3%</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full mt-3">View Full Analysis</Button>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex items-start">
                          <img 
                            src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=300&h=200&q=80"
                            alt="Field analysis" 
                            className="w-24 h-24 object-cover rounded-md mr-4"
                          />
                          <div>
                            <h4 className="font-medium">Wheat Field Analysis</h4>
                            <p className="text-sm text-gray-500">April 25, 2025</p>
                            <div className="flex space-x-2 mt-2">
                              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Healthy: 92%</span>
                              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Stress: 8%</span>
                              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Disease: 0%</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full mt-3">View Full Analysis</Button>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex items-start">
                          <img 
                            src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=300&h=200&q=80"
                            alt="Field analysis" 
                            className="w-24 h-24 object-cover rounded-md mr-4"
                          />
                          <div>
                            <h4 className="font-medium">Vegetable Field Analysis</h4>
                            <p className="text-sm text-gray-500">April 18, 2025</p>
                            <div className="flex space-x-2 mt-2">
                              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Healthy: 78%</span>
                              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Stress: 15%</span>
                              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Disease: 7%</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full mt-3">View Full Analysis</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default FarmerPortal;
