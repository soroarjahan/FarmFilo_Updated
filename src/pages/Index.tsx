
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import FeaturedProducts from '@/components/marketplace/FeaturedProducts';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ImpactSection from '@/components/home/ImpactSection';
import CTASection from '@/components/home/CTASection';
import BlogSection from '@/components/home/BlogSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <FeaturedProducts />
      <ImpactSection />
      <TestimonialsSection />
      <CTASection />
      <BlogSection />
    </Layout>
  );
};

export default Index;
