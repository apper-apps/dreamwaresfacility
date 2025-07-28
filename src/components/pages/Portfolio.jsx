import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import ApperIcon from "@/components/ApperIcon";
import PortfolioCard from "@/components/molecules/PortfolioCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import { portfolioService } from "@/services/portfolioService";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "web-development", label: "Web Development" },
    { value: "mobile-app", label: "Mobile Apps" },
    { value: "salesforce", label: "Salesforce" },
    { value: "e-commerce", label: "E-commerce" },
    { value: "ai-automation", label: "AI & Automation" }
  ];

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    filterProjects();
  }, [projects, searchTerm, selectedCategory]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await portfolioService.getAll();
      setProjects(data);
    } catch (err) {
      setError("Failed to load portfolio projects");
      toast.error("Failed to load portfolio projects");
    } finally {
      setLoading(false);
    }
  };

  const filterProjects = () => {
    let filtered = projects;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    toast.success(`Viewing ${project.title} details`);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={fetchProjects} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface to-white pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our successful projects and client transformations. From innovative web solutions 
              to cutting-edge AI implementations, see how we turn visions into reality.
            </p>
          </motion.div>

          {/* Search and Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <ApperIcon 
                  name="Search" 
                  size={20} 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category.value
                        ? "bg-primary text-white shadow-lg"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-center text-gray-600">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </motion.div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <Empty message="No projects found matching your criteria" />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <PortfolioCard
                  key={project.Id}
                  project={project}
                  index={index}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                <button
                  onClick={closeProjectDetail}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <ApperIcon name="X" size={24} />
                </button>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Project Details</h3>
                  <div className="space-y-2">
                    <p><strong>Client:</strong> {selectedProject.client}</p>
                    <p><strong>Duration:</strong> {selectedProject.duration}</p>
                    <p><strong>Category:</strong> {categories.find(c => c.value === selectedProject.category)?.label}</p>
                  </div>

                  <h4 className="text-lg font-semibold mt-6 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Results Achieved</h3>
                  <div className="space-y-3">
                    {selectedProject.results.map((result, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <ApperIcon name="CheckCircle" size={20} className="text-success" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Project Description</h3>
                <p className="text-gray-600 leading-relaxed">{selectedProject.fullDescription}</p>
              </div>

              {selectedProject.liveUrl && (
                <div className="mt-6 flex gap-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2"
                  >
                    <ApperIcon name="ExternalLink" size={20} />
                    View Live Project
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;