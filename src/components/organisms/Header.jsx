import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import NavigationItem from "@/components/molecules/NavigationItem";
import ApperIcon from "@/components/ApperIcon";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Agentforce", href: "/agentforce" },
    { label: "Contact", href: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg group-hover:scale-110 transition-transform duration-200">
                <ApperIcon name="Zap" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">Dreamwares</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <NavigationItem key={item.href} item={item} />
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link to="/contact" className="btn-primary">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <ApperIcon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
                className="text-secondary" 
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                      <ApperIcon name="Zap" size={20} className="text-white" />
                    </div>
                    <span className="text-xl font-bold gradient-text">Dreamwares</span>
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <ApperIcon name="X" size={24} className="text-secondary" />
                  </button>
                </div>

                <nav className="space-y-6">
                  {navigationItems.map((item) => (
                    <NavigationItem
                      key={item.href}
                      item={item}
                      className="block text-lg py-3 border-b border-gray-100"
                      onClick={closeMobileMenu}
                    />
                  ))}
                  <Link
                    to="/contact"
                    onClick={closeMobileMenu}
                    className="btn-primary w-full justify-center mt-8"
                  >
                    Get Started
                  </Link>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;