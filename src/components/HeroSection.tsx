
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-teal-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 rounded-full bg-gradient-to-r from-softsell-100 to-teal-100 blur-3xl opacity-30"></div>
        <div className="absolute -left-20 top-1/3 w-60 h-60 rounded-full bg-softsell-200 blur-3xl opacity-20"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-softsell-100 to-teal-100 text-softsell-700 font-medium text-sm mb-6">
              Software License Resale Platform
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-softsell-900 to-teal-800 bg-clip-text text-transparent">
              Turn Unused Software Licenses Into <span className="text-softsell-600">Cash</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              SoftSell helps businesses recover value from underutilized software licenses through our 
              secure, transparent, and efficient resale marketplace.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => document.getElementById("contact")?.scrollIntoView()}
                className="btn-primary text-lg"
              >
                Sell My Licenses
              </Button>
              <Button 
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView()}
                variant="outline" 
                className="text-lg border-2 hover:bg-softsell-50"
              >
                Learn How It Works
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className={`w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r ${
                        i % 2 === 0 ? "from-teal-400 to-teal-500" : "from-softsell-400 to-softsell-500"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-bold">500+</span> businesses recovered value with SoftSell
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-softsell-500 to-teal-500 blur-2xl opacity-10 rounded-full transform rotate-12"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 animate-fade-in">
              <div className="text-center mb-8">
                <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-softsell-100 to-teal-100 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-softsell-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Average Recovery Value</h3>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 rounded-lg bg-gray-50">
                  <span className="font-medium text-gray-600">Enterprise Software</span>
                  <span className="font-bold text-softsell-600">Up to 70%</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-lg bg-gray-50">
                  <span className="font-medium text-gray-600">Productivity Suites</span>
                  <span className="font-bold text-softsell-600">Up to 60%</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-lg bg-gray-50">
                  <span className="font-medium text-gray-600">Creative Tools</span>
                  <span className="font-bold text-softsell-600">Up to 50%</span>
                </div>
                <Button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView()}
                  className="w-full btn-primary"
                >
                  Get Your Free Valuation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
