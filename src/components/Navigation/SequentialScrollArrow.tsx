import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const sections = ['about', 'skills', 'experience', 'projects', 'contact'];

export default function SequentialScrollArrow() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const scrollToNextSection = () => {
    if (currentSectionIndex < sections.length) {
      const nextSection = document.getElementById(sections[currentSectionIndex]);
      if (nextSection) {
        const headerOffset = 80;
        const elementPosition = nextSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        setCurrentSectionIndex(prev => Math.min(prev + 1, sections.length - 1));
      }
    }
  };

  // Update current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setCurrentSectionIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide arrow when reaching the last section
  if (currentSectionIndex >= sections.length - 1) return null;

  return (
    <button
      onClick={scrollToNextSection}
      className="fixed left-4 md:left-8 bottom-4 md:bottom-8
                 bg-white/90 hover:bg-teal-50 text-teal-600
                 w-12 h-12 rounded-full shadow-lg 
                 flex items-center justify-center
                 transition-all duration-300 ease-in-out
                 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
                 border border-teal-100 hover:border-teal-200
                 group z-40"
      aria-label={`Scroll to ${sections[currentSectionIndex]} section`}
    >
      <ChevronDown 
        className="w-6 h-6 transform group-hover:translate-y-0.5 transition-transform animate-bounce" 
      />
    </button>
  );
}