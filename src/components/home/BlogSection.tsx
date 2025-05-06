
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: 'Organic Farming Techniques for Small Plots',
    excerpt: 'Learn how to maximize yield in small urban farming plots using organic techniques.',
    date: 'May 3, 2025',
    author: 'Rafiqul Islam',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JnYW5pYyUyMGZhcm1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    slug: '/blog/organic-farming-techniques',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Seasonal Planting Guide for Bangladesh',
    excerpt: 'A complete guide to what crops to plant in each season for optimal growth in Bangladesh.',
    date: 'April 28, 2025',
    author: 'Shamima Khan',
    image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhcm1pbmclMjBzZWFzb25zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    slug: '/blog/seasonal-planting-guide',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Natural Pest Control Methods that Work',
    excerpt: 'Effective ways to control pests without using harmful chemicals in your organic farm.',
    date: 'April 20, 2025',
    author: 'Mohammad Abdullah',
    image: 'https://images.unsplash.com/photo-1591167960334-44bdab67b8fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVzdCUyMGNvbnRyb2x8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    slug: '/blog/natural-pest-control',
    readTime: '6 min read'
  }
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-farmfilo-darkGreen mb-4">Farming Insights & Knowledge</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest farming techniques, tips, and success stories from our community of organic farmers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <Link to={post.slug} className="block">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover" 
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                <Link to={post.slug}>
                  <h3 className="text-xl font-bold text-farmfilo-primary mb-2 hover:text-farmfilo-darkGreen transition-colors duration-300">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <Link to={post.slug} className="inline-flex items-center text-farmfilo-primary hover:text-farmfilo-darkGreen font-medium">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-farmfilo-primary hover:bg-farmfilo-darkGreen text-white px-8">
            <Link to="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
