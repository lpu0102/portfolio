import React, { useEffect, useState } from 'react';
import ProfilePhoto from './ProfilePhoto';
import SequentialScrollArrow from './Navigation/SequentialScrollArrow';
import ContactForm from './Contact/ContactForm';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const fullText = 'Dedicated Systems Administrator Specializing in Cloud and Automation';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-50 to-teal-50 px-4">
      <div className="container mx-auto py-20 sm:py-32">
        <div className="text-center">
          <ProfilePhoto />
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-navy-900 mb-6 animate-fade-in">
            Rajesh Reddy
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8 h-20 sm:h-24 font-light px-4">
            {displayText}
            <span className="animate-blink">|</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto px-4">
            Transforming infrastructure challenges into efficient, automated systems that enhance performance and scalability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 px-4">
            <button
              onClick={() => setIsContactFormOpen(true)}
              className="w-full sm:w-auto bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors text-lg"
            >
              Get in Touch
            </button>
            <a
              href="https://drive.google.com/file/d/1zaSYCGaFCGZXxtlEFxiNyxoJ7bOos5TI/view"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg hover:bg-teal-50 transition-colors text-lg"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
      <SequentialScrollArrow />
    </section>
  );
}