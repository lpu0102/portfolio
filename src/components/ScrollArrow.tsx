import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function ScrollArrow() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const headerOffset = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button
      onClick={scrollToNextSection}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 
                 bg-white/90 hover:bg-teal-50 text-teal-600
                 w-12 h-12 rounded-full shadow-lg 
                 flex items-center justify-center
                 transition-all duration-300 ease-in-out
                 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
                 border border-teal-100 hover:border-teal-200
                 z-10"
      aria-label="Scroll to next section"
    >
      <ChevronDown className="w-6 h-6 animate-bounce" />
    </button>
  );
}