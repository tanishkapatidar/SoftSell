
import React, { useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  // Use our custom hook to handle animations on scroll
  const revealSections = () => {
    const allSections = document.querySelectorAll(".reveal");
    
    allSections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight - 100) {
        section.classList.add("active");
      }
    });
  };
  
  useEffect(() => {
    // Call on initial load
    revealSections();
    
    // Add scroll event listener
    window.addEventListener("scroll", revealSections);
    
    // Cleanup
    return () => window.removeEventListener("scroll", revealSections);
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
      </motion.div>
      
      <div className="reveal">
        <HowItWorks />
      </div>
      
      <div className="reveal">
        <WhyChooseUs />
      </div>

      <div className="reveal">
        <Testimonials />
      </div>
      
      <div className="reveal">
        <ContactForm />
      </div>
      
      <Footer />

      <ChatWidget />
    </div>
  );
};

export default Index;
