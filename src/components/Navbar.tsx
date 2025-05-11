import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navAnimation = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  const menuItemAnimation = {
    hidden: { opacity: 0, x: -20 },
    show: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <motion.nav
      initial="hidden"
      animate="show"
      variants={navAnimation}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <motion.a 
          href="#" 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="bg-gradient-to-r from-softsell-600 to-teal-600 text-white font-bold text-xl px-3 py-1 rounded">
            SS
          </div>
          <span className="text-xl font-bold text-softsell-900 dark:text-white">SoftSell</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["how-it-works", "why-choose-us", "testimonials"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item}`}
              custom={i}
              variants={menuItemAnimation}
              whileHover={{ scale: 1.05 }}
              className="text-gray-600 dark:text-gray-300 hover:text-softsell-600 dark:hover:text-softsell-400 font-medium"
            >
              {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </motion.a>
          ))}
          
          <motion.div
            variants={menuItemAnimation}
            custom={3}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
              className="bg-gradient-to-r from-softsell-600 to-teal-600 hover:from-softsell-700 hover:to-teal-700 dark:from-softsell-500 dark:to-teal-500"
            >
              Get a Quote
            </Button>
          </motion.div>
          
          <motion.div
            variants={menuItemAnimation}
            custom={4}
          >
            <ThemeToggle />
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="text-gray-600 dark:text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="container-custom flex flex-col space-y-4 py-4">
              {["how-it-works", "why-choose-us", "testimonials"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-gray-600 dark:text-gray-300 hover:text-softsell-600 dark:hover:text-softsell-400 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </motion.a>
              ))}
              <Button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-gradient-to-r from-softsell-600 to-teal-600 hover:from-softsell-700 hover:to-teal-700 dark:from-softsell-500 dark:to-teal-500 w-full"
              >
                Get a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
