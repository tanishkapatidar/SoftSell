
import React from "react";
import { FileUp, DollarSign, BadgeDollarSign } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileUp className="h-10 w-10" />,
      title: "Upload License",
      description:
        "Submit your software license details through our secure platform. We'll verify the transferability and compliance with resale terms.",
    },
    {
      icon: <BadgeDollarSign className="h-10 w-10" />,
      title: "Get Valuation",
      description:
        "Our algorithm analyzes current market demand and license specifics to provide you with a competitive valuation within 24 hours.",
    },
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Get Paid",
      description:
        "Accept our offer and receive payment through your preferred method. We handle all the transfer logistics and paperwork.",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How SoftSell Works
          </h2>
          <p className="text-gray-600 text-lg">
            Our streamlined process makes selling unused software licenses simple,
            secure, and profitable for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card-gradient rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-gradient-to-br from-softsell-100 to-teal-100 opacity-40"></div>
              <div className="relative z-10">
                <div className="rounded-full bg-gradient-to-r from-softsell-100 to-teal-100 p-3 inline-block mb-6">
                  <div className="text-softsell-600">{step.icon}</div>
                </div>
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-gradient-to-r from-softsell-600 to-teal-600 flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
