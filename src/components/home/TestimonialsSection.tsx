
import React from 'react';

const testimonials = [
  {
    quote: "FarmFilo transformed my farm into an organic haven. My income has increased by 45% and I'm proud to grow chemical-free produce.",
    name: "Abdul Rahman",
    role: "Rice Farmer, Mymensingh",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "As a customer, I feel great knowing exactly where my food comes from. The quality and taste of FarmFilo's organic vegetables is incomparable.",
    name: "Fatima Akhter",
    role: "Consumer, Dhaka",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "The IoT soil monitoring system has revolutionized my farming practices. I've reduced water usage by 30% while improving my crop yield.",
    name: "Mohammed Hasan",
    role: "Vegetable Farmer, Rajshahi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-farmfilo-lightGreen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-farmfilo-darkGreen mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from farmers and consumers who have experienced the transformative impact of FarmFilo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-lg relative animate-grow" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <svg className="h-10 w-10 text-farmfilo-primary opacity-20" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                </svg>
              </div>
              
              <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-farmfilo-darkGreen">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
