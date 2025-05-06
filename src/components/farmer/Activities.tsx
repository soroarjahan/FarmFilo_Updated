
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Plus } from 'lucide-react';
import { format } from 'date-fns';

interface Activity {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'planting' | 'harvesting' | 'maintenance' | 'other';
  status: 'upcoming' | 'completed' | 'in-progress' | 'cancelled';
  assignedTo?: string[];
}

const mockActivities: Activity[] = [
  {
    id: '1',
    title: 'Rice Field Planting',
    description: 'Plant new rice crops in the north field',
    date: '2025-03-15',
    type: 'planting',
    status: 'completed'
  },
  {
    id: '2',
    title: 'Wheat Irrigation',
    description: 'Irrigate the wheat field',
    date: '2025-05-08',
    type: 'maintenance',
    status: 'in-progress',
    assignedTo: ['John', 'Mary']
  },
  {
    id: '3',
    title: 'Vegetable Harvest',
    description: 'Harvest ready vegetables from the south field',
    date: '2025-05-30',
    type: 'harvesting',
    status: 'upcoming',
    assignedTo: ['Alex']
  },
  {
    id: '4',
    title: 'Corn Field Preparation',
    description: 'Prepare west field for corn planting',
    date: '2025-05-15',
    type: 'other',
    status: 'upcoming'
  }
];

const Activities = () => {
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM d, yyyy');
    } catch (error) {
      return 'Invalid date';
    }
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-500';
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-yellow-500';
      case 'cancelled':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'planting':
        return '🌱';
      case 'harvesting':
        return '🌾';
      case 'maintenance':
        return '🔧';
      default:
        return '📝';
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-farmfilo-darkGreen">Farming Activities</h2>
        <Button className="bg-farmfilo-primary hover:bg-farmfilo-darkGreen">
          <Plus className="mr-2 h-4 w-4" />
          Add Activity
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-farmfilo-darkGreen">Upcoming Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockActivities.filter(a => a.status === 'upcoming').map((activity) => (
                <div key={activity.id} className="flex items-start p-4 border rounded-lg">
                  <div className="text-2xl mr-4">{getTypeIcon(activity.type)}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{activity.title}</h3>
                        <p className="text-sm text-gray-500">{activity.description}</p>
                      </div>
                      <Badge className={getStatusColor(activity.status)}>
                        {activity.status.replace('-', ' ')}
                      </Badge>
                    </div>
                    <div className="mt-2 flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(activity.date)}
                      
                      {activity.assignedTo && activity.assignedTo.length > 0 && (
                        <div className="ml-4 flex items-center">
                          <span className="text-gray-500 mr-2">Assigned to:</span>
                          <div className="flex">
                            {activity.assignedTo.map((person, i) => (
                              <span key={i} className="mr-1">
                                {person}{i < activity.assignedTo!.length - 1 ? ',' : ''}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-farmfilo-darkGreen">In-Progress Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockActivities.filter(a => a.status === 'in-progress').map((activity) => (
                <div key={activity.id} className="flex items-start p-4 border rounded-lg">
                  <div className="text-2xl mr-4">{getTypeIcon(activity.type)}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{activity.title}</h3>
                        <p className="text-sm text-gray-500">{activity.description}</p>
                      </div>
                      <Badge className={getStatusColor(activity.status)}>
                        {activity.status.replace('-', ' ')}
                      </Badge>
                    </div>
                    <div className="mt-2 flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(activity.date)}
                      
                      {activity.assignedTo && activity.assignedTo.length > 0 && (
                        <div className="ml-4 flex items-center">
                          <span className="text-gray-500 mr-2">Assigned to:</span>
                          <div className="flex">
                            {activity.assignedTo.map((person, i) => (
                              <span key={i} className="mr-1">
                                {person}{i < activity.assignedTo!.length - 1 ? ',' : ''}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-farmfilo-darkGreen">Recent Completed Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockActivities.filter(a => a.status === 'completed').map((activity) => (
              <div key={activity.id} className="flex items-start p-4 border rounded-lg">
                <div className="text-2xl mr-4">{getTypeIcon(activity.type)}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{activity.title}</h3>
                      <p className="text-sm text-gray-500">{activity.description}</p>
                    </div>
                    <Badge className={getStatusColor(activity.status)}>
                      {activity.status.replace('-', ' ')}
                    </Badge>
                  </div>
                  <div className="mt-2 flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(activity.date)}
                    
                    {activity.assignedTo && activity.assignedTo.length > 0 && (
                      <div className="ml-4 flex items-center">
                        <span className="text-gray-500 mr-2">Assigned to:</span>
                        <div className="flex">
                          {activity.assignedTo.map((person, i) => (
                            <span key={i} className="mr-1">
                              {person}{i < activity.assignedTo!.length - 1 ? ',' : ''}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Activities;
