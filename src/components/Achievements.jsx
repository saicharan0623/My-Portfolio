import React, { useState } from 'react';
import {
  Award,
  Trophy,
  Star,
  Target,
  Medal
} from 'lucide-react';

const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const achievementCategories = [
    {
      title: "Competition Achievements",
      icon: Trophy,
      color: "bg-purple-600",
      textColor: "text-purple-600",
      borderColor: "border-purple-600",
      achievements: [
        {
          title: "CTF Competition at IIT Kottayam",
          description: "Secured 75th Position in Cybersecurity Challenge",
          date: "August 2024"
        },
        {
          title: "Webathon Competition",
          description: "2nd Prize - Developed a complete website in 8 hours",
          date: "February 2024"
        },
        {
          title: "Computer Society India Project Expo",
          description: "2nd Prize for Hostel Leave Management Project",
          date: "August 2023"
        }
      ]
    },
    {
      title: "Coding & Technical Achievements",
      icon: Target,
      color: "bg-blue-500",
      textColor: "text-blue-500",
      borderColor: "border-blue-500",
      achievements: [
        {
          title: "LeetCode Badges",
          description: "Top 50 SQL Badge, Completed 50 Days Coding Challenge",
          date: "2024"
        },
        {
          title: "Cyber Security Recognition",
          description: "Top Performance in CTF and Cyber-Security Exercises by IN-SEC",
          date: "2023-2024"
        }
      ]
    },
    {
      title: "Leadership & Responsibilities",
      icon: Star,
      color: "bg-amber-500",
      textColor: "text-amber-500",
      borderColor: "border-amber-500",
      achievements: [
        {
          title: "Technical Head - NMIMS Tech Fiesta 2025",
          description: "Led website development and managed technical requirements",
          period: "September 2024 - March 2025"
        },
        {
          title: "Head of Cyber Security Club 'Cyber Owls STME'",
          description: "Organized events, optimized planning, and improved communication",
          period: "February 2022 - December 2024"
        },
        {
          title: "Student Placement Coordinator",
          description: "Assisted in student placement activities",
          period: "July 2024 - Present"
        }
      ]
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            ACHIEVEMENTS SHOWCASE
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>
        
        {/* Category Navigation */}
        <div className="flex justify-center mb-12 gap-4 flex-wrap">
          {achievementCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 ${
                activeCategory === index 
                  ? `${category.borderColor} ${category.textColor} bg-gray-800`
                  : 'border-gray-700 text-gray-400 hover:border-gray-500'
              }`}
            >
              <category.icon size={20} className={activeCategory === index ? category.textColor : ''} />
              <span className="font-bold">{category.title}</span>
            </button>
          ))}
        </div>
        
        {/* Main Content */}
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <div className={`p-4 rounded-full ${achievementCategories[activeCategory].color}`}>
              {React.createElement(achievementCategories[activeCategory].icon, { size: 32, className: "text-white" })}
            </div>
            <h2 className="text-3xl font-bold">{achievementCategories[activeCategory].title}</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievementCategories[activeCategory].achievements.map((achievement, idx) => (
              <div 
                key={idx} 
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-500 transition-all shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:-translate-y-1"
              >
                <div className={`w-12 h-1 ${achievementCategories[activeCategory].color} mb-4`}></div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-400 mb-4">{achievement.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className={`font-medium ${achievementCategories[activeCategory].textColor}`}>
                    {achievement.date || achievement.period}
                  </span>
                  <div className="flex gap-1">
                    {Array(3).fill(0).map((_, i) => (
                      <div key={i} className={`w-1 h-1 rounded-full ${achievementCategories[activeCategory].color} opacity-${70 - i * 20}`}></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-gray-800 bg-opacity-50 rounded-full border border-gray-700">
            <Medal size={24} className="text-yellow-500 mr-2" />
            <span className="text-gray-400">Excellence Through Dedication</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;