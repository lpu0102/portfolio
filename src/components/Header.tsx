import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const NavLinks = ({ scrollToSection }: { scrollToSection: (id: string) => void }) => (
  <>
    {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
      <button
        key={item}
        onClick={() => scrollToSection(item.toLowerCase())}
        className="block w-full md:w-auto text-left px-4 py-2 md:py-2 md:px-3 lg:px-4
                   text-gray-600 hover:text-teal-600 transition-colors
                   text-base md:text-sm lg:text-base whitespace-nowrap"
      >
        {item}
      </button>
    ))}
  </>
);

const SocialLinks = () => (
  <div className="flex items-center space-x-2 lg:space-x-4">
    <a 
      href="https://github.com/lpu0102" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-gray-600 hover:text-teal-600 transition-colors p-2"
      aria-label="GitHub Profile"
    >
      <Github size={20} />
    </a>
    <a 
      href="https://linkedin.com/in/rajesh-reddy-g" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-gray-600 hover:text-teal-600 transition-colors p-2"
      aria-label="LinkedIn Profile"
    >
      <Linkedin size={20} />
    </a>
    <a 
      href="mailto:ReddyRajesh2212@gmail.com" 
      className="text-gray-600 hover:text-teal-600 transition-colors p-2"
      aria-label="Email"
    >
      <Mail size={20} />
    </a>
  </div>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            onClick={() => scrollToSection('home')} 
            className="text-xl md:text-2xl font-bold text-navy-900 cursor-pointer whitespace-nowrap"
          >
            Rajesh<span className="text-teal-600">Reddy</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center">
              <div className="flex items-center space-x-1 lg:space-x-2">
                <NavLinks scrollToSection={scrollToSection} />
              </div>
              <div className="border-l border-gray-200 h-6 mx-3 lg:mx-4" />
              <SocialLinks />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 mt-4">
            <div className="flex flex-col space-y-2">
              <NavLinks scrollToSection={scrollToSection} />
              <div className="mt-4 pt-4 border-t border-gray-100">
                <SocialLinks />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}