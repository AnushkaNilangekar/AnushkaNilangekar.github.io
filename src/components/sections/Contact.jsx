import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="contact" className="section-wrapper bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Get in touch</h2>
        <p className="text-center mb-12">Feel free to reach me by email or LinkedIn, or leave a message below!</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <input type="text" id="name" name="name" className="input-field" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" id="email" name="email" className="input-field" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" name="message" rows="5" className="input-field"></textarea>
            </div>
            <button type="submit" className="button">Send Message</button>
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <a href="mailto:anushkasn17@gmail.com" className="text-accent hover:text-white transition-colors">
                anushkasn17@gmail.com
              </a>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Social</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/AnushkaNilangekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-wrapper"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/in/anushka-nilangekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-wrapper"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 