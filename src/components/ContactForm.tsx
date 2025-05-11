
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const licenseTypes = [
  "Enterprise Software",
  "Productivity Suite",
  "Creative Tools",
  "Development Tools",
  "Security Solutions",
  "Other",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      company: "",
      licenseType: "",
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
      isValid = false;
    }

    if (!formData.licenseType) {
      newErrors.licenseType = "Please select a license type";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        toast({
          title: "Request Submitted Successfully",
          description: "We'll contact you shortly with a valuation.",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          licenseType: "",
          message: "",
        });
        setIsSubmitting(false);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-softsell-50 to-teal-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Convert Your Unused Licenses Into Cash?
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form to get a free valuation of your software licenses.
              Our team will contact you within 24 hours with a competitive offer.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-softsell-100 flex items-center justify-center text-softsell-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">contact@softsell.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-softsell-100 flex items-center justify-center text-softsell-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">(555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Get Your Free Valuation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-softsell-500 focus:border-softsell-500 outline-none transition ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-softsell-500 focus:border-softsell-500 outline-none transition ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="company" className="block text-gray-700 mb-2">Company Name *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-softsell-500 focus:border-softsell-500 outline-none transition ${
                    errors.company ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your company"
                />
                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
              </div>
              
              <div>
                <label htmlFor="licenseType" className="block text-gray-700 mb-2">License Type *</label>
                <select
                  id="licenseType"
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-softsell-500 focus:border-softsell-500 outline-none transition ${
                    errors.licenseType ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select license type</option>
                  {licenseTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.licenseType && <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-softsell-500 focus:border-softsell-500 outline-none transition"
                  placeholder="Tell us more about your licenses"
                ></textarea>
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-6"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
