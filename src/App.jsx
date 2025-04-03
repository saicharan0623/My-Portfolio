import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Home from './components/home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';


function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch(activeSection) {
      case 'home': return <Home />;
      case 'skills': return <Skills />;
      case 'projects': return <Projects />;
      case 'achievements': return <Achievements />;
      default: return <Home />;
    }
  };

  return (
    <div className="flex bg-black text-white">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      <main className="ml-16 flex-1">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;