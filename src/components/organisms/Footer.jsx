import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "/services" },
        { name: "Mobile Apps", href: "/services" },
        { name: "Cloud Solutions", href: "/services" },
        { name: "Digital Marketing", href: "/services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/about" },
        { name: "Careers", href: "/contact" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/contact" },
        { name: "Documentation", href: "/contact" },
        { name: "Privacy Policy", href: "/contact" },
        { name: "Terms of Service", href: "/contact" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: "Twitter", href: "#" },
    { name: "LinkedIn", icon: "Linkedin", href: "#" },
    { name: "Facebook", icon: "Facebook", href: "#" },
    { name: "Instagram", icon: "Instagram", href: "#" },
    { name: "GitHub", icon: "Github", href: "#" }
  ];

  return (
    <footer className="bg-secondary text-white">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="flex items-center space-x-2 mb-6 group">
                <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg group-hover:scale-110 transition-transform duration-200">
                  <ApperIcon name="Zap" size={24} className="text-white" />
                </div>
                <span className="text-2xl font-bold">Dreamwares</span>
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Transforming digital dreams into reality through innovative technology solutions. 
                We build tomorrow's software today.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <ApperIcon name="Mail" size={18} className="text-primary" />
                  <span className="text-gray-300">hello@dreamwares.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ApperIcon name="Phone" size={18} className="text-primary" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ApperIcon name="MapPin" size={18} className="text-primary" />
                  <span className="text-gray-300">San Francisco, CA</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest tech insights and updates.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:border-primary focus:outline-none text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-primary to-accent px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-300 mb-4 md:mb-0">
            © {currentYear} Dreamwares. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200 group"
                aria-label={social.name}
              >
                <ApperIcon 
                  name={social.icon} 
                  size={18} 
                  className="text-gray-300 group-hover:text-white" 
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;