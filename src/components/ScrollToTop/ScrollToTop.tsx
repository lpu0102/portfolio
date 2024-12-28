import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useScrollPosition } from './useScrollPosition';

export default function ScrollToTop() {
  const scrollPosition = useScrollPosition();
  const showButton = scrollPosition > 400; // Show after 400px of scroll

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-4 right-4 md:bottom-8 md:right-8
        w-12 h-12 rounded-full
        bg-white/90 hover:bg-teal-50
        text-teal-600
        shadow-lg hover:shadow-xl
        flex items-center justify-center
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
        border border-teal-100 hover:border-teal-200
        ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}
      `}
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}