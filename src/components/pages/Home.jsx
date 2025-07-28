import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "@/components/organisms/Hero";
import ServiceCard from "@/components/molecules/ServiceCard";
import ApperIcon from "@/components/ApperIcon";

const Home = () => {
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and technologies.",
      icon: "Code",
      features: ["React & Next.js", "Node.js Backend", "Database Design", "API Development"]
    },
    {
      id: "mobile-apps",
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      icon: "Smartphone",
      features: ["React Native", "iOS Development", "Android Development", "App Store Optimization"]
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions.",
      icon: "Cloud",
      features: ["AWS & Azure", "DevOps", "Microservices", "Auto Scaling"]
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that convert visitors into customers.",
      icon: "Palette",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your online presence.",
      icon: "TrendingUp",
      features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics"]
    },
    {
      id: "consulting",
      title: "Technology Consulting",
      description: "Strategic technology guidance to accelerate your digital transformation.",
      icon: "Users",
      features: ["Digital Strategy", "Tech Stack Planning", "Process Optimization", "Team Training"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      content: "Dreamwares transformed our vision into a stunning web application. Their attention to detail and technical expertise is unmatched.",
      avatar: "S"
    },
    {
      name: "Michael Chen",
      position: "CTO, DataFlow Solutions",
      content: "The team's ability to deliver complex solutions on time and within budget exceeded our expectations. Highly recommended!",
      avatar: "M"
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, GrowthCo",
      content: "Working with Dreamwares was a game-changer for our digital presence. The results speak for themselves.",
      avatar: "E"
    }
  ];

  return (
    <>
      <Hero />
      
      {/* Services Section */}
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
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive technology solutions to help your business thrive in the digital landscape.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-primary">
              View All Services
              <ApperIcon name="ArrowRight" size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">150+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md card-hover"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <ApperIcon key={star} name="Star" size={16} className="fill-current" />
                  ))}
                </div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
              Let's discuss your project and create something amazing together. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center"
              >
                Start Your Project
                <ApperIcon name="ArrowRight" size={20} className="ml-2" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-200 inline-flex items-center justify-center"
              >
                Learn More About Us
                <ApperIcon name="Info" size={20} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;