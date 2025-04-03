import React, { useState, useEffect } from 'react';
import { 
  HomeIcon, 
  CodeIcon, 
  TargetIcon, 
  AwardIcon,
  Settings,
  LogOut,
  ChevronRight,
  Zap
} from 'lucide-react';

import profileImage from '/assets/profile.png';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  
  const navItems = [
    { name: 'home', icon: HomeIcon, label: 'Home', color: 'from-purple-500 to-pink-500' },
    { name: 'skills', icon: CodeIcon, label: 'Skills', color: 'from-blue-500 to-cyan-400' },
    { name: 'projects', icon: TargetIcon, label: 'Projects', color: 'from-emerald-500 to-teal-400' },
    { name: 'achievements', icon: AwardIcon, label: 'Achievements', color: 'from-amber-500 to-yellow-400' }
  ];

  // Auto cycle highlight effect for inactive items
  useEffect(() => {
    if (!isExpanded) {
      const interval = setInterval(() => {
        setHoverIndex(prev => {
          const next = prev === null ? 0 : (prev + 1) % navItems.length;
          return next === navItems.findIndex(item => item.name === activeSection) ? 
            (next + 1) % navItems.length : next;
        });
      }, 2000);
      return () => clearInterval(interval);
    }
    return () => {};
  }, [isExpanded, activeSection, navItems.length]);

  return (
    <div 
      className={`fixed top-0 left-0 h-screen ${isExpanded ? 'w-64' : 'w-20'} 
                bg-gray-900 text-white shadow-2xl transition-all duration-500 ease-out
                border-r border-gray-800 z-50 overflow-hidden`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black opacity-80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      
      {/* Pulse border when expanded */}
      <div className={`absolute ${isExpanded ? 'right-0' : '-right-1'} top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 opacity-70`}>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 w-2 h-16 bg-blue-400 rounded-l blur-sm animate-pulse"></div>
      </div>
      
      {/* Toggle expand button */}
      <button 
        className={`absolute top-6 -right-3 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center
                    shadow-lg z-10 transform transition-all duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <ChevronRight size={14} className="text-white" />
      </button>
      
      <div className="relative flex flex-col h-full z-10">
        {/* Profile Section */}
        <div className="flex flex-col items-center px-3 py-6 border-b border-gray-800/50">
          <div className="relative group mb-2">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-spin-slow opacity-70 blur-sm group-hover:opacity-100"></div>
            <div className="absolute inset-0.5 rounded-full bg-gray-900"></div>
            <img 
              src={profileImage} 
              alt="Saicharan Malde" 
              className="relative w-16 h-16 rounded-full object-cover border-2 border-gray-800 p-0.5 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900 flex items-center justify-center">
              <Zap size={10} className="text-white" />
            </div>
          </div>
          
          <div className={`text-center mt-2 transition-all duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="font-bold text-white text-lg tracking-wide">Saicharan Malde</h3>
            <div className="flex justify-center">
              <span className="inline-block px-2 py-1 mt-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                Full Stack Developer
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 pt-6 overflow-y-auto scrollbar-hide px-3">
          <div className={`mb-4 pl-2 transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-xs uppercase tracking-wider text-blue-400 font-bold">Menu</h3>
          </div>
          
          <div className="space-y-2">
            {navItems.map(({ name, icon: Icon, label, color }, index) => {
              const isActive = activeSection === name;
              const isHovered = hoverIndex === index && !isExpanded;
              
              return (
                <button 
                  key={name}
                  onClick={() => setActiveSection(name)}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className={`
                    relative w-full group flex items-center px-3 py-3 rounded-xl transition-all duration-300
                    ${isActive 
                      ? `bg-gradient-to-r ${color} text-white shadow-lg` 
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}
                  `}
                >
                  {/* Background glow effect for active or hovered items */}
                  {(isActive || isHovered) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-lg -z-10"></div>
                  )}
                  
                  {/* Icon with pop effect on hover */}
                  <div className={`relative ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                    <Icon className={`w-6 h-6 transition-all duration-300 ${isActive || isHovered ? 'scale-110' : ''}`} />
                    {isHovered && !isExpanded && (
                      <div className="absolute -inset-1 bg-blue-500/30 rounded-full animate-ping"></div>
                    )}
                  </div>
                  
                  {/* Label with slide-in effect */}
                  <span className={`ml-3 font-medium text-sm whitespace-nowrap transition-all duration-500
                    ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                    {label}
                  </span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <>
                      <div className="absolute right-2 w-1.5 h-8 bg-white/80 rounded-full"></div>
                      {!isExpanded && (
                        <div className="absolute -right-3 w-1 h-8 bg-white rounded-l-full"></div>
                      )}
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </nav>
      
      </div>
    </div>
  );
};

export default Sidebar;