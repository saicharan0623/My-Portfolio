import React, { useState, useEffect } from 'react';
import { 
  DownloadCloud, 
  Mail, 
  Github, 
  Linkedin, 
  Phone,
  Code,
  Database,
  Server,
  BarChart4,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/saicharan0623",
      color: "text-gray-300 hover:text-blue-400",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/maldesaicharan",
      color: "text-gray-300 hover:text-blue-400",
      label: "LinkedIn"
    }
  ];

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Bootstrap"]
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Mongo DB", "PHP"]
    },
    {
      title: "Data Science",
      icon: Database,
      skills: ["Python", "Web Scraping", "SQL", "Machine Learning"]
    },
    {
      title: "Analytics",
      icon: BarChart4,
      skills: ["Data Visualization", "Tableau", "Power BI", "Statistical Analysis"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className={`h-screen flex flex-col justify-center items-center px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between">
          {/* Left Column - Profile */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-blue-500 blur-md opacity-20 rounded-full transform -translate-x-2 translate-y-2"></div>
              <img 
                src="/assets/profile.png" 
                alt="Saicharan Malde" 
                className="w-40 h-40 rounded-full object-cover border-4 border-gray-800 shadow-2xl relative z-10"
              />
              <div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-4 border-gray-900 z-20"></div>
            </div>
            
            <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
              Malde Saicharan
            </h1>
            
            <div className="h-1 w-20 bg-blue-500 mx-auto md:mx-0 my-4"></div>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              B. Tech CSE - Data Science <span className="mx-2">|</span> Full Stack Developer <span className="mx-2">|</span> Data Analyst
            </p>

            <div className="mb-8 space-y-3">
              <div className="flex items-center justify-center md:justify-start">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                  <Mail className="text-blue-400" size={18} />
                </div>
                <a 
                  href="mailto:saicharanmalde@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  saicharanmalde@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                  <Phone className="text-blue-400" size={18} />
                </div>
                <span className="text-gray-300">+91 6304856382</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/assets/Sai_Charan.pdf" 
                download 
                className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg group"
              >
                <DownloadCloud className="mr-2 group-hover:animate-bounce" /> Download CV
              </a>

              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${social.color} transition-colors`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="md:w-1/2">
            <div className="bg-gray-900 bg-opacity-50 rounded-2xl p-6 backdrop-blur-sm shadow-xl border border-gray-800">
              <h2 className="text-2xl font-bold mb-6 text-center">
                <span className="border-b-2 border-blue-500 pb-1">Core Skills</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {skillCategories.map((category, index) => (
                  <div key={index} className="bg-gray-800 bg-opacity-50 rounded-xl p-5 hover:shadow-blue-900/20 hover:shadow-lg transition-all">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 bg-opacity-30 flex items-center justify-center mr-3">
                        <category.icon size={16} className="text-blue-400" />
                      </div>
                      <h3 className="font-bold text-lg">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                          <span className="text-sm text-gray-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 animate-bounce">
          <ArrowRight className="rotate-90 text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default Home;