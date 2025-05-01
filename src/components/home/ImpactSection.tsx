
import React from 'react';
import { Progress } from '@/components/ui/progress';

const metrics = [
  {
    label: "Chemical Use Reduction",
    value: 75,
    suffix: "%",
    color: "bg-farmfilo-primary"
  },
  {
    label: "Farmer Income Increase",
    value: 40,
    suffix: "%",
    color: "bg-farmfilo-secondary"
  },
  {
    label: "Biodiversity Growth",
    value: 30,
    suffix: "%",
    color: "bg-farmfilo-accent"
  },
  {
    label: "Nutrient Content Increase",
    value: 35,
    suffix: "%",
    color: "bg-farmfilo-brown"
  }
];

const ImpactSection: React.FC = () => {
  return (
    <section className="py-20 bg-farmfilo-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-farmfilo-darkGreen mb-4">Our Impact</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transforming agriculture in Bangladesh through measurable environmental and social benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-8">
            {metrics.map((metric, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">{metric.label}</span>
                  <span className="font-bold text-farmfilo-darkGreen">{metric.value}{metric.suffix}</span>
                </div>
                <Progress value={metric.value} className={`h-3 ${metric.color}`} />
              </div>
            ))}
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-100">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-farmfilo-lightGreen rounded-lg">
                <h3 className="text-4xl font-bold text-farmfilo-darkGreen mb-2">25%</h3>
                <p className="text-sm text-gray-700">Reduction in Food Insecurity</p>
              </div>
              <div className="text-center p-4 bg-farmfilo-lightGreen rounded-lg">
                <h3 className="text-4xl font-bold text-farmfilo-darkGreen mb-2">1,500+</h3>
                <p className="text-sm text-gray-700">Farmers Supported</p>
              </div>
              <div className="text-center p-4 bg-farmfilo-lightGreen rounded-lg">
                <h3 className="text-4xl font-bold text-farmfilo-darkGreen mb-2">3,000+</h3>
                <p className="text-sm text-gray-700">Hectares Converted</p>
              </div>
              <div className="text-center p-4 bg-farmfilo-lightGreen rounded-lg">
                <h3 className="text-4xl font-bold text-farmfilo-darkGreen mb-2">15,000+</h3>
                <p className="text-sm text-gray-700">Families Benefited</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-farmfilo-darkGreen font-medium italic">"Our vision is to make Bangladesh a global leader in sustainable organic agriculture."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
