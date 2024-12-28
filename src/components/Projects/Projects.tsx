import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectFilters from './ProjectFilters';
import { featuredProjects, additionalProjects } from './projectsData';

export default function Projects() {
  const [showAll, setShowAll] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const allProjects = [...featuredProjects, ...(showAll ? additionalProjects : [])];
  const filteredProjects = selectedCategory === 'all'
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-navy-900 mb-16">
          Featured Projects
        </h2>

        <ProjectFilters 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 text-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-50 transition-colors"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                View All Projects
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}