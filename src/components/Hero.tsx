import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-950 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Revolutionizing Financial Operations for the Modern Business
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
            Fluida is your all-in-one platform for seamless financial management. 
            Powered by cutting-edge technology to streamline payments, invoicing, and cash flow.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all">
              Join Waitlist
              <ArrowRight size={20} />
            </button>
            <button className="border border-blue-400 hover:border-blue-300 text-blue-100 px-8 py-3 rounded-lg font-semibold transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
        <div className="w-full h-full bg-gradient-radial from-blue-400 to-transparent rounded-full transform scale-150 translate-x-1/3 -translate-y-1/4"></div>
      </div>
    </div>
  );
};

export default Hero;