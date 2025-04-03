import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Star, Code } from 'lucide-react';

// Import images using relative paths
// Note: Make sure these image files are in your public directory
const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  // Updated project data with proper image paths for Netlify
  const projects = [
    {
      title: "Hostel Leave Management System",
      description: "A responsive web application for streamlining leave application processes in educational institutions. Features include user authentication, request tracking, and approval workflows. Won 2nd Prize in CSI Project Expo.",
      image: "/assets/hostel.png", // Use relative path from public folder
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML"],
      category: "web",
      featured: true,
      demo: "http://nmimshyd.in/leave"
    },
  
    {
      title: "Laundry Management Web Application",
      description: "Comprehensive web application for laundry service management including features for scheduling pickups, tracking orders, and processing payments. Includes an admin panel for business operations.",
      image: "/assets/laundry.jpg", // Use relative path from public folder
      technologies: ["JavaScript", "PHP", "MySQL", "HTML", "Bootstrap"],
      category: "web",
      featured: false,
      demo: "#"
    },
    {
      title: "Boutique Database Management System",
      description: "Custom database solution designed specifically for boutiques to track customer measurements, generate bills, and monitor payment history, streamlining business operations and customer management.",
      image: "/assets/tailor.png", // Use relative path from public folder
      technologies: ["MySQL", "PHP", "Database Design"],
      category: "data",
      featured: false,
      demo: "https://lathatailor.web.app/"
    },
    {
      title: "NMIMS Tech Fiesta Website",
      description: "Official website for NMIMS Tech Fiesta showcasing club details, events, board members, and activity reports. Led development as Technical Head for the 2025 edition of the event.",
      image: "/assets/techfest.png", // Use relative path from public folder
      technologies: ["HTML", "PHP", "Bootstrap", "JavaScript"],
      category: "web",
      featured: true,
      demo: "http://nmimtechfeista.in"
    },
    {
      title: "Prism Web Works",
      description: "Founded and developed a web development startup specializing in custom website solutions and digital marketing strategies for clients, resulting in improved online presence and business growth.",
      image: "/assets/prism.png", // Use relative path from public folder
      technologies: ["React JS", "MongoDB", "HTML", "CSS", "JavaScript"],
      category: "web",
      featured: true,
      demo: "https://prism-web-works.web.app"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Get unique categories
  const categories = ['all', ...new Set(projects.map(project => project.category))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A collection of my work showcasing my skills in web development, data science, and database management.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-gray-800 rounded-full p-1 inline-flex">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm transition-all ${
                  filter === category 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden hover:shadow-xl transition-all hover:shadow-blue-900/20 border border-gray-700 group h-full flex flex-col"
            >
              {/* Project Image */}
              <div className="h-48 bg-gray-700 relative overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <Code size={40} className="text-gray-600" />
                  </div>
                )}
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <Star size={12} className="mr-1" />
                    Featured
                  </div>
                )}
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="text-xs bg-gray-900 bg-opacity-70 text-blue-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links - Modified to show only Live Demo, not GitHub */}
                <div className="flex justify-end items-center mt-auto pt-4 border-t border-gray-700">
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    <span>View Project</span>
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gray-800 bg-opacity-50 rounded-xl border border-gray-700">
          <h3 className="text-2xl font-bold mb-4">Interested in collaborating?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-all hover:shadow-blue-900/50">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;