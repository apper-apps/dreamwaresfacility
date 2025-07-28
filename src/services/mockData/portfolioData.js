const mockPortfolioData = [
  {
    Id: 1,
    title: "Enterprise CRM Transformation",
    client: "TechCorp Solutions",
    category: "salesforce",
    duration: "8 months",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    description: "Complete Salesforce implementation with custom workflows and integrations for a Fortune 500 company.",
    fullDescription: "Led a comprehensive digital transformation for TechCorp Solutions, implementing a fully customized Salesforce CRM system. The project included data migration from legacy systems, custom workflow automation, third-party integrations, and extensive user training. Our solution streamlined their sales process and improved customer relationship management across all departments.",
    technologies: ["Salesforce", "Apex", "Lightning Web Components", "REST APIs", "JavaScript", "SQL"],
    results: [
      "300% increase in sales pipeline visibility",
      "50% reduction in lead response time",
      "95% user adoption rate within 3 months",
      "$2.5M annual cost savings through automation"
    ],
    liveUrl: "https://techcorp.salesforce.com",
    createdAt: "2024-01-15T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z"
  },
  {
    Id: 2,
    title: "E-commerce Platform Redesign",
    client: "Fashion Forward Inc",
    category: "e-commerce",
    duration: "6 months",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    description: "Modern, responsive e-commerce platform with advanced analytics and personalization features.",
    fullDescription: "Completely redesigned and rebuilt Fashion Forward Inc's e-commerce platform from the ground up. The new platform features a modern, mobile-first design, advanced product recommendation engine, real-time inventory management, and comprehensive analytics dashboard. Integration with multiple payment gateways and shipping providers ensures a seamless customer experience.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Redux", "Tailwind CSS"],
    results: [
      "180% increase in conversion rate",
      "65% improvement in page load speeds",
      "40% increase in average order value",
      "25% reduction in cart abandonment rate"
    ],
    liveUrl: "https://fashionforward.com",
    createdAt: "2024-02-01T00:00:00Z",
    updatedAt: "2024-02-01T00:00:00Z"
  },
  {
    Id: 3,
    title: "AI-Powered Customer Service Bot",
    client: "Global Insurance Group",
    category: "ai-automation",
    duration: "4 months",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
    description: "Intelligent chatbot with natural language processing to handle customer inquiries 24/7.",
    fullDescription: "Developed an advanced AI-powered customer service chatbot for Global Insurance Group using natural language processing and machine learning. The bot handles complex insurance queries, policy information requests, claims processing, and seamlessly escalates to human agents when needed. Integration with their existing CRM system provides personalized responses based on customer history.",
    technologies: ["Python", "TensorFlow", "OpenAI GPT", "Flask", "PostgreSQL", "Docker", "Kubernetes"],
    results: [
      "75% reduction in customer service workload",
      "24/7 availability with 2-second response time",
      "92% customer satisfaction rating",
      "$800K annual savings in support costs"
    ],
    liveUrl: null,
    createdAt: "2024-03-10T00:00:00Z",
    updatedAt: "2024-03-10T00:00:00Z"
  },
  {
    Id: 4,
    title: "Healthcare Management System",
    client: "MediCare Partners",
    category: "web-development",
    duration: "10 months",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
    description: "Comprehensive healthcare management platform with patient records, scheduling, and telemedicine capabilities.",
    fullDescription: "Built a comprehensive healthcare management system for MediCare Partners, featuring patient record management, appointment scheduling, telemedicine capabilities, and billing integration. The system includes role-based access control for doctors, nurses, and administrative staff, along with HIPAA-compliant data handling and secure patient communication channels.",
    technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC", "Redis", "Docker", "AWS"],
    results: [
      "60% improvement in patient scheduling efficiency",
      "45% reduction in administrative overhead",
      "100% HIPAA compliance maintained",
      "40% increase in patient satisfaction scores"
    ],
    liveUrl: "https://medicare-partners.com",
    createdAt: "2024-04-05T00:00:00Z",
    updatedAt: "2024-04-05T00:00:00Z"
  },
  {
    Id: 5,
    title: "Mobile Fitness Tracking App",
    client: "FitLife Studios",
    category: "mobile-app",
    duration: "5 months",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
    description: "Cross-platform mobile app for fitness tracking with social features and personalized workout plans.",
    fullDescription: "Developed a comprehensive fitness tracking mobile application for FitLife Studios with cross-platform compatibility. The app features personalized workout plans, nutrition tracking, social challenges, progress analytics, and integration with popular wearable devices. Users can connect with trainers, join group challenges, and track their fitness journey with detailed insights.",
    technologies: ["React Native", "Firebase", "Redux", "Node.js", "Express", "MongoDB"],
    results: [
      "50K+ downloads in first 3 months",
      "85% daily active user retention",
      "4.7 star rating on app stores",
      "30% increase in gym membership renewals"
    ],
    liveUrl: "https://apps.apple.com/fitlife",
    createdAt: "2024-05-20T00:00:00Z",
    updatedAt: "2024-05-20T00:00:00Z"
  },
  {
    Id: 6,
    title: "Supply Chain Management Portal",
    client: "LogiFlow Enterprises",
    category: "web-development",
    duration: "7 months",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop",
    description: "Real-time supply chain tracking and management system with predictive analytics.",
    fullDescription: "Created a sophisticated supply chain management portal for LogiFlow Enterprises, providing real-time tracking of shipments, inventory management, vendor coordination, and predictive analytics for demand forecasting. The system integrates with multiple logistics providers and includes automated alerts for potential delays or disruptions.",
    technologies: ["Angular", "Spring Boot", "PostgreSQL", "Apache Kafka", "Elasticsearch", "D3.js"],
    results: [
      "35% improvement in delivery accuracy",
      "50% reduction in inventory holding costs",
      "Real-time visibility across 500+ suppliers",
      "25% decrease in supply chain disruptions"
    ],
    liveUrl: "https://portal.logiflow.com",
    createdAt: "2024-06-15T00:00:00Z",
    updatedAt: "2024-06-15T00:00:00Z"
  },
  {
    Id: 7,
    title: "Restaurant POS & Management System",
    client: "Gourmet Bistro Chain",
    category: "e-commerce",
    duration: "4 months",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=500&h=300&fit=crop",
    description: "Complete point-of-sale system with inventory management, staff scheduling, and customer loyalty programs.",
    fullDescription: "Developed a comprehensive restaurant management system for Gourmet Bistro Chain, including POS functionality, inventory tracking, staff scheduling, customer loyalty programs, and real-time analytics. The system supports multi-location management and integrates with popular payment processors and delivery platforms.",
    technologies: ["React", "Node.js", "MySQL", "Socket.io", "Stripe", "Twilio", "Chart.js"],
    results: [
      "40% faster order processing times",
      "30% reduction in food waste through better inventory tracking",
      "25% increase in customer retention via loyalty program",
      "15% improvement in staff scheduling efficiency"
    ],
    liveUrl: "https://pos.gourmetbistro.com",
    createdAt: "2024-07-10T00:00:00Z",
    updatedAt: "2024-07-10T00:00:00Z"
  },
  {
    Id: 8,
    title: "Educational Learning Management System",
    client: "EduTech Academy",
    category: "web-development",
    duration: "9 months",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop",
    description: "Comprehensive LMS with virtual classrooms, assignment management, and progress tracking.",
    fullDescription: "Built a feature-rich learning management system for EduTech Academy, supporting virtual classrooms, assignment distribution and grading, progress tracking, student-teacher communication, and course content management. The platform includes video conferencing capabilities, interactive whiteboards, and automated assessment tools.",
    technologies: ["Next.js", "Django", "PostgreSQL", "WebRTC", "Redis", "AWS S3", "Material-UI"],
    results: [
      "98% student engagement rate during remote learning",
      "50% reduction in grading time for teachers",
      "40% improvement in assignment submission rates",
      "Supporting 5000+ concurrent users"
    ],
    liveUrl: "https://lms.edutech-academy.com",
    createdAt: "2024-08-25T00:00:00Z",
    updatedAt: "2024-08-25T00:00:00Z"
  },
  {
    Id: 9,
    title: "Smart Home IoT Platform",
    client: "HomeAutomation Pro",
    category: "ai-automation",
    duration: "6 months",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop",
    description: "IoT platform for smart home automation with AI-driven energy optimization and security features.",
    fullDescription: "Developed a comprehensive smart home IoT platform for HomeAutomation Pro, featuring device management, automation rules, energy optimization through AI, security monitoring, and mobile app control. The system supports hundreds of IoT devices and includes predictive maintenance capabilities.",
    technologies: ["React", "Python", "InfluxDB", "MQTT", "TensorFlow", "Docker", "Grafana"],
    results: [
      "35% average energy savings for users",
      "99.9% system uptime achieved",
      "Integration with 200+ IoT device types",
      "60% reduction in false security alerts"
    ],
    liveUrl: "https://platform.homeautomation-pro.com",
    createdAt: "2024-09-12T00:00:00Z",
    updatedAt: "2024-09-12T00:00:00Z"
  }
];

export default mockPortfolioData;