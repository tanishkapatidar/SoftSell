
import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      content:
        "SoftSell helped us recover over $50,000 from unused enterprise licenses after our company downsizing. The process was seamless, and their valuation exceeded our expectations.",
      author: "Jennifer Martinez",
      position: "CIO",
      company: "TechStream Inc.",
    },
    {
      content:
        "As a growing startup, cash flow is critical. SoftSell allowed us to sell excess licenses we purchased during our seed round, giving us a 65% return on licenses we weren't using.",
      author: "Michael Chen",
      position: "Operations Director",
      company: "NexGen Solutions",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted by hundreds of businesses to maximize the value of their
            unused software licenses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 md:p-8 shadow-lg relative"
            >
              {/* Quote mark background */}
              <div className="absolute top-6 right-8 text-softsell-100 opacity-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="transform rotate-180"
                >
                  <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144-.351.083-.737.225-1.135.362-.394.143-.796.315-1.196.539-.397.219-.797.457-1.177.744-.383.279-.748.603-1.079.962-.332.353-.641.74-.912 1.158-.261.43-.482.891-.664 1.371-.177.502-.305 1.034-.376 1.582-.067.545-.06 1.09-.025 1.629.026.539.097 1.072.202 1.6.105.525.246 1.035.412 1.524.166.486.359.946.577 1.382.215.435.45.85.708 1.23.257.39.533.754.825 1.076.296.332.608.636.93.91.323.272.65.519.989.734.339.224.686.405 1.028.57.344.161.682.31 1.009.434.326.135.637.246.927.348.292.096.525.178.525.178l-.39-1.169c0 0-.129.048-.365.119-.233.069-.506.19-.803.261-.3.086-.624.13-.947.194-.324.047-.656.125-.964.135-.318.008-.624-.015-.903-.049-.279-.039-.528-.074-.739-.125-.217-.035-.334-.076-.334-.076s.142-.146.386-.334c.245-.188.579-.396.923-.675.346-.28.726-.577 1.099-.943.364-.369.732-.774 1.042-1.219.318-.435.579-.91.811-1.38.218-.477.403-.964.51-1.438.115-.459.217-.91.237-1.335.033-.405.05-.794-.01-1.119-.051-.334-.102-.603-.241-.873-.133-.263-.312-.5-.543-.692-.215-.185-.492-.321-.788-.367C6.93 10.054 6.725 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.351.083-.737.225-1.135.362-.394.143-.796.315-1.196.539-.397.219-.797.457-1.177.744-.383.279-.748.603-1.079.962-.332.353-.641.74-.912 1.158-.261.43-.482.891-.664 1.371-.177.502-.305 1.034-.376 1.582-.067.545-.06 1.09-.025 1.629.026.539.097 1.072.202 1.6.105.525.246 1.035.412 1.524.166.486.359.946.577 1.382.215.435.45.85.708 1.23.257.39.533.754.825 1.076.296.332.608.636.93.91.323.272.65.519.989.734.339.224.686.405 1.028.57.344.161.682.31 1.009.434.326.135.637.246.927.348.292.096.525.178.525.178l-.39-1.169c0 0-.129.048-.365.119-.233.069-.506.19-.803.261-.3.086-.624.13-.947.194-.324.047-.656.125-.964.135-.318.008-.624-.015-.903-.049-.279-.039-.528-.074-.739-.125-.217-.035-.334-.076-.334-.076s.142-.146.386-.334c.245-.188.579-.396.923-.675.346-.28.726-.577 1.099-.943.364-.369.732-.774 1.042-1.219.318-.435.579-.91.811-1.38.218-.477.403-.964.51-1.438.115-.459.217-.91.237-1.335.033-.405.05-.794-.01-1.119-.051-.334-.102-.603-.241-.873-.133-.263-.312-.5-.543-.692-.215-.185-.492-.321-.788-.367C17.93 10.054 17.725 10 17.5 10z"></path>
                </svg>
              </div>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 relative z-10">{testimonial.content}</p>
              <div className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-r ${
                    index % 2 === 0
                      ? "from-softsell-600 to-softsell-700"
                      : "from-teal-600 to-teal-700"
                  }`}
                >
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
