import React from 'react';
import { Wallet, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: <Wallet className="w-12 h-12 text-blue-400" />,
    title: 'Smart Payment Processing',
    description: 'Automate your payment workflows with intelligent routing and reconciliation'
  },
  {
    icon: <Zap className="w-12 h-12 text-blue-400" />,
    title: 'Real-time Analytics',
    description: 'Get instant insights into your cash flow with powerful analytics and reporting'
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-400" />,
    title: 'Enterprise Security',
    description: 'Bank-grade security protocols to keep your financial data safe and compliant'
  }
];

const Features = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Fluida
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built for modern businesses that demand speed, security, and simplicity
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;