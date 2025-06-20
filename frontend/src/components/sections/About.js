import React from 'react';

const About = () => {
  const projects = [
    {
      image: '/images/pic01.jpg',
      title: 'Project One',
      description: 'A brief description.',
      link: '#'
    },
    {
      image: '/images/pic02.jpg',
      title: 'Project Two',
      description: 'A brief description.',
      link: '#'
    },
    {
      image: '/images/pic03.jpg',
      title: 'Project Three',
      description: 'A brief description.',
      link: '#'
    }
  ];

  return (
    <section id="about" className="section-wrapper bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6 animate-slide-in">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-lg">
              A passionate software developer with a focus on creating elegant solutions
              to complex problems. I love learning new technologies and building
              applications that make a difference!
            </p>
            <a href="#" className="button inline-block">View Resume</a>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            {/*<div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-75"></div>*/}
            <img
              src="/images/Grad 1.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-12">
          <h3 className="text-3xl font-bold text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="text-accent hover:text-white transition-colors"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 