import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Layers, 
  TerminalSquare, 
  Briefcase, 
  Award,
  CheckCircle
} from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages');
  const [animatedSkills, setAnimatedSkills] = useState([]);
  
  const skillCategories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: "React JS", proficiency: 90 },
        { name: "HTML5", proficiency: 95 },
        { name: "CSS", proficiency: 85 },
        { name: "JavaScript", proficiency: 88 },
        { name: "PHP", proficiency: 75 },
        { name: "MySQL", proficiency: 80 },
        { name: "Python", proficiency: 85 },
        { name: "C++", proficiency: 65 }
      ]
    },
    {
      id: 'libraries',
      title: 'Libraries & Frameworks',
      icon: Layers,
      skills: [
        { name: "NumPy", proficiency: 85 },
        { name: "Pandas", proficiency: 90 },
        { name: "Matplotlib", proficiency: 80 },
        { name: "Seaborn", proficiency: 75 },
        { name: "SK-learn", proficiency: 78 },
        { name: "TensorFlow", proficiency: 65 },
        { name: "Bootstrap", proficiency: 85 },
        { name: "Tailwind CSS", proficiency: 90 }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Technologies',
      icon: TerminalSquare,
      skills: [
        { name: "AWS Cloud (EC2, S3)", proficiency: 75 },
        { name: "Git & GitHub", proficiency: 88 },
        { name: "Power BI", proficiency: 85 },
        { name: "Excel", proficiency: 90 },
        { name: "Kaggle", proficiency: 80 },
      ]
    },
    {
      id: 'specializations',
      title: 'Specializations',
      icon: Briefcase,
      skills: [
        { name: "Cyber Security", proficiency: 80 },
        { name: "Cryptography", proficiency: 75 },
        { name: "Web Exploitation", proficiency: 85 },
        { name: "Social Engineering", proficiency: 70 },
        { name: "Data Analysis", proficiency: 90 },
        { name: "Machine Learning", proficiency: 75 },
        { name: "Full Stack Development", proficiency: 85 }
      ]
    }
  ];

  const certifications = [
    {
      title: "Data Analysis",
      issuer: "LinkedIn Learning",
      date: "Feb, Nov 2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png"
    },
    {
      title: "LAN and WIFI Network Design",
      issuer: "Internet Society (ISOC)",
      date: "Oct 2023",
      logo: "https://www.internetsociety.org/wp-content/uploads/2018/06/ISOC-Logo-HEX-B.png"
    },
    {
      title: "Python for Data Science",
      issuer: "Coursera",
      date: "Aug 2023",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png"
    }
  ];

  // Animate skills appearing one by one
  useEffect(() => {
    const currentSkills = skillCategories.find(cat => cat.id === activeTab)?.skills || [];
    setAnimatedSkills([]);
    
    currentSkills.forEach((skill, index) => {
      setTimeout(() => {
        setAnimatedSkills(prev => [...prev, skill.name]);
      }, index * 100);
    });
  }, [activeTab]);

  const getColorClass = (proficiency) => {
    if (proficiency >= 90) return "from-blue-600 to-violet-600";
    if (proficiency >= 80) return "from-blue-500 to-indigo-500";
    if (proficiency >= 70) return "from-blue-400 to-indigo-400";
    return "from-blue-300 to-indigo-300";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Technical Skills & Expertise
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities, expertise, and professional certifications in software development and data science.
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Category Selection */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Award className="mr-2 text-blue-400" size={20} />
                <span>Skill Categories</span>
              </h3>
              
              <div className="space-y-3">
                {skillCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`w-full flex items-center p-3 rounded-lg transition-all ${
                      activeTab === category.id 
                        ? 'bg-gradient-to-r from-blue-900 to-indigo-900 shadow-lg' 
                        : 'hover:bg-gray-700'
                    }`}
                  >
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center mr-3
                      ${activeTab === category.id ? 'bg-blue-600' : 'bg-gray-700'}
                    `}>
                      <category.icon size={18} className="text-white" />
                    </div>
                    <span className="font-medium">{category.title}</span>
                    {activeTab === category.id && (
                      <div className="ml-auto w-2 h-8 bg-blue-400 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Certifications Preview */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <CheckCircle className="mr-2 text-blue-400" size={20} />
                  <span>Certifications</span>
                </h3>
                
                <div className="space-y-3">
                  {certifications.slice(0, 2).map((cert, index) => (
                    <div key={index} className="bg-gray-700 bg-opacity-50 rounded-lg p-3 flex items-center">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                        <div className="w-6 h-6 bg-gray-200 rounded"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{cert.title}</h4>
                        <p className="text-xs text-gray-400">{cert.issuer} · {cert.date}</p>
                      </div>
                    </div>
                  ))}
                  
                  {certifications.length > 2 && (
                    <button className="text-blue-400 text-sm flex items-center hover:text-blue-300 transition-colors">
                      View all {certifications.length} certifications
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Skills Display */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 shadow-xl border border-gray-700 h-full">
              {skillCategories.map(category => (
                <div 
                  key={category.id} 
                  className={`${activeTab === category.id ? 'block' : 'hidden'}`}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mr-4">
                      <category.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                      <p className="text-gray-400 text-sm">
                        {category.skills.length} skills with varying proficiency levels
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill, index) => (
                      <div 
                        key={skill.name}
                        className={`transform transition-all duration-300 ${
                          animatedSkills.includes(skill.name) 
                            ? 'translate-x-0 opacity-100' 
                            : 'translate-x-8 opacity-0'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-400">{skill.proficiency}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${getColorClass(skill.proficiency)}`}
                            style={{ width: `${skill.proficiency}%`, transition: "width 1s ease-in-out" }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
             
            </div>
          </div>
        </div>
        
        {/* Detailed Certifications Section */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Professional Certifications</h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mt-3"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-blue-400 transition-colors">{cert.title}</h3>
                </div>
                <div className="ml-16">
                  <p className="text-gray-300">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm">Issued {cert.date}</p>
                  <button className="mt-4 text-blue-400 text-sm hover:text-blue-300 transition-colors flex items-center">
                    View Certificate
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;