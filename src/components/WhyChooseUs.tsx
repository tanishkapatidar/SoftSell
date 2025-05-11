
import React from "react";
import { Shield, Clock, DollarSign, Award } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Transactions",
      description:
        "Our platform uses bank-level encryption and secure payment processing. All license transfers follow legal compliance protocols.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Process",
      description:
        "Get valuations within 24 hours and payment within 3-5 business days once the offer is accepted.",
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Maximum Value",
      description:
        "Our extensive network of buyers and market analytics ensures you get the highest possible value for your licenses.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Expert Support",
      description:
        "Our team of software licensing experts provides guidance throughout the entire process.",
    },
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose SoftSell?
          </h2>
          <p className="text-gray-600 text-lg">
            We've helped hundreds of businesses recover value from their unused
            software licenses with our proven expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="rounded-full bg-gradient-to-r from-softsell-50 to-teal-50 p-4 inline-block mb-6">
                <div className="text-softsell-600">{benefit.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
