import React from 'react';
import ContactInfo from './ContactInfo';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Feel free to reach out for opportunities or collaborations. I'm always open to discussing new projects and ideas.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}