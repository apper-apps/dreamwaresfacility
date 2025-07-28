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
      detailedDescription: "We create powerful, scalable web applications using the latest technologies like React, Next.js, and Node.js. Our development process focuses on performance, security, and user experience to ensure your web application not only looks great but performs exceptionally well.",
      icon: "Code",
      features: ["React & Next.js", "Node.js Backend", "Database Design", "API Development", "Performance Optimization", "SEO Integration"],
      deliverables: ["Responsive Web Application", "Admin Dashboard", "API Documentation", "Source Code", "Deployment Guide", "3 Months Support"],
      pricing: {
        basic: { price: "$5,000", timeline: "4-6 weeks", description: "Simple web application with basic features" },
        professional: { price: "$15,000", timeline: "8-12 weeks", description: "Complex web application with advanced features" },
        enterprise: { price: "$35,000+", timeline: "16+ weeks", description: "Large-scale application with custom integrations" }
      }
    },
    {
      id: "mobile-apps",
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences and business value.",
      detailedDescription: "Our mobile app development team creates beautiful, fast, and intuitive mobile applications for both iOS and Android platforms. We use React Native for cross-platform efficiency and native development when performance is critical.",
      icon: "Smartphone",
      features: ["React Native", "iOS Development", "Android Development", "App Store Optimization", "Push Notifications", "Offline Functionality"],
      deliverables: ["iOS & Android Apps", "App Store Submissions", "Push Notification Setup", "Analytics Integration", "Source Code", "6 Months Support"],
      pricing: {
        basic: { price: "$8,000", timeline: "6-8 weeks", description: "Simple mobile app with core functionality" },
        professional: { price: "$20,000", timeline: "12-16 weeks", description: "Feature-rich app with integrations" },
        enterprise: { price: "$50,000+", timeline: "20+ weeks", description: "Complex app with custom native features" }
      }
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions that grow with your business needs and ensure reliability.",
      detailedDescription: "We design and implement robust cloud architectures using AWS, Azure, and Google Cloud. Our solutions include automated deployment pipelines, monitoring systems, and scalable infrastructure that grows with your business.",
      icon: "Cloud",
      features: ["AWS & Azure", "DevOps & CI/CD", "Microservices Architecture", "Auto Scaling", "Security & Compliance", "Cost Optimization"],
      deliverables: ["Cloud Architecture", "CI/CD Pipeline", "Monitoring Setup", "Security Configuration", "Documentation", "Ongoing Support"],
      pricing: {
        basic: { price: "$3,000", timeline: "2-3 weeks", description: "Basic cloud setup and deployment" },
        professional: { price: "$10,000", timeline: "6-8 weeks", description: "Advanced cloud architecture with monitoring" },
        enterprise: { price: "$25,000+", timeline: "12+ weeks", description: "Enterprise-grade cloud infrastructure" }
      }
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that convert visitors into customers through intuitive interfaces and engaging experiences.",
      detailedDescription: "Our design team creates stunning, user-friendly interfaces that not only look beautiful but also drive conversions. We conduct thorough user research and testing to ensure optimal user experience across all devices.",
      icon: "Palette",
      features: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing", "Mobile-First Design", "Accessibility"],
      deliverables: ["Design System", "High-Fidelity Mockups", "Interactive Prototypes", "User Flow Diagrams", "Style Guide", "Design Assets"],
      pricing: {
        basic: { price: "$2,500", timeline: "2-3 weeks", description: "Basic UI design for small projects" },
        professional: { price: "$7,500", timeline: "4-6 weeks", description: "Complete UX/UI design with research" },
        enterprise: { price: "$20,000+", timeline: "8+ weeks", description: "Comprehensive design system and testing" }
      }
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your online presence and drive meaningful engagement with your target audience.",
      detailedDescription: "Our digital marketing experts develop comprehensive strategies that increase your online visibility, drive qualified traffic, and convert visitors into customers. We focus on measurable results and ROI.",
      icon: "TrendingUp",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics & Reporting", "PPC Campaigns", "Email Marketing"],
      deliverables: ["Marketing Strategy", "Content Calendar", "Campaign Setup", "Analytics Dashboard", "Monthly Reports", "Ongoing Optimization"],
      pricing: {
        basic: { price: "$1,500/mo", timeline: "Ongoing", description: "Essential marketing package" },
        professional: { price: "$3,500/mo", timeline: "Ongoing", description: "Comprehensive marketing strategy" },
        enterprise: { price: "$8,000+/mo", timeline: "Ongoing", description: "Full-service marketing with dedicated team" }
      }
    },
    {
      id: "consulting",
      title: "Technology Consulting",
      description: "Strategic technology guidance to accelerate your digital transformation and make informed decisions about your tech stack.",
      detailedDescription: "Our experienced consultants help you navigate complex technology decisions, optimize your development processes, and plan for scalable growth. We provide actionable insights and hands-on guidance.",
      icon: "Users",
      features: ["Digital Strategy", "Tech Stack Planning", "Process Optimization", "Team Training", "Code Reviews", "Architecture Planning"],
      deliverables: ["Strategic Roadmap", "Technology Assessment", "Process Documentation", "Training Materials", "Implementation Plan", "Ongoing Support"],
      pricing: {
        basic: { price: "$200/hr", timeline: "As needed", description: "Hourly consulting services" },
        professional: { price: "$5,000/mo", timeline: "3-6 months", description: "Monthly consulting retainer" },
        enterprise: { price: "$15,000+", timeline: "6+ months", description: "Comprehensive strategic consulting" }
      }
    },
    {
      id: "ecommerce",
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms that drive sales and provide seamless shopping experiences for your customers.",
      detailedDescription: "We build powerful e-commerce solutions that convert visitors into customers. Our platforms are optimized for performance, SEO, and user experience, with robust payment processing and inventory management.",
      icon: "ShoppingCart",
      features: ["Shopify & WooCommerce", "Payment Integration", "Inventory Management", "Multi-channel Selling", "Analytics Dashboard", "Mobile Commerce"],
      deliverables: ["E-commerce Platform", "Payment Gateway Setup", "Inventory System", "Admin Dashboard", "Mobile App", "Training & Support"],
      pricing: {
        basic: { price: "$6,000", timeline: "4-6 weeks", description: "Basic e-commerce store setup" },
        professional: { price: "$18,000", timeline: "8-12 weeks", description: "Advanced e-commerce platform" },
        enterprise: { price: "$45,000+", timeline: "16+ weeks", description: "Custom e-commerce solution with integrations" }
      }
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and machine learning to automate processes and gain insights.",
      detailedDescription: "We develop cutting-edge AI and machine learning solutions that automate complex processes, provide predictive insights, and enhance user experiences. Our AI solutions are tailored to your specific business needs.",
      icon: "Brain",
      features: ["Data Analysis", "Predictive Modeling", "Natural Language Processing", "Computer Vision", "Chatbots", "Recommendation Systems"],
      deliverables: ["AI Model Development", "Data Pipeline", "API Integration", "Dashboard Interface", "Documentation", "Model Training"],
      pricing: {
        basic: { price: "$10,000", timeline: "6-8 weeks", description: "Basic AI solution implementation" },
        professional: { price: "$30,000", timeline: "12-16 weeks", description: "Advanced AI system with custom models" },
        enterprise: { price: "$75,000+", timeline: "20+ weeks", description: "Enterprise AI platform with multiple models" }
      }
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      service: "Web Development",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "DreamWares delivered an exceptional web application that exceeded our expectations. Their attention to detail and technical expertise is outstanding."
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "RetailMax",
      service: "E-commerce Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Our e-commerce platform has increased sales by 300% since launch. The team's expertise in conversion optimization is remarkable."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "DesignCo",
      service: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The UI/UX design transformed our user experience completely. Our user engagement has improved significantly since the redesign."
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

      {/* Pricing Section */}
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
              Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your project. All our services include ongoing support and maintenance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {["basic", "professional", "enterprise"].map((tier, index) => (
              <motion.div
                key={tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-8 shadow-lg ${
                  tier === "professional" ? "ring-2 ring-primary transform scale-105" : ""
                }`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-secondary mb-2 capitalize">{tier}</h3>
                  {tier === "professional" && (
                    <span className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  )}
                </div>
                
                <div className="space-y-6">
                  {services.slice(0, 4).map((service) => (
                    <div key={service.id} className="border-b border-gray-100 pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-secondary">{service.title}</span>
                        <span className="text-primary font-bold">{service.pricing[tier].price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{service.pricing[tier].description}</p>
                      <p className="text-xs text-gray-500 mt-1">Timeline: {service.pricing[tier].timeline}</p>
                    </div>
                  ))}
                </div>

                <button className={`w-full mt-8 py-4 rounded-lg font-semibold transition-all duration-200 ${
                  tier === "professional"
                    ? "btn-primary"
                    : "btn-secondary"
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-secondary mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6">
              Every project is unique. Let's discuss your specific requirements and create a tailored solution that fits your budget and timeline.
            </p>
            <button className="btn-primary">
              Schedule Consultation
            </button>
          </motion.div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="bg-gradient-to-br from-primary to-accent w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <ApperIcon name={step.icon} size={32} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Schedule Call
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200">
                Get Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Client <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. See what our clients have to say about working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md card-hover"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <ApperIcon key={i} name="Star" size={16} className="text-warning fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">"{testimonial.text}"</p>
                
                <div className="text-sm text-primary font-semibold">
                  Service: {testimonial.service}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
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