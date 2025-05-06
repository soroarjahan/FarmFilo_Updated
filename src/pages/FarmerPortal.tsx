import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { LoadingSpinner } from '@/components/auth/LoadingSpinner';
import MyCrops from '@/components/farmer/MyCrops';
import YieldData from '@/components/farmer/YieldData';
import Activities from '@/components/farmer/Activities';
import ImageAnalysis from '@/components/farmer/ImageAnalysis';
import Layout from '@/components/layout/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/sonner';
import {
  AlertCircle,
  Info,
  BarChart3,
  Calendar,
  HelpCircle,
  Leaf,
  Camera,
  Tractor,
  ListChecks,
  TrendingUp
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const FarmerPortal = () => {
  const { user, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const [showWelcome, setShowWelcome] = useState(true);
  const [videoWatched, setVideoWatched] = useState(false);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const handleDismissWelcome = () => {
    setShowWelcome(false);
    toast.success("Welcome dismissed! You can access help anytime from the help icon.");
  };

  const handleWatchVideo = () => {
    toast.success("Tutorial video completed!");
    setVideoWatched(true);
  };
  
  const displayHelp = (section: string) => {
    const helpMessages: {[key: string]: string} = {
      crops: "Manage your crops, track growth progress, and plan harvests.",
      analytics: "View yield data analytics and performance metrics for your farm.",
      activities: "Manage farm activities, schedules, and assign tasks.",
      imaging: "Upload and analyze field images to detect potential issues."
    };
    
    toast.info(helpMessages[section] || "Need help? Contact our support team.");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-farmfilo-darkGreen">Farmer Portal</h1>
            <p className="text-gray-600">Welcome back, {user?.name || 'Farmer'}</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-500 hover:text-farmfilo-primary tooltip"
              onClick={() => displayHelp('portal')}
            >
              <HelpCircle className="h-5 w-5" />
              <span className="tooltiptext">Get Help</span>
            </Button>
            <Button 
              className="bg-farmfilo-primary hover:bg-farmfilo-darkGreen"
              onClick={() => toast.info("New features available! Check out the Image Analysis tool.")}
            >
              What's New
            </Button>
          </div>
        </div>
        
        {/* Welcome message and onboarding */}
        {showWelcome && (
          <Alert className="mb-6 bg-farmfilo-lightGreen border border-farmfilo-primary">
            <AlertCircle className="h-4 w-4 text-farmfilo-primary" />
            <AlertTitle className="text-farmfilo-darkGreen">Welcome to your Farmer Portal</AlertTitle>
            <AlertDescription className="text-gray-600">
              <p className="mb-2">
                This is your central dashboard to manage crops, view analytics, schedule activities, and analyze field images. 
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="bg-farmfilo-primary text-white"
                  onClick={handleWatchVideo}
                >
                  {videoWatched ? "Watched Tutorial" : "Watch Tutorial (2 min)"}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleDismissWelcome}
                >
                  Dismiss
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        )}
        
        {/* Quick stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between py-2">
              <CardTitle className="text-sm font-medium">Active Crops</CardTitle>
              <Leaf className="h-4 w-4 text-farmfilo-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">2 ready for harvest</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between py-2">
              <CardTitle className="text-sm font-medium">Upcoming Activities</CardTitle>
              <Calendar className="h-4 w-4 text-farmfilo-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Next: Field Irrigation</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between py-2">
              <CardTitle className="text-sm font-medium">Monthly Yield</CardTitle>
              <BarChart3 className="h-4 w-4 text-farmfilo-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">320 kg</div>
              <p className="text-xs text-green-500">↑ 12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between py-2">
              <CardTitle className="text-sm font-medium">Field Health</CardTitle>
              <TrendingUp className="h-4 w-4 text-farmfilo-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-green-500">Good overall condition</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Main tabs interface */}
        <Tabs 
          defaultValue="overview" 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="space-y-6"
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <TabsTrigger value="overview" className="flex items-center">
              <Leaf className="w-4 h-4 mr-2" />
              <span className="hidden md:inline">Overview</span>
              <span className="md:hidden">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="crops" className="flex items-center">
              <Tractor className="w-4 h-4 mr-2" />
              <span className="hidden md:inline">My Crops</span>
              <span className="md:hidden">Crops</span>
            </TabsTrigger>
            <TabsTrigger value="activities" className="flex items-center">
              <ListChecks className="w-4 h-4 mr-2" />
              <span className="hidden md:inline">Activities</span>
              <span className="md:hidden">Tasks</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center">
              <BarChart3 className="w-4 h-4 mr-2" />
              <span className="hidden md:inline">Analytics</span>
              <span className="md:hidden">Stats</span>
            </TabsTrigger>
            <TabsTrigger value="imaging" className="flex items-center">
              <Camera className="w-4 h-4 mr-2" />
              <span className="hidden md:inline">Field Imaging</span>
              <span className="md:hidden">Imaging</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-farmfilo-darkGreen">Farm Overview</CardTitle>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-gray-500 hover:text-farmfilo-primary tooltip"
                      onClick={() => displayHelp('overview')}
                    >
                      <HelpCircle className="h-4 w-4" />
                      <span className="tooltiptext">Get help with farm overview</span>
                    </Button>
                  </div>
                  <CardDescription>
                    Your farm's current status and upcoming activities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg mb-3">Next 7 Days at a Glance</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-farmfilo-lightGreen rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">Field Maintenance</h4>
                            <Badge className="bg-yellow-500">Tomorrow</Badge>
                          </div>
                          <p className="text-sm text-gray-600">Scheduled irrigation for all crop fields</p>
                        </div>
                        <div className="p-4 bg-farmfilo-lightGreen rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">Harvest Ready</h4>
                            <Badge className="bg-green-500">In 3 days</Badge>
                          </div>
                          <p className="text-sm text-gray-600">Vegetables in South Field ready for harvest</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-lg mb-3">Crop Health Summary</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Rice</span>
                            <span className="text-green-500 text-sm">85% Health</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 overflow-hidden">
                            <div className="bg-green-500 h-2.5 rounded-full" style={{width: "85%"}}></div>
                          </div>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Wheat</span>
                            <span className="text-green-500 text-sm">92% Health</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 overflow-hidden">
                            <div className="bg-green-500 h-2.5 rounded-full" style={{width: "92%"}}></div>
                          </div>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Vegetables</span>
                            <span className="text-yellow-500 text-sm">78% Health</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 overflow-hidden">
                            <div className="bg-yellow-500 h-2.5 rounded-full" style={{width: "78%"}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle className="text-farmfilo-darkGreen">Weather Forecast</CardTitle>
                  <CardDescription>
                    5-day forecast for your farm location
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Today */}
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Today</span>
                        <div className="flex items-center">
                          <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                          </svg>
                          <span className="font-bold ml-1">32°C</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">Sunny, ideal for field work</div>
                    </div>
                    
                    {/* Tomorrow */}
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Tomorrow</span>
                        <div className="flex items-center">
                          <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                          </svg>
                          <span className="font-bold ml-1">28°C</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">Partly cloudy, 30% chance of rain</div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-farmfilo-primary text-farmfilo-primary hover:bg-farmfilo-primary hover:text-white"
                      onClick={() => toast.info("Detailed weather forecast will be available in the next update!")}
                    >
                      View Full Forecast
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-farmfilo-darkGreen">Recent Market Prices</CardTitle>
                  <Button variant="ghost" className="text-farmfilo-primary">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto mobile-scroll">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 px-4 font-medium">Crop</th>
                        <th className="text-center py-2 px-4 font-medium">Current Price</th>
                        <th className="text-center py-2 px-4 font-medium">Last Week</th>
                        <th className="text-center py-2 px-4 font-medium">Change</th>
                        <th className="text-right py-2 px-4 font-medium">Forecast</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">Rice (per kg)</td>
                        <td className="py-3 px-4 text-center font-medium">৳65</td>
                        <td className="py-3 px-4 text-center">৳62</td>
                        <td className="py-3 px-4 text-center text-green-500">+4.8%</td>
                        <td className="py-3 px-4 text-right"><span className="text-green-500">↗</span> Rising</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">Vegetables (per kg)</td>
                        <td className="py-3 px-4 text-center font-medium">৳45</td>
                        <td className="py-3 px-4 text-center">৳48</td>
                        <td className="py-3 px-4 text-center text-red-500">-6.3%</td>
                        <td className="py-3 px-4 text-right"><span className="text-red-500">↘</span> Falling</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">Wheat (per kg)</td>
                        <td className="py-3 px-4 text-center font-medium">৳38</td>
                        <td className="py-3 px-4 text-center">৳38</td>
                        <td className="py-3 px-4 text-center text-gray-500">0%</td>
                        <td className="py-3 px-4 text-right"><span className="text-blue-500">→</span> Stable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="crops" className="relative">
            <div className="absolute right-0 top-0 tooltip">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-500 hover:text-farmfilo-primary"
                onClick={() => displayHelp('crops')}
              >
                <HelpCircle className="h-5 w-5" />
                <span className="tooltiptext">Get help with crop management</span>
              </Button>
            </div>
            <MyCrops />
          </TabsContent>
          
          <TabsContent value="activities" className="relative">
            <div className="absolute right-0 top-0 tooltip">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-500 hover:text-farmfilo-primary"
                onClick={() => displayHelp('activities')}
              >
                <HelpCircle className="h-5 w-5" />
                <span className="tooltiptext">Get help with activities management</span>
              </Button>
            </div>
            <Activities />
          </TabsContent>
          
          <TabsContent value="analytics" className="relative">
            <div className="absolute right-0 top-0 tooltip">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-500 hover:text-farmfilo-primary"
                onClick={() => displayHelp('analytics')}
              >
                <HelpCircle className="h-5 w-5" />
                <span className="tooltiptext">Get help with analytics</span>
              </Button>
            </div>
            <YieldData />
          </TabsContent>
          
          <TabsContent value="imaging" className="relative">
            <div className="absolute right-0 top-0 tooltip">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-500 hover:text-farmfilo-primary"
                onClick={() => displayHelp('imaging')}
              >
                <HelpCircle className="h-5 w-5" />
                <span className="tooltiptext">Get help with field imaging</span>
              </Button>
            </div>
            <ImageAnalysis />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default FarmerPortal;
