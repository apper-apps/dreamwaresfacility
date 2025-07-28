import mockPortfolioData from "@/services/mockData/portfolioData";

let portfolioData = [...mockPortfolioData];
let nextId = Math.max(...portfolioData.map(p => p.Id)) + 1;

export const portfolioService = {
  // Get all portfolio projects
  getAll: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...portfolioData]);
      }, 300);
    });
  },

  // Get portfolio project by ID
  getById: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const project = portfolioData.find(p => p.Id === parseInt(id));
        if (project) {
          resolve({ ...project });
        } else {
          reject(new Error(`Portfolio project with ID ${id} not found`));
        }
      }, 200);
    });
  },

  // Create new portfolio project
  create: (projectData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newProject = {
          ...projectData,
          Id: nextId++,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        portfolioData.push(newProject);
        resolve({ ...newProject });
      }, 400);
    });
  },

  // Update existing portfolio project
  update: (id, updateData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = portfolioData.findIndex(p => p.Id === parseInt(id));
        if (index !== -1) {
          portfolioData[index] = {
            ...portfolioData[index],
            ...updateData,
            Id: parseInt(id),
            updatedAt: new Date().toISOString()
          };
          resolve({ ...portfolioData[index] });
        } else {
          reject(new Error(`Portfolio project with ID ${id} not found`));
        }
      }, 400);
    });
  },

  // Delete portfolio project
  delete: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = portfolioData.findIndex(p => p.Id === parseInt(id));
        if (index !== -1) {
          const deletedProject = portfolioData.splice(index, 1)[0];
          resolve({ ...deletedProject });
        } else {
          reject(new Error(`Portfolio project with ID ${id} not found`));
        }
      }, 300);
    });
  },

  // Get projects by category
  getByCategory: (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = portfolioData.filter(p => p.category === category);
        resolve([...filtered]);
      }, 200);
    });
  },

  // Search projects
  search: (query) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = portfolioData.filter(p =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.client.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
        );
        resolve([...filtered]);
      }, 200);
    });
  }
};