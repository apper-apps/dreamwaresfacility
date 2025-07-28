import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Thompson",
      position: "Founder & CEO",
      bio: "15+ years in tech leadership, passionate about transforming businesses through innovative solutions.",
      avatar: "A",
      specialties: ["Strategic Planning", "Team Leadership", "Business Development"]
    },
    {
      name: "Sarah Chen",
      position: "CTO & Lead Developer",
      bio: "Full-stack expert with a focus on scalable architectures and modern development practices.",
      avatar: "S",
      specialties: ["System Architecture", "React/Node.js", "Cloud Infrastructure"]
    },
    {
      name: "Michael Rodriguez",
      position: "Head of Design",
      bio: "Award-winning designer creating user experiences that delight and convert.",
      avatar: "M",
      specialties: ["UI/UX Design", "Design Systems", "User Research"]
    },
    {
      name: "Emily Johnson",
      position: "Project Manager",
      bio: "Agile methodology expert ensuring projects are delivered on time and exceed expectations.",
      avatar: "E",
      specialties: ["Project Management", "Agile/Scrum", "Client Relations"]
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions that give our clients a competitive advantage.",
      icon: "Lightbulb"
    },
    {
      title: "Quality",
      description: "Every line of code, every design element, and every user interaction is crafted with meticulous attention to detail and quality.",
      icon: "Award"
    },
    {
      title: "Collaboration",
      description: "We believe in transparent communication and close collaboration with our clients throughout the entire development process.",
      icon: "Users"
    },
    {
      title: "Results",
      description: "Our success is measured by our clients' success. We focus on delivering solutions that drive real business outcomes and growth.",
      icon: "Target"
    }
  ];

  const milestones = [
    { year: "2010", event: "Company Founded", description: "Started as a small team with big dreams" },
    { year: "2013", event: "First Major Client", description: "Secured partnership with Fortune 500 company" },
    { year: "2016", event: "Team Expansion", description: "Grew to 20+ talented professionals" },
    { year: "2019", event: "Cloud Expertise", description: "Became AWS Advanced Consulting Partner" },
    { year: "2022", event: "500+ Projects", description: "Delivered 500th successful project" },
    { year: "2024", event: "AI Innovation", description: "Launched AI/ML consulting services" }
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
              About <span className="text-yellow-300">Dreamwares</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 leading-relaxed">
              We're a passionate team of technologists, designers, and strategists dedicated to transforming businesses through innovative digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
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
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To empower businesses of all sizes with innovative technology solutions that drive growth, 
                enhance efficiency, and create exceptional user experiences. We believe that great technology 
                should be accessible to everyone, not just enterprise-level organizations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment extends beyond just writing code – we're your strategic partners in digital transformation, 
                helping you navigate the complex technology landscape and make informed decisions that align with your business goals.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To be the leading technology partner that businesses trust for their most critical digital initiatives, 
                known for our innovation, reliability, and unwavering commitment to client success.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold gradient-text">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold gradient-text">500+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide every decision we make and every solution we create.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md text-center card-hover"
              >
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <ApperIcon name={value.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The brilliant minds behind our innovative solutions and exceptional client experiences.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface p-6 rounded-xl text-center card-hover"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="space-y-1">
                  {member.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mr-1"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership – here's how we've grown over the years.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-secondary mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
              Let's discuss how our experience and expertise can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center"
              >
                Get In Touch
                <ApperIcon name="ArrowRight" size={20} className="ml-2" />
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

export default About;