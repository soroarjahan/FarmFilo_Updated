
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Heart, Reply, Search, Users, BookOpen, Award } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Mock forum data
const forumPosts = [
  {
    id: 1,
    title: "Best organic pest control for rice paddies?",
    content: "I've been struggling with pests in my rice field and want to avoid chemical pesticides. Has anyone tried neem oil or other organic solutions that worked well?",
    author: "Rahul Singh",
    authorAvatar: "RS",
    category: "Pest Control",
    tags: ["organic", "rice", "pesticides"],
    likes: 24,
    replies: 8,
    views: 143,
    createdAt: "3 days ago",
  },
  {
    id: 2,
    title: "Water management during drought season",
    content: "This year's forecast shows less rainfall than usual. I'm looking for advice on water conservation techniques for my vegetable farm that don't require expensive equipment.",
    author: "Aarti Patel",
    authorAvatar: "AP",
    category: "Water Management",
    tags: ["drought", "conservation", "vegetables"],
    likes: 32,
    replies: 11,
    views: 206,
    createdAt: "5 days ago",
  },
  {
    id: 3,
    title: "Experience with new wheat variety BH-954?",
    content: "Has anyone tried the new wheat variety BH-954? I'm considering switching from BH-902 for the next planting season and would like to hear about yields and disease resistance.",
    author: "Mohammed Khan",
    authorAvatar: "MK",
    category: "Crop Varieties",
    tags: ["wheat", "seeds", "yield"],
    likes: 15,
    replies: 6,
    views: 98,
    createdAt: "1 week ago",
  },
  {
    id: 4,
    title: "Soil test results interpretation help",
    content: "Just received my soil test results and I'm confused about the phosphorus levels. My soil shows 26 ppm. Is this adequate for growing potatoes or should I add more?",
    author: "Priya Sharma",
    authorAvatar: "PS",
    category: "Soil Health",
    tags: ["soil", "nutrients", "potatoes"],
    likes: 19,
    replies: 14,
    views: 165,
    createdAt: "2 days ago",
  },
];

// Mock categories
const categories = [
  { name: "Crop Management", posts: 125, icon: BookOpen },
  { name: "Pest Control", posts: 87, icon: Users },
  { name: "Water Management", posts: 62, icon: Users },
  { name: "Soil Health", posts: 94, icon: Users },
  { name: "Equipment", posts: 43, icon: Users },
  { name: "Market Prices", posts: 56, icon: Users },
  { name: "Organic Farming", posts: 72, icon: Users },
];

// Mock trending tags
const trendingTags = [
  { name: "monsoon", count: 34 },
  { name: "organic", count: 28 },
  { name: "rice", count: 26 },
  { name: "wheat", count: 22 },
  { name: "fertilizer", count: 19 },
  { name: "irrigation", count: 17 },
];

const ForumPost = ({ post }: { post: typeof forumPosts[0] }) => {
  return (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback className="bg-farmfilo-primary/20 text-farmfilo-primary">{post.authorAvatar}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base font-semibold text-farmfilo-darkGreen">{post.title}</CardTitle>
              <CardDescription className="text-xs">
                Posted by {post.author} • {post.createdAt} • {post.category}
              </CardDescription>
            </div>
          </div>
          <Badge variant="outline" className="bg-farmfilo-lightGreen/30 text-farmfilo-darkGreen border-farmfilo-primary/20">
            {post.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-2 pb-2">
        <p className="text-sm text-gray-700 mb-3 line-clamp-2">{post.content}</p>
        <div className="flex flex-wrap gap-1">
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700 hover:bg-farmfilo-lightGreen/20">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex justify-between items-center border-t border-gray-100">
        <div className="flex space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-farmfilo-primary p-0 h-6">
            <Heart className="h-4 w-4 mr-1" />
            <span className="text-xs">{post.likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-farmfilo-primary p-0 h-6">
            <Reply className="h-4 w-4 mr-1" />
            <span className="text-xs">{post.replies}</span>
          </Button>
        </div>
        <span className="text-xs text-gray-500">{post.views} views</span>
      </CardFooter>
    </Card>
  );
};

const Community = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <Layout>
      <div className="pt-28 pb-16 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white/90 backdrop-blur-sm p-6 md:p-10 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-farmfilo-darkGreen mb-4">FarmFilo Community Forum</h1>
            <p className="text-gray-700 mb-6 max-w-2xl">Connect with fellow farmers, share knowledge, ask questions and learn from the experiences of others in the agricultural community.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search discussions..." 
                  className="pl-9 bg-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button className="bg-farmfilo-primary hover:bg-farmfilo-darkGreen text-white">
                <MessageSquare className="h-4 w-4 mr-2" />
                Start New Discussion
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main content area */}
          <div className="w-full lg:w-3/4">
            <Tabs defaultValue="recent">
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="recent">Recent Discussions</TabsTrigger>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
                </TabsList>
                <Button variant="outline" className="text-sm hidden md:flex">
                  <Award className="h-4 w-4 mr-2" />
                  Sort by
                </Button>
              </div>
              
              <TabsContent value="recent" className="space-y-4">
                {forumPosts.map(post => (
                  <ForumPost key={post.id} post={post} />
                ))}
                
                <div className="flex justify-center mt-8">
                  <Button variant="outline" className="text-farmfilo-primary border-farmfilo-primary hover:bg-farmfilo-lightGreen/20">
                    Load More Discussions
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="popular" className="space-y-4">
                <p className="text-center py-8 text-gray-500">Loading popular discussions...</p>
              </TabsContent>
              
              <TabsContent value="unanswered" className="space-y-4">
                <p className="text-center py-8 text-gray-500">Loading unanswered discussions...</p>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Sidebar */}
          <div className="w-full lg:w-1/4 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Start a Discussion</CardTitle>
                <CardDescription>Share your farming challenges and get help from the community</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-farmfilo-primary hover:bg-farmfilo-darkGreen">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Create New Post
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">Categories</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Button variant="ghost" className="w-full justify-start text-left text-gray-700 hover:text-farmfilo-primary hover:bg-farmfilo-lightGreen/20">
                        <category.icon className="h-4 w-4 mr-2 text-farmfilo-primary" />
                        {category.name}
                        <span className="ml-auto text-xs text-gray-500">{category.posts}</span>
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">Trending Tags</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {trendingTags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-100 hover:bg-farmfilo-lightGreen/20 cursor-pointer">
                      #{tag.name} <span className="ml-1 text-xs text-gray-500">({tag.count})</span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">Join Our Community</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-sm text-gray-700 mb-4">Get farming tips, market updates, and connect with fellow farmers</p>
                <div className="flex gap-2">
                  <Input placeholder="Your email" />
                  <Button className="bg-farmfilo-primary hover:bg-farmfilo-darkGreen">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="bg-farmfilo-lightGreen/20 py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-farmfilo-darkGreen mb-2">Learn from our agricultural experts</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">Watch videos from our field specialists and learn best practices for your farm</p>
          </div>
          
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Agricultural Best Practices"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Community;
