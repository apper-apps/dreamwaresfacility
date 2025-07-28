import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/molecules/ContactForm";
import ApperIcon from "@/components/ApperIcon";

const Contact = () => {
  const contactInfo = [
    {
      title: "Email Us",
      content: "hello@dreamwares.com",
      description: "Send us an email and we'll respond within 24 hours",
      icon: "Mail",
      action: "mailto:hello@dreamwares.com"
    },
    {
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Speak directly with our team during business hours",
      icon: "Phone",
      action: "tel:+15551234567"
    },
    {
      title: "Visit Us",
      content: "San Francisco, CA",
      description: "123 Innovation Street, Suite 456",
      icon: "MapPin",
      action: "https://maps.google.com"
    },
    {
      title: "Live Chat",
      content: "Available 24/7",
      description: "Get instant support through our chat system",
      icon: "MessageCircle",
      action: "#"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. Simple websites typically take 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes! We offer various support packages including maintenance, updates, monitoring, and feature enhancements. We're committed to your long-term success."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies including React, Node.js, Python, cloud platforms (AWS, Azure), mobile development (React Native), and emerging technologies like AI/ML."
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We can integrate with your existing development team, provide consulting services, or take full ownership of projects. We're flexible in our approach."
    },
    {
      question: "Do you work with startups or just enterprise clients?",
      answer: "We work with businesses of all sizes, from early-stage startups to Fortune 500 companies. Our solutions are tailored to your specific needs and budget."
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Innovation Street, Suite 456",
      country: "United States",
      timezone: "PST (UTC-8)"
    },
    {
      city: "New York",
      address: "789 Tech Avenue, Floor 12",
      country: "United States",
      timezone: "EST (UTC-5)"
    },
    {
      city: "London",
      address: "456 Digital Lane, Office 23",
      country: "United Kingdom",
      timezone: "GMT (UTC+0)"
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
              Get In <span className="text-yellow-300">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 leading-relaxed">
              Ready to start your next project? We'd love to hear from you. 
              Let's discuss how we can help transform your ideas into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
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
              Multiple Ways to <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the communication method that works best for you. We're here to help in whatever way you prefer.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.action}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md text-center card-hover group block"
              >
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ApperIcon name={info.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{info.title}</h3>
                <p className="text-lg font-semibold text-primary mb-2">{info.content}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-4xl font-bold text-secondary mb-6">
                  Send Us a <span className="gradient-text">Message</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours. 
                  The more details you provide, the better we can assist you.
                </p>
              </motion.div>
              <ContactForm />
            </div>

            {/* Business Hours & Offices */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center">
                  <ApperIcon name="Clock" size={24} className="mr-3 text-primary" />
                  Business Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <div className="mt-4 p-4 bg-white rounded-lg">
                    <p className="text-sm text-gray-600">
                      <ApperIcon name="Info" size={16} className="inline mr-2 text-primary" />
                      Emergency support available 24/7 for existing clients
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center">
                  <ApperIcon name="Building" size={24} className="mr-3 text-primary" />
                  Our Offices
                </h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={office.city} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <h4 className="font-semibold text-secondary text-lg">{office.city}</h4>
                      <p className="text-gray-600">{office.address}</p>
                      <p className="text-gray-600">{office.country}</p>
                      <p className="text-sm text-primary font-medium">{office.timezone}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get quick answers to common questions about our services and process.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-start">
                  <ApperIcon name="HelpCircle" size={24} className="mr-3 text-primary flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-9">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-600 mb-6">
              Don't see your question answered here?
            </p>
            <a
              href="#contact-form"
              className="btn-primary inline-flex items-center"
            >
              Ask Us Anything
              <ApperIcon name="ArrowRight" size={20} className="ml-2" />
            </a>
          </motion.div>
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
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
              Every great project starts with a conversation. We're excited to hear about your ideas and discuss how we can help bring them to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center"
              >
                Start Your Project
                <ApperIcon name="Rocket" size={20} className="ml-2" />
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-200 inline-flex items-center justify-center"
              >
                View Our Services
                <ApperIcon name="Eye" size={20} className="ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;