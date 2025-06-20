import React from 'react';
import { Link } from 'react-scroll';

const Sidebar = () => {
  const navItems = [
    { id: 'intro', label: 'Welcome' },
    { id: 'about', label: 'Who I am' },
    { id: 'skills', label: 'What I do' },
    { id: 'contact', label: 'Get in touch' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[color:var(--background)]/80 backdrop-blur-md border-b border-[color:var(--accent)]/20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-[color:var(--secondary)]">
            Anushka Nilangekar
          </div>
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link cursor-pointer text-[color:var(--text-main)] hover:text-[color:var(--accent)] transition-colors duration-300"
                  activeClass="text-[color:var(--accent)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar; 