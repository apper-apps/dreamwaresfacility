import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-xl shadow-md card-hover group"
    >
      <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <ApperIcon name={service.icon} size={32} className="text-primary" />
      </div>
      <h3 className="text-xl font-bold text-secondary mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-600">
            <ApperIcon name="Check" size={16} className="text-success mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <button className="text-primary font-semibold hover:text-accent transition-colors duration-200 inline-flex items-center group/btn">
        Learn More
        <ApperIcon name="ArrowRight" size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
      </button>
    </motion.div>
  );
};

export default ServiceCard;