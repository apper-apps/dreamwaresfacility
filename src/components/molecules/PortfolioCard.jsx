import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const PortfolioCard = ({ project, index, onClick }) => {
  const categories = {
    "web-development": "Web Development",
    "mobile-app": "Mobile Apps",
    "salesforce": "Salesforce",
    "e-commerce": "E-commerce",
    "ai-automation": "AI & Automation"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl card-hover cursor-pointer overflow-hidden group"
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
            {categories[project.category] || project.category}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
            <ApperIcon name="ExternalLink" size={20} className="text-primary" />
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex items-center gap-1 text-warning">
            <ApperIcon name="Star" size={16} />
            <span className="text-sm font-medium">{project.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <ApperIcon name="Building" size={16} />
            <span>{project.client}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <ApperIcon name="Calendar" size={16} />
            <span>{project.duration}</span>
          </div>
        </div>

        {/* Key Results Preview */}
        <div className="space-y-2 mb-4">
          {project.results.slice(0, 2).map((result, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <ApperIcon name="CheckCircle" size={14} className="text-success" />
              <span className="text-gray-600">{result}</span>
            </div>
          ))}
          {project.results.length > 2 && (
            <div className="text-sm text-primary font-medium">
              +{project.results.length - 2} more results
            </div>
          )}
        </div>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;