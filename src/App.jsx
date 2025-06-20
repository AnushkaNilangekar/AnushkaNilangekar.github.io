import React from 'react';
import Sidebar from './components/Sidebar.jsx';
import Intro from './components/sections/Intro.jsx';
import About from './components/sections/About.jsx';
import Skills from './components/sections/Skills.jsx';
import Contact from './components/sections/Contact.jsx';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="pt-20">
        <Intro />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App; 