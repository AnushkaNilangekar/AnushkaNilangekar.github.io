import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLock, faCog, faDesktop, faLink, faGem } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const skills = [
    {
      icon: faCode,
      title: 'Web Development',
      description: 'Proficient in modern web technologies including React, Node.js, and various frontend frameworks.'
    },
    {
      icon: faLock,
      title: 'Security',
      description: 'Understanding of web security principles and best practices for secure application development.'
    },
    {
      icon: faCog,
      title: 'Backend Development',
      description: 'Experience with server-side programming, API development, and database management.'
    },
    {
      icon: faDesktop,
      title: 'UI/UX Design',
      description: 'Creating intuitive and responsive user interfaces with modern design principles.'
    },
    {
      icon: faLink,
      title: 'API Integration',
      description: 'Skilled in integrating third-party APIs and creating RESTful services.'
    },
    {
      icon: faGem,
      title: 'Clean Code',
      description: 'Focus on writing maintainable, efficient, and well-documented code.'
    }
  ];

  return (
    <section id="skills" className="section-wrapper bg-gradient-to-br from-secondary to-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">What I do</h2>
        <p className="text-center mb-16 max-w-3xl mx-auto">
          Passionate about creating efficient, scalable, and user-friendly applications
          using cutting-edge technologies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
            >
              <div className="icon-wrapper mb-4 mx-auto">
                <FontAwesomeIcon icon={skill.icon} className="text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{skill.title}</h3>
              <p className="text-center text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 