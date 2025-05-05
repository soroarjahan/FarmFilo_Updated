
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  AlertTriangle, 
  BarChart, 
  ChartPie, 
  CloudSun, 
  Gauge, 
  Leaf, 
  MapPin, 
  Phone, 
  Plant, 
  Rainfall, 
  Sun, 
  Tractor, 
  TrendingDown, 
  TrendingUp, 
  Users 
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart as RechartsBarChart, Bar, Tooltip, Legend, LineChart, Line } from 'recharts';

// Sample data for charts
const yieldData = [
  { name: 'Jan', rice: 400, wheat: 240, sugarcane: 240 },
  { name: 'Feb', rice: 300, wheat: 139, sugarcane: 221 },
  { name: 'Mar', rice: 200, wheat: 980, sugarcane: 229 },
  { name: 'Apr', rice: 270, wheat: 390, sugarcane: 200 },
  { name: 'May', rice: 180, wheat: 480, sugarcane: 218 },
  { name: 'Jun', rice: 230, wheat: 380, sugarcane: 250 },
  { name: 'Jul', rice: 340, wheat: 430, sugarcane: 210 },
];

const weatherData = [
  { name: 'Week 1', temperature: 28, rainfall: 12 },
  { name: 'Week 2', temperature: 31, rainfall: 8 },
  { name: 'Week 3', temperature: 27, rainfall: 16 },
  { name: 'Week 4', temperature: 29, rainfall: 10 },
];

const cropHealthData = [
  { name: 'Rice', value: 87 },
  { name: 'Wheat', value: 75 },
  { name: 'Corn', value: 92 },
  { name: 'Sugarcane', value: 63 },
];

const farmerActivities = [
  { id: 1, farmer: 'Rahim Khan', activity: 'Applied organic fertilizer', time: '2 hours ago', location: 'North Field' },
  { id: 2, farmer: 'Anwar Hussein', activity: 'Irrigation completed', time: '5 hours ago', location: 'East Sector' },
  { id: 3, farmer: 'Fatima Begum', activity: 'Planted new seedlings', time: '1 day ago', location: 'South Plot' },
  { id: 4, farmer: 'Mohammad Ali', activity: 'Harvested rice crop', time: '2 days ago', location: 'West Zone' },
];

const notifications = [
  { id: 1, type: 'warning', message: 'Low soil moisture detected in East Sector', time: 'Just now' },
  { id: 2, type: 'alert', message: 'Weather alert: Heavy rainfall expected tomorrow', time: '30 minutes ago' },
  { id: 3, type: 'info', message: 'New crop guidance available for wheat', time: '2 hours ago' },
  { id: 4, type: 'success', message: 'Harvesting target achieved for Rice fields', time: '1 day ago' },
];

