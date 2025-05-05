
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Calendar, Bell, Tractor } from 'lucide-react';

const FieldSupervisor = () => {
  return (
    <Layout>
      <div className="relative">
        {/* Hero section with full-width agricultural image */}
        <div className="relative h-72 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&q=80" 
            alt="Agricultural drone"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
            <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-2">Field Supervisor Tools</h1>
              <p className="text-white/90 font-montserrat">Monitor farm activities and manage field operations</p>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-4 -mt-10 pb-16">
          <Tabs defaultValue="farmers" className="w-full">
            <Card className="mb-6 bg-white/95 backdrop-blur shadow-lg">
              <CardContent className="p-0">
                <TabsList className="w-full grid grid-cols-1 md:grid-cols-3 p-0 h-auto">
                  <TabsTrigger 
                    value="farmers" 
                    className="data-[state=active]:bg-farmfilo-primary data-[state=active]:text-white rounded-none py-4 font-montserrat"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Farmers
                  </TabsTrigger>
                  <TabsTrigger 
                    value="map" 
                    className="data-[state=active]:bg-farmfilo-primary data-[state=active]:text-white rounded-none py-4 font-montserrat"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Farm Map
                  </TabsTrigger>
                  <TabsTrigger 
                    value="notifications" 
                    className="data-[state=active]:bg-farmfilo-primary data-[state=active]:text-white rounded-none py-4 font-montserrat"
                  >
                    <Bell className="h-4 w-4 mr-2" />
                    Notifications
                  </TabsTrigger>
                </TabsList>
              </CardContent>
            </Card>

            {/* Farmers Tab */}
            <TabsContent value="farmers" className="mt-2">
              <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                <Card className="xl:col-span-3">
                  <CardHeader>
                    <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Farmer Management</CardTitle>
                    <CardDescription>Assign and monitor farmer activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Tasks</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-farmfilo-lightGreen flex items-center justify-center text-farmfilo-primary mr-3">RK</div>
                                <div>
                                  <p className="font-medium">Rahim Khan</p>
                                  <p className="text-xs text-gray-500">ID: F1001</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                                <span>North Field</span>
                              </div>
                            </td>
                            <td className="px-6 py-4">Fertilizer Application</td>
                            <td className="px-6 py-4">
                              <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Active</span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline" className="h-7 px-2 text-xs">Message</Button>
                                <Button size="sm" className="h-7 px-2 text-xs bg-farmfilo-primary">Assign Task</Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-farmfilo-lightGreen flex items-center justify-center text-farmfilo-primary mr-3">AH</div>
                                <div>
                                  <p className="font-medium">Anwar Hussein</p>
                                  <p className="text-xs text-gray-500">ID: F1002</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                                <span>East Sector</span>
                              </div>
                            </td>
                            <td className="px-6 py-4">Irrigation</td>
                            <td className="px-6 py-4">
                              <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Active</span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline" className="h-7 px-2 text-xs">Message</Button>
                                <Button size="sm" className="h-7 px-2 text-xs bg-farmfilo-primary">Assign Task</Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-farmfilo-lightGreen flex items-center justify-center text-farmfilo-primary mr-3">FB</div>
                                <div>
                                  <p className="font-medium">Fatima Begum</p>
                                  <p className="text-xs text-gray-500">ID: F1003</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                                <span>South Plot</span>
                              </div>
                            </td>
                            <td className="px-6 py-4">Seedling Plantation</td>
                            <td className="px-6 py-4">
                              <span className="px-2 py-1 rounded-full text-xs bg-amber-100 text-amber-800">On break</span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline" className="h-7 px-2 text-xs">Message</Button>
                                <Button size="sm" className="h-7 px-2 text-xs bg-farmfilo-primary">Assign Task</Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-farmfilo-lightGreen flex items-center justify-center text-farmfilo-primary mr-3">MA</div>
                                <div>
                                  <p className="font-medium">Mohammad Ali</p>
                                  <p className="text-xs text-gray-500">ID: F1004</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                                <span>West Zone</span>
                              </div>
                            </td>
                            <td className="px-6 py-4">Harvesting</td>
                            <td className="px-6 py-4">
                              <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Active</span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline" className="h-7 px-2 text-xs">Message</Button>
                                <Button size="sm" className="h-7 px-2 text-xs bg-farmfilo-primary">Assign Task</Button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4">
                      <Button size="sm" variant="outline" className="mr-2">Previous</Button>
                      <Button size="sm" variant="outline">Next</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-montserrat text-farmfilo-darkGreen">Assign Tasks</CardTitle>
                    <CardDescription>Create and assign new tasks to farmers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Task Type</label>
                        <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary">
                          <option value="">Select a task</option>
                          <option value="irrigation">Irrigation</option>
                          <option value="fertilization">Fertilizer Application</option>
                          <option value="pestControl">Pest Control</option>
                          <option value="harvesting">Harvesting</option>
                          <option value="planting">Planting</option>
                          <option value="soilPrep">Soil Preparation</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Assign To</label>
                        <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary">
                          <option value="">Select a farmer</option>
                          <option value="f1001">Rahim Khan (F1001)</option>
                          <option value="f1002">Anwar Hussein (F1002)</option>
                          <option value="f1003">Fatima Begum (F1003)</option>
                          <option value="f1004">Mohammad Ali (F1004)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary">
                          <option value="">Select a location</option>
                          <option value="north">North Field</option>
                          <option value="east">East Sector</option>
                          <option value="south">South Plot</option>
                          <option value="west">West Zone</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                        <input 
                          type="date" 
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                        <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary">
                          <option value="">Select priority</option>
                          <option value="high">High</option>
                          <option value="medium">Medium</option>
                          <option value="low">Low</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Instructions</label>
                        <textarea 
                          rows={3}
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary"
                          placeholder="Provide detailed instructions..."
                        ></textarea>
                      </div>
                      <Button className="w-full bg-farmfilo-primary text-white">Assign Task</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Farm Map Tab */}
            <TabsContent value="map">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Farm Map</CardTitle>
                  <CardDescription>View farm locations and active operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[60vh] bg-gray-200 rounded-lg relative">
                    {/* This would be an interactive map in a real implementation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-500">Interactive farm map would be displayed here</p>
                    </div>
                    
                    {/* Sample farmer location indicators */}
                    <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-red-500 rounded-full border-2 border-white shadow-md flex items-center justify-center text-white text-sm font-bold">RK</div>
                    
                    <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-blue-500 rounded-full border-2 border-white shadow-md flex items-center justify-center text-white text-sm font-bold">AH</div>
                    
                    <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-green-500 rounded-full border-2 border-white shadow-md flex items-center justify-center text-white text-sm font-bold">FB</div>
                    
                    <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-purple-500 rounded-full border-2 border-white shadow-md flex items-center justify-center text-white text-sm font-bold">MA</div>
                    
                    {/* Map controls */}
                    <div className="absolute top-4 right-4 bg-white rounded-md shadow-md p-2">
                      <div className="space-y-2">
                        <button className="w-8 h-8 bg-farmfilo-primary text-white rounded flex items-center justify-center">+</button>
                        <button className="w-8 h-8 bg-gray-200 text-gray-700 rounded flex items-center justify-center">-</button>
                      </div>
                    </div>
                    
                    {/* Map legend */}
                    <div className="absolute bottom-4 left-4 bg-white rounded-md shadow-md p-3">
                      <p className="text-sm font-medium mb-2">Map Legend</p>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                          <span className="text-xs">Rice Field</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                          <span className="text-xs">Wheat Field</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-xs">Vegetable Field</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
                          <span className="text-xs">Fruit Orchard</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                    <div className="bg-white rounded-lg border p-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white mr-3">
                          <Tractor className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">North Field</h4>
                          <p className="text-sm text-gray-500">Rice Cultivation</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-xs text-gray-500">Active farmers: 2</p>
                        <p className="text-xs text-gray-500">Current task: Fertilization</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg border p-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                          <Tractor className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">East Sector</h4>
                          <p className="text-sm text-gray-500">Wheat Cultivation</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-xs text-gray-500">Active farmers: 1</p>
                        <p className="text-xs text-gray-500">Current task: Irrigation</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg border p-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">
                          <Tractor className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">South Plot</h4>
                          <p className="text-sm text-gray-500">Vegetable Cultivation</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-xs text-gray-500">Active farmers: 1</p>
                        <p className="text-xs text-gray-500">Current task: Planting</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg border p-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white mr-3">
                          <Tractor className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">West Zone</h4>
                          <p className="text-sm text-gray-500">Fruit Orchard</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-xs text-gray-500">Active farmers: 1</p>
                        <p className="text-xs text-gray-500">Current task: Harvesting</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Notifications</CardTitle>
                    <CardDescription>Manage and send notifications to farmers</CardDescription>
                  </div>
                  <Button size="sm" className="bg-farmfilo-primary">Send New</Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-3">Send Notification</h3>
                      <div className="space-y-4 border rounded-lg p-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Recipient</label>
                          <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary">
                            <option value="">Select recipient</option>
                            <option value="all">All Farmers</option>
                            <option value="north">North Field Team</option>
                            <option value="f1001">Rahim Khan (F1001)</option>
                            <option value="f1002">Anwar Hussein (F1002)</option>
                            <option value="f1003">Fatima Begum (F1003)</option>
                            <option value="f1004">Mohammad Ali (F1004)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Notification Type</label>
                          <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary">
                            <option value="">Select type</option>
                            <option value="task">Task Assignment</option>
                            <option value="alert">Weather Alert</option>
                            <option value="reminder">Task Reminder</option>
                            <option value="info">General Information</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                          <textarea 
                            rows={3}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary"
                            placeholder="Type your notification message..."
                          ></textarea>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                          <div className="flex items-center space-x-4">
                            <label className="flex items-center">
                              <input type="radio" name="priority" className="mr-2" />
                              <span>Low</span>
                            </label>
                            <label className="flex items-center">
                              <input type="radio" name="priority" className="mr-2" checked />
                              <span>Medium</span>
                            </label>
                            <label className="flex items-center">
                              <input type="radio" name="priority" className="mr-2" />
                              <span>High</span>
                            </label>
                          </div>
                        </div>
                        <Button className="w-full bg-farmfilo-primary text-white">Send Notification</Button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-3">Recent Notifications</h3>
                      <div className="space-y-3">
                        <div className="border rounded-lg p-4 bg-blue-50/50">
                          <div className="flex justify-between items-start">
                            <h4 className="font-medium">Task Assignment: Irrigation</h4>
                            <span className="text-xs text-gray-500">10 min ago</span>
                          </div>
                          <p className="text-sm mt-1">Please complete irrigation for the East Sector wheat fields by tomorrow evening.</p>
                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-farmfilo-lightGreen flex items-center justify-center text-farmfilo-primary text-xs mr-2">AH</div>
                              <span className="text-xs text-gray-500">Sent to: Anwar Hussein</span>
                            </div>
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Delivered</span>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <h4 className="font-medium">Weather Alert: Heavy Rain</h4>
                            <span className="text-xs text-gray-500">1 hour ago</span>
                          </div>
                          <p className="text-sm mt-1">Expected heavy rainfall tomorrow. Please secure all equipment and prepare drainage systems.</p>
                          <div className="mt-2 flex items-center justify-between">
                            <span className="text-xs text-gray-500">Sent to: All Farmers</span>
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Delivered</span>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <h4 className="font-medium">Task Reminder: Fertilizer Application</h4>
                            <span className="text-xs text-gray-500">3 hours ago</span>
                          </div>
                          <p className="text-sm mt-1">Reminder to complete the fertilizer application in North Field by end of today.</p>
                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-farmfilo-lightGreen flex items-center justify-center text-farmfilo-primary text-xs mr-2">RK</div>
                              <span className="text-xs text-gray-500">Sent to: Rahim Khan</span>
                            </div>
                            <span className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full">Pending</span>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <h4 className="font-medium">General Info: New Crop Calendar</h4>
                            <span className="text-xs text-gray-500">Yesterday</span>
                          </div>
                          <p className="text-sm mt-1">The new season crop calendar is now available. Please check the farmer portal for details.</p>
                          <div className="mt-2 flex items-center justify-between">
                            <span className="text-xs text-gray-500">Sent to: All Farmers</span>
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Delivered</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <Button variant="outline" size="sm">Load More</Button>
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

export default FieldSupervisor;
