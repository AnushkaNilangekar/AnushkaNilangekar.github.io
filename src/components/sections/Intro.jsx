import React from 'react';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro" className="section-wrapper flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h5 className="text-xl mb-8">Welcome to</h5>
        <h1 className="text-5xl font-bold mb-4">Anushka's Amethyst</h1>
        <p className="text-xl mb-8">Just my fun portfolio!</p>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="button cursor-pointer"
        >
          Learn more
        </Link>
      </div>
    </section>
  );
};

export default Intro; 