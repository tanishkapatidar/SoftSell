
import React, { useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import Navbar from "@/components/Navbar";

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
    </div>
  );
};

export default Index;