const Dashboard = () => {
  const isMobile = useIsMobile();

  return (
    <Layout>
      <div className="relative">
        {/* Hero section with full-width agricultural image */}
        <div className="relative h-72 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80" 
            alt="Aerial view of farmland"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
            <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-2">Smart Farming Dashboard</h1>
              <p className="text-white/90 font-montserrat">Monitor your farm performance and environmental conditions</p>
            </div>
          </div>
        </div>

        {/* Main dashboard content */}
        <div className="container mx-auto px-4 -mt-10 pb-16">
          <Tabs defaultValue="overview" className="w-full">
            <Card className="mb-6 bg-white/95 backdrop-blur shadow-lg">
              <CardContent className="p-0">
                <TabsList className="w-full grid grid-cols-2 md:grid-cols-5 p-0 h-auto">
                  <TabsTrigger 
                    value="overview" 
                    className="data-[state=active]:bg-farmfilo-primary data-[state=active]:text-white rounded-none py-4 font-montserrat"
                  >
                    <BarChart className="h-4 w-4 mr-2" />
                    Overview
                  </TabsTrigger>
                  <TabsTrigger 
                    value="crops" 
                    className="data-[state=active]:bg-farmfilo-primary data-[state=active]:text-white rounded-none py-4 font-montserrat"
                  >
                    <Plant className="h-4 w-4 mr-2" />
                    Crops
                  </TabsTrigger>
                  <TabsTrigger 
                    value="farmers" 
                    className="data-[state=active]:bg-farmfilo-primary data-[state=active]:text-white rounded-none py-4 font-montserrat"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Farmers
                  </TabsTrigger>
                  <TabsTrigger 
                    value="weather" 
                    className="data-[state=active]:bg-farmfilo-primary data-[state=active]:text-white rounded-none py-4 font-montserrat"
                  >
                    <CloudSun className="h-4 w-4 mr-2" />
                    Weather
                  </TabsTrigger>
                  <TabsTrigger 
                    value="guidance" 
                    className="data-[state=active]:bg-farmfilo-primary data-[state=active]:text-white rounded-none py-4 font-montserrat"
                  >
                    <Leaf className="h-4 w-4 mr-2" />
                    Guidance
                  </TabsTrigger>
                </TabsList>
              </CardContent>
            </Card>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6 mt-2">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500 flex items-center">
                      <Plant className="h-4 w-4 mr-2 text-farmfilo-primary" />
                      Active Crops
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-farmfilo-darkGreen">8</div>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +2 since last month
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500 flex items-center">
                      <Leaf className="h-4 w-4 mr-2 text-farmfilo-primary" />
                      Crop Health
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-farmfilo-darkGreen">87%</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div className="bg-farmfilo-primary h-2.5 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500 flex items-center">
                      <Rainfall className="h-4 w-4 mr-2 text-farmfilo-primary" />
                      Soil Moisture
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-farmfilo-darkGreen">68%</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div className="bg-farmfilo-primary h-2.5 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500 flex items-center">
                      <ChartPie className="h-4 w-4 mr-2 text-farmfilo-primary" />
                      Yield Forecast
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-farmfilo-darkGreen">92%</div>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +5% from previous harvest
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="col-span-1 lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-lg font-montserrat text-farmfilo-darkGreen">Monthly Yield Projection</CardTitle>
                    <CardDescription>Estimated crop yields for the next 6 months</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart
                        data={yieldData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="rice" fill="#2E7D32" />
                        <Bar dataKey="wheat" fill="#CDDC39" />
                        <Bar dataKey="sugarcane" fill="#8D6E63" />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-montserrat text-farmfilo-darkGreen">Weather Forecast</CardTitle>
                    <CardDescription>Next 7 days prediction</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CloudSun className="h-8 w-8 text-farmfilo-primary mr-3" />
                        <div>
                          <p className="font-medium">Today</p>
                          <p className="text-sm text-gray-500">Partly cloudy</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">32°C</p>
                        <p className="text-sm text-gray-500">24°C</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Sun className="h-8 w-8 text-farmfilo-primary mr-3" />
                        <div>
                          <p className="font-medium">Tomorrow</p>
                          <p className="text-sm text-gray-500">Sunny</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">34°C</p>
                        <p className="text-sm text-gray-500">25°C</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Rainfall className="h-8 w-8 text-farmfilo-primary mr-3" />
                        <div>
                          <p className="font-medium">Wednesday</p>
                          <p className="text-sm text-gray-500">Light rain</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">30°C</p>
                        <p className="text-sm text-gray-500">23°C</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Farmer Activities & Notifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div>
                      <CardTitle className="text-lg font-montserrat text-farmfilo-darkGreen">Recent Activities</CardTitle>
                      <CardDescription>Latest farmer activities</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" className="text-xs">View All</Button>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {farmerActivities.map(activity => (
                        <li key={activity.id} className="flex items-start border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                          <div className="bg-farmfilo-lightGreen rounded-full p-2 mr-3">
                            <Users className="h-4 w-4 text-farmfilo-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-sm">{activity.farmer}</p>
                            <p className="text-sm text-gray-500">{activity.activity}</p>
                            <div className="flex items-center mt-1 text-xs text-gray-400">
                              <span>{activity.time}</span>
                              <span className="mx-1">•</span>
                              <MapPin className="h-3 w-3 mr-1" />
                              <span>{activity.location}</span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div>
                      <CardTitle className="text-lg font-montserrat text-farmfilo-darkGreen">Notifications</CardTitle>
                      <CardDescription>Recent alerts and notifications</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" className="text-xs">Mark All Read</Button>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {notifications.map(notification => (
                        <li key={notification.id} className="flex items-start border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                          <div className={`rounded-full p-2 mr-3 ${
                            notification.type === 'warning' ? 'bg-amber-100' : 
                            notification.type === 'alert' ? 'bg-red-100' :
                            notification.type === 'success' ? 'bg-green-100' : 'bg-blue-100'
                          }`}>
                            {notification.type === 'warning' ? (
                              <AlertTriangle className="h-4 w-4 text-amber-500" />
                            ) : notification.type === 'alert' ? (
                              <AlertTriangle className="h-4 w-4 text-red-500" />
                            ) : notification.type === 'success' ? (
                              <Leaf className="h-4 w-4 text-green-500" />
                            ) : (
                              <Leaf className="h-4 w-4 text-blue-500" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm">{notification.message}</p>
                            <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Task Schedule and Resource Utilization */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-montserrat text-farmfilo-darkGreen">Task Schedule</CardTitle>
                    <CardDescription>Upcoming farming activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-3 h-3 rounded-full bg-farmfilo-primary mt-1.5 mr-3"></div>
                        <div>
                          <p className="font-medium">Apply organic fertilizer to rice field</p>
                          <p className="text-sm text-gray-500">Tomorrow, 7:00 AM</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-3 h-3 rounded-full bg-farmfilo-secondary mt-1.5 mr-3"></div>
                        <div>
                          <p className="font-medium">Inspect tomato crops for pests</p>
                          <p className="text-sm text-gray-500">Wednesday, 9:30 AM</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-3 h-3 rounded-full bg-farmfilo-accent mt-1.5 mr-3"></div>
                        <div>
                          <p className="font-medium">Harvest lettuce crop</p>
                          <p className="text-sm text-gray-500">Friday, 6:00 AM</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-montserrat text-farmfilo-darkGreen">Resource Utilization</CardTitle>
                    <CardDescription>Current farm resource usage</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Water Usage</span>
                        <span className="text-sm font-medium">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-farmfilo-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Fertilizer Stock</span>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-farmfilo-secondary h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Seed Inventory</span>
                        <span className="text-sm font-medium">60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-farmfilo-accent h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Equipment Usage</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-farmfilo-brown h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Crops Tab */}
            <TabsContent value="crops">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <Card className="xl:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Crop Management</CardTitle>
                    <CardDescription>Monitor and manage your current crops</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {cropHealthData.map((crop, index) => (
                        <div key={index} className="border rounded-lg p-4 flex items-center">
                          <img 
                            src={`https://images.unsplash.com/photo-1457530378978-8bac673b8062?auto=format&fit=crop&w=120&h=120&q=80`}
                            alt={crop.name} 
                            className="w-20 h-20 rounded-md object-cover mr-4"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold">{crop.name}</h3>
                            <div className="flex items-center mt-2">
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                <div 
                                  className={`h-2.5 rounded-full ${
                                    crop.value > 80 ? 'bg-green-500' : 
                                    crop.value > 60 ? 'bg-yellow-500' : 'bg-red-500'
                                  }`} 
                                  style={{ width: `${crop.value}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium">{crop.value}%</span>
                            </div>
                            <div className="mt-2 flex justify-between">
                              <span className="text-xs text-gray-500">Health</span>
                              <Button size="sm" className="bg-farmfilo-primary text-white text-xs h-7 px-3">Details</Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="text-lg font-medium mb-4">Growth Analysis</h3>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={yieldData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="rice" stroke="#2E7D32" />
                          <Line type="monotone" dataKey="wheat" stroke="#CDDC39" />
                          <Line type="monotone" dataKey="sugarcane" stroke="#8D6E63" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Add New Crop</CardTitle>
                    <CardDescription>Register a new crop to your farm</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="cropType" className="block text-sm font-medium text-gray-700 mb-1">Crop Type</label>
                        <select id="cropType" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary">
                          <option value="">Select a crop</option>
                          <option value="rice">Rice</option>
                          <option value="wheat">Wheat</option>
                          <option value="corn">Corn</option>
                          <option value="sugarcane">Sugarcane</option>
                          <option value="potato">Potato</option>
                          <option value="tomato">Tomato</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="fieldLocation" className="block text-sm font-medium text-gray-700 mb-1">Field Location</label>
                        <input 
                          type="text" 
                          id="fieldLocation" 
                          placeholder="e.g., North Field, Plot 12"
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="plantingDate" className="block text-sm font-medium text-gray-700 mb-1">Planting Date</label>
                        <input 
                          type="date" 
                          id="plantingDate" 
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="expectedHarvest" className="block text-sm font-medium text-gray-700 mb-1">Expected Harvest Date</label>
                        <input 
                          type="date" 
                          id="expectedHarvest" 
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary"
                        />
                      </div>
                      <div className="pt-2">
                        <Button className="w-full bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen">
                          Add Crop
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Farmers Tab */}
            <TabsContent value="farmers">
              <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                <Card className="xl:col-span-3">
                  <CardHeader>
                    <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Farmer Management</CardTitle>
                    <CardDescription>Assign and monitor farmer activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium">Name</th>
                            <th className="text-left py-3 px-4 font-medium">Location</th>
                            <th className="text-left py-3 px-4 font-medium">Current Tasks</th>
                            <th className="text-left py-3 px-4 font-medium">Status</th>
                            <th className="text-left py-3 px-4 font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-farmfilo-lightGreen flex items-center justify-center text-farmfilo-primary mr-3">RK</div>
                                <div>
                                  <p className="font-medium">Rahim Khan</p>
                                  <p className="text-xs text-gray-500">ID: F1001</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                                <span>North Field</span>
                              </div>
                            </td>
                            <td className="py-3 px-4">Fertilizer Application</td>
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Active</span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline" className="h-7 px-2 text-xs">Message</Button>
                                <Button size="sm" className="h-7 px-2 text-xs bg-farmfilo-primary">Assign Task</Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-farmfilo-lightGreen flex items-center justify-center text-farmfilo-primary mr-3">AH</div>
                                <div>
                                  <p className="font-medium">Anwar Hussein</p>
                                  <p className="text-xs text-gray-500">ID: F1002</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                                <span>East Sector</span>
                              </div>
                            </td>
                            <td className="py-3 px-4">Irrigation</td>
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Active</span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline" className="h-7 px-2 text-xs">Message</Button>
                                <Button size="sm" className="h-7 px-2 text-xs bg-farmfilo-primary">Assign Task</Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-farmfilo-lightGreen flex items-center justify-center text-farmfilo-primary mr-3">FB</div>
                                <div>
                                  <p className="font-medium">Fatima Begum</p>
                                  <p className="text-xs text-gray-500">ID: F1003</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                                <span>South Plot</span>
                              </div>
                            </td>
                            <td className="py-3 px-4">Seedling Plantation</td>
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 rounded-full text-xs bg-amber-100 text-amber-800">On break</span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline" className="h-7 px-2 text-xs">Message</Button>
                                <Button size="sm" className="h-7 px-2 text-xs bg-farmfilo-primary">Assign Task</Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-farmfilo-lightGreen flex items-center justify-center text-farmfilo-primary mr-3">MA</div>
                                <div>
                                  <p className="font-medium">Mohammad Ali</p>
                                  <p className="text-xs text-gray-500">ID: F1004</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                                <span>West Zone</span>
                              </div>
                            </td>
                            <td className="py-3 px-4">Harvesting</td>
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Active</span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline" className="h-7 px-2 text-xs">Message</Button>
                                <Button size="sm" className="h-7 px-2 text-xs bg-farmfilo-primary">Assign Task</Button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Assign Tasks</CardTitle>
                    <CardDescription>Create and assign new tasks to farmers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="taskType" className="block text-sm font-medium text-gray-700 mb-1">Task Type</label>
                        <select id="taskType" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary">
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
                        <label htmlFor="assignTo" className="block text-sm font-medium text-gray-700 mb-1">Assign To</label>
                        <select id="assignTo" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary">
                          <option value="">Select a farmer</option>
                          <option value="f1001">Rahim Khan (F1001)</option>
                          <option value="f1002">Anwar Hussein (F1002)</option>
                          <option value="f1003">Fatima Begum (F1003)</option>
                          <option value="f1004">Mohammad Ali (F1004)</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <select id="location" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary">
                          <option value="">Select a location</option>
                          <option value="north">North Field</option>
                          <option value="east">East Sector</option>
                          <option value="south">South Plot</option>
                          <option value="west">West Zone</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="taskDate" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                        <input 
                          type="date" 
                          id="taskDate" 
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="taskInstructions" className="block text-sm font-medium text-gray-700 mb-1">Instructions</label>
                        <textarea 
                          id="taskInstructions" 
                          rows={3}
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary"
                          placeholder="Provide detailed instructions..."
                        ></textarea>
                      </div>
                      <div className="pt-2">
                        <Button className="w-full bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen">
                          Assign Task
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Weather Tab */}
            <TabsContent value="weather">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <Card className="xl:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Weather Analysis</CardTitle>
                    <CardDescription>Detailed 7-day forecast for your farm area</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                          <div 
                            key={i} 
                            className={`text-center p-4 rounded-lg border ${i === 0 ? 'border-farmfilo-primary bg-farmfilo-primary/5' : ''}`}
                          >
                            <p className="font-medium">{day}</p>
                            <div className="my-3">
                              {i === 0 || i === 1 ? (
                                <Sun className="h-8 w-8 mx-auto text-farmfilo-primary" />
                              ) : i === 2 || i === 6 ? (
                                <CloudSun className="h-8 w-8 mx-auto text-farmfilo-primary" />
                              ) : (
                                <Rainfall className="h-8 w-8 mx-auto text-farmfilo-primary" />
                              )}
                            </div>
                            <p className="text-sm font-medium">{30 + i}°C</p>
                            <p className="text-xs text-gray-500">{21 + i}°C</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Temperature & Rainfall Trends</h3>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                          data={weatherData}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis yAxisId="left" />
                          <YAxis yAxisId="right" orientation="right" />
                          <Tooltip />
                          <Legend />
                          <Line 
                            yAxisId="left"
                            type="monotone" 
                            dataKey="temperature" 
                            stroke="#f97316" 
                            activeDot={{ r: 8 }} 
                            name="Temperature (°C)"
                          />
                          <Line 
                            yAxisId="right"
                            type="monotone" 
                            dataKey="rainfall" 
                            stroke="#0ea5e9" 
                            name="Rainfall (mm)"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Weather Alerts</CardTitle>
                    <CardDescription>Stay informed about weather conditions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center mb-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                        <h4 className="font-medium">Heavy Rainfall Alert</h4>
                      </div>
                      <p className="text-sm text-gray-700">Expected rainfall of 25-30mm over the next 48 hours. Consider delaying any planned fertilizer application.</p>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-xs text-gray-500">Issued: May 4, 2025</span>
                        <Button variant="outline" size="sm" className="h-7 text-xs">View Details</Button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Current Conditions</h4>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <CloudSun className="h-10 w-10 text-farmfilo-primary mr-3" />
                            <div>
                              <p className="text-2xl font-bold">32°C</p>
                              <p className="text-sm text-gray-500">Partly cloudy</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">Humidity: 65%</p>
                            <p className="text-sm text-gray-500">Wind: 8 km/h</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-2">Farm-specific Recommendations</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <div className="h-5 w-5 rounded-full bg-farmfilo-lightGreen flex items-center justify-center mr-2 mt-0.5">
                              <Leaf className="h-3 w-3 text-farmfilo-primary" />
                            </div>
                            <span>Ideal conditions for rice transplantation in North Field</span>
                          </li>
                          <li className="flex items-start">
                            <div className="h-5 w-5 rounded-full bg-farmfilo-lightGreen flex items-center justify-center mr-2 mt-0.5">
                              <Leaf className="h-3 w-3 text-farmfilo-primary" />
                            </div>
                            <span>Consider additional irrigation for East Sector crops</span>
                          </li>
                          <li className="flex items-start">
                            <div className="h-5 w-5 rounded-full bg-farmfilo-lightGreen flex items-center justify-center mr-2 mt-0.5">
                              <Leaf className="h-3 w-3 text-farmfilo-primary" />
                            </div>
                            <span>Harvesting conditions optimal for next 3 days</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Guidance Tab */}
            <TabsContent value="guidance">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <Card className="xl:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Crop Calendar</CardTitle>
                    <CardDescription>Season-based guidance for optimal farming</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div>
                        <h3 className="flex items-center text-lg font-semibold mb-3">
                          <Plant className="h-5 w-5 mr-2 text-farmfilo-primary" /> Rice Cultivation
                        </h3>
                        <div className="relative">
                          <div className="absolute top-0 bottom-0 left-8 w-px bg-gray-200"></div>
                          <div className="space-y-6">
                            <div className="flex">
                              <div className="flex-shrink-0 w-16 text-right pr-4 text-sm font-medium">May</div>
                              <div className="h-5 w-5 rounded-full bg-farmfilo-primary flex items-center justify-center z-10 mt-0.5">
                                <div className="h-2 w-2 rounded-full bg-white"></div>
                              </div>
                              <div className="ml-4 bg-white shadow-sm border rounded-lg p-4 flex-1">
                                <h4 className="font-medium">Land Preparation</h4>
                                <p className="text-sm text-gray-600 mt-1">Prepare the land by plowing, puddling, and leveling. Ensure proper drainage system.</p>
                                <Button variant="outline" size="sm" className="mt-2 text-xs">View Guide</Button>
                              </div>
                            </div>
                            <div className="flex">
                              <div className="flex-shrink-0 w-16 text-right pr-4 text-sm font-medium">June</div>
                              <div className="h-5 w-5 rounded-full bg-farmfilo-secondary flex items-center justify-center z-10 mt-0.5">
                                <div className="h-2 w-2 rounded-full bg-white"></div>
                              </div>
                              <div className="ml-4 bg-white shadow-sm border rounded-lg p-4 flex-1">
                                <h4 className="font-medium">Transplantation</h4>
                                <p className="text-sm text-gray-600 mt-1">Transplant rice seedlings in rows with proper spacing. Maintain 2-3cm of standing water.</p>
                                <Button variant="outline" size="sm" className="mt-2 text-xs">View Guide</Button>
                              </div>
                            </div>
                            <div className="flex">
                              <div className="flex-shrink-0 w-16 text-right pr-4 text-sm font-medium">July-Aug</div>
                              <div className="h-5 w-5 rounded-full bg-farmfilo-brown flex items-center justify-center z-10 mt-0.5">
                                <div className="h-2 w-2 rounded-full bg-white"></div>
                              </div>
                              <div className="ml-4 bg-white shadow-sm border rounded-lg p-4 flex-1">
                                <h4 className="font-medium">Crop Management</h4>
                                <p className="text-sm text-gray-600 mt-1">Regular weeding, water management, and fertilizer application. Monitor for pest infestations.</p>
                                <Button variant="outline" size="sm" className="mt-2 text-xs">View Guide</Button>
                              </div>
                            </div>
                            <div className="flex">
                              <div className="flex-shrink-0 w-16 text-right pr-4 text-sm font-medium">Sep-Oct</div>
                              <div className="h-5 w-5 rounded-full bg-farmfilo-accent flex items-center justify-center z-10 mt-0.5">
                                <div className="h-2 w-2 rounded-full bg-white"></div>
                              </div>
                              <div className="ml-4 bg-white shadow-sm border rounded-lg p-4 flex-1">
                                <h4 className="font-medium">Harvesting</h4>
                                <p className="text-sm text-gray-600 mt-1">Harvest when 80-85% of the grains are straw-colored. Ensure proper drying before storage.</p>
                                <Button variant="outline" size="sm" className="mt-2 text-xs">View Guide</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">AI Recommendations</CardTitle>
                    <CardDescription>Personalized suggestions based on your farm data</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4 bg-farmfilo-lightGreen/20">
                        <h4 className="font-medium flex items-center">
                          <Leaf className="h-4 w-4 mr-2 text-farmfilo-primary" />
                          Crop Rotation Suggestion
                        </h4>
                        <p className="text-sm mt-2">Based on your soil analysis and past yields, consider rotating rice with legumes in the North Field to improve nitrogen fixation.</p>
                        <div className="mt-3 flex justify-between items-center">
                          <span className="text-xs text-gray-500">Confidence: 93%</span>
                          <Button size="sm" className="bg-farmfilo-primary text-white text-xs">Apply</Button>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium flex items-center">
                          <Rainfall className="h-4 w-4 mr-2 text-farmfilo-primary" />
                          Irrigation Optimization
                        </h4>
                        <p className="text-sm mt-2">Your water usage for rice fields is 15% above optimal levels. Adjust irrigation schedule to early morning to reduce evaporation loss.</p>
                        <div className="mt-3 flex justify-between items-center">
                          <span className="text-xs text-gray-500">Potential water saving: 20%</span>
                          <Button size="sm" className="bg-farmfilo-primary text-white text-xs">Apply</Button>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium flex items-center">
                          <Plant className="h-4 w-4 mr-2 text-farmfilo-primary" />
                          Pest Prevention Alert
                        </h4>
                        <p className="text-sm mt-2">Increasing humidity levels and temperature patterns indicate high risk of rice blast in the coming week. Consider preventive measures.</p>
                        <div className="mt-3 flex justify-between items-center">
                          <span className="text-xs text-gray-500">Risk level: High</span>
                          <Button size="sm" className="bg-farmfilo-primary text-white text-xs">View Solutions</Button>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium flex items-center">
                          <Tractor className="h-4 w-4 mr-2 text-farmfilo-primary" />
                          Equipment Maintenance
                        </h4>
                        <p className="text-sm mt-2">Your irrigation pump #3 is showing signs of reduced efficiency. Schedule maintenance before the critical irrigation period.</p>
                        <div className="mt-3 flex justify-between items-center">
                          <span className="text-xs text-gray-500">Priority: Medium</span>
                          <Button size="sm" className="bg-farmfilo-primary text-white text-xs">Schedule</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Floating Call Support Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="bg-farmfilo-primary hover:bg-farmfilo-darkGreen text-white rounded-full h-16 w-16 flex items-center justify-center shadow-lg">
          <Phone className="h-6 w-6" />
        </Button>
      </div>
    </Layout>
  );
};

export default Dashboard;

