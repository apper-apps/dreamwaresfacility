import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const Agentforce = () => {
  const capabilities = [
    {
      title: "AI-Powered Automation",
      description: "Transform your business operations with intelligent AI agents that automate complex workflows, eliminate manual tasks, and optimize processes in real-time.",
      icon: "Bot",
      features: ["Workflow Automation", "Process Optimization", "Task Scheduling", "Smart Routing"]
    },
    {
      title: "Intelligent Workflows",
      description: "Create adaptive, self-improving workflows that learn from your business patterns and automatically adjust to changing conditions and requirements.",
      icon: "GitBranch",
      features: ["Adaptive Logic", "Dynamic Routing", "Smart Triggers", "Flow Optimization"]
    },
    {
      title: "Data Integration",
      description: "Seamlessly connect and unify data from multiple sources, creating a single source of truth that powers intelligent decision-making across your organization.",
      icon: "Database",
      features: ["Multi-Source Connectivity", "Real-time Sync", "Data Transformation", "API Integration"]
    },
    {
      title: "Advanced Analytics",
      description: "Leverage AI-driven analytics to uncover hidden insights, predict future trends, and make data-driven decisions that drive business growth and efficiency.",
      icon: "BarChart3",
      features: ["Predictive Analytics", "Pattern Recognition", "Custom Dashboards", "Automated Reports"]
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and free up your team to focus on strategic initiatives that drive growth.",
      percentage: "75%",
      metric: "Time Savings"
    },
    {
      title: "Enhanced Customer Experience",
      description: "Deliver consistent, personalized experiences that exceed customer expectations at every touchpoint.",
      percentage: "92%",
      metric: "Customer Satisfaction"
    },
    {
      title: "Scalable Operations",
      description: "Scale your operations seamlessly without proportional increases in staffing or infrastructure costs.",
      percentage: "300%",
      metric: "Capacity Increase"
    },
    {
      title: "Revenue Growth",
      description: "Drive revenue growth through improved conversion rates, upselling opportunities, and operational efficiency.",
      percentage: "45%",
      metric: "Revenue Increase"
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      scenario: "Personalized Shopping Assistant",
      description: "AI agents help customers find products, answer questions, and complete purchases with personalized recommendations.",
      results: ["40% increase in conversion rates", "60% reduction in cart abandonment", "24/7 customer support"]
    },
    {
      industry: "Healthcare",
      scenario: "Patient Care Coordination",
      description: "Streamline appointment scheduling, patient follow-ups, and medical record management with intelligent automation.",
      results: ["50% faster appointment scheduling", "90% reduction in no-shows", "Improved patient satisfaction"]
    },
    {
      industry: "Financial Services",
      scenario: "Fraud Detection & Prevention",
      description: "Real-time monitoring and analysis of transactions to identify and prevent fraudulent activities instantly.",
      results: ["95% fraud detection accuracy", "70% reduction in false positives", "Instant response times"]
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
              Transform Your Business with <span className="text-yellow-300">Agentforce</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 leading-relaxed mb-8">
              Harness the power of AI agents to automate complex business processes, enhance customer experiences, 
              and drive unprecedented growth. Agentforce is your intelligent workforce that never sleeps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center"
              >
                Start Your AI Journey
                <ApperIcon name="ArrowRight" size={20} className="ml-2" />
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-200 inline-flex items-center justify-center">
                Watch Demo
                <ApperIcon name="Play" size={20} className="ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Agentforce */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-secondary mb-6">
                What is <span className="gradient-text">Agentforce?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Agentforce is a revolutionary AI platform that deploys intelligent agents to handle your most complex business challenges. 
                These AI agents work autonomously, learning from your data and processes to make intelligent decisions, 
                automate workflows, and deliver exceptional results.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Unlike traditional automation tools, Agentforce agents can understand context, adapt to changing conditions, 
                and collaborate with your human workforce to create a truly hybrid intelligent organization.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg mr-4">
                    <ApperIcon name="Check" size={20} className="text-white" />
                  </div>
                  <span className="text-secondary font-semibold">Autonomous AI agents that work 24/7</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg mr-4">
                    <ApperIcon name="Check" size={20} className="text-white" />
                  </div>
                  <span className="text-secondary font-semibold">Seamless integration with existing systems</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg mr-4">
                    <ApperIcon name="Check" size={20} className="text-white" />
                  </div>
                  <span className="text-secondary font-semibold">Continuous learning and improvement</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl"
            >
              <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg mr-4">
                    <ApperIcon name="Zap" size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary">Instant Impact</h3>
                </div>
                <p className="text-gray-600">Deploy AI agents in minutes, not months. See immediate results in productivity and efficiency.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg mr-4">
                    <ApperIcon name="Shield" size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary">Enterprise Security</h3>
                </div>
                <p className="text-gray-600">Built with enterprise-grade security and compliance standards to protect your sensitive data.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
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
              Agentforce <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Agentforce AI agents can transform every aspect of your business operations.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md card-hover"
              >
                <div className="flex items-start mb-6">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-lg mr-6">
                    <ApperIcon name={capability.icon} size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-secondary mb-3">{capability.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{capability.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {capability.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <ApperIcon name="CheckCircle" size={16} className="text-success mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Measurable <span className="gradient-text">Business Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See real results with quantifiable improvements across your key business metrics.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl"
              >
                <div className="text-5xl font-bold gradient-text mb-4">{benefit.percentage}</div>
                <div className="text-lg font-semibold text-secondary mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-bold text-secondary mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Real-World <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses across industries are leveraging Agentforce to achieve remarkable results.
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div>
                    <div className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">{useCase.industry}</div>
                    <h3 className="text-2xl font-bold text-secondary mb-4">{useCase.scenario}</h3>
                    <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-secondary mb-4">Results Achieved:</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {useCase.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center p-4 bg-gradient-to-r from-success/10 to-success/5 rounded-lg">
                          <ApperIcon name="TrendingUp" size={20} className="text-success mr-3 flex-shrink-0" />
                          <span className="text-sm font-medium text-secondary">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
              Ready to Deploy Your AI Workforce?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
              Join the AI revolution and transform your business operations with Agentforce. 
              Schedule a personalized demo to see how AI agents can work for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center"
              >
                Schedule Demo
                <ApperIcon name="Calendar" size={20} className="ml-2" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-200 inline-flex items-center justify-center"
              >
                Explore All Services
                <ApperIcon name="ArrowRight" size={20} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Agentforce;