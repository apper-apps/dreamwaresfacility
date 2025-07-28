import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/molecules/ServiceCard";
import ApperIcon from "@/components/ApperIcon";

const Services = () => {
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and cutting-edge technologies for optimal performance and user experience.",
      icon: "Code",
      features: ["React & Next.js", "Node.js Backend", "Database Design", "API Development", "Performance Optimization", "SEO Integration"]
    },
    {
      id: "mobile-apps",
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences and business value.",
      icon: "Smartphone",
      features: ["React Native", "iOS Development", "Android Development", "App Store Optimization", "Push Notifications", "Offline Functionality"]
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions that grow with your business needs and ensure reliability.",
      icon: "Cloud",
      features: ["AWS & Azure", "DevOps & CI/CD", "Microservices Architecture", "Auto Scaling", "Security & Compliance", "Cost Optimization"]
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that convert visitors into customers through intuitive interfaces and engaging experiences.",
      icon: "Palette",
      features: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing", "Mobile-First Design", "Accessibility"]
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your online presence and drive meaningful engagement with your target audience.",
      icon: "TrendingUp",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics & Reporting", "PPC Campaigns", "Email Marketing"]
    },
    {
      id: "consulting",
      title: "Technology Consulting",
      description: "Strategic technology guidance to accelerate your digital transformation and make informed decisions about your tech stack.",
      icon: "Users",
      features: ["Digital Strategy", "Tech Stack Planning", "Process Optimization", "Team Training", "Code Reviews", "Architecture Planning"]
    },
    {
      id: "ecommerce",
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms that drive sales and provide seamless shopping experiences for your customers.",
      icon: "ShoppingCart",
      features: ["Shopify & WooCommerce", "Payment Integration", "Inventory Management", "Multi-channel Selling", "Analytics Dashboard", "Mobile Commerce"]
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and machine learning to automate processes and gain insights.",
      icon: "Brain",
      features: ["Data Analysis", "Predictive Modeling", "Natural Language Processing", "Computer Vision", "Chatbots", "Recommendation Systems"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
      icon: "Search"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our design team creates wireframes, mockups, and interactive prototypes to visualize your solution before development begins.",
      icon: "Palette"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using agile methodologies, with continuous testing and quality assurance throughout the process.",
      icon: "Code"
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your solution and provide ongoing support, maintenance, and optimization to ensure continued success.",
      icon: "Rocket"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-yellow-300">Services</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-surface">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end solutions that drive results and exceed expectations.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and exceptional results.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <ApperIcon name={step.icon} size={32} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-primary">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Technologies We <span className="gradient-text">Master</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stay ahead of the curve by working with the latest technologies and frameworks.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "React", icon: "Atom" },
              { name: "Node.js", icon: "Server" },
              { name: "Python", icon: "Code2" },
              { name: "AWS", icon: "Cloud" },
              { name: "Docker", icon: "Package" },
              { name: "MongoDB", icon: "Database" },
              { name: "TypeScript", icon: "FileCode" },
              { name: "GraphQL", icon: "Share2" },
              { name: "Next.js", icon: "Zap" },
              { name: "React Native", icon: "Smartphone" },
              { name: "PostgreSQL", icon: "HardDrive" },
              { name: "Firebase", icon: "Flame" }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md text-center card-hover"
              >
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <ApperIcon name={tech.icon} size={24} className="text-primary" />
                </div>
                <span className="text-sm font-semibold text-secondary">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
              Let's discuss your project requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center"
              >
                Start Your Project
                <ApperIcon name="ArrowRight" size={20} className="ml-2" />
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-200 inline-flex items-center justify-center"
              >
                Schedule Consultation
                <ApperIcon name="Calendar" size={20} className="ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;