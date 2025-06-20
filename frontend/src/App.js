import React from 'react';
import Sidebar from './components/Sidebar';
import Intro from './components/sections/Intro';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
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