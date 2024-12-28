import React from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';
import TechBadge from './TechBadge';

interface ProjectCardProps {
  title: string;
  organization: string;
  technologies: string[];
  summary: string[];
  impact: string;
}

export default function ProjectCard({ title, organization, technologies, summary, impact }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-navy-900">{title}</h3>
            <p className="text-teal-600 font-medium">{organization}</p>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-navy-600 hover:text-teal-600 transition-colors"
          >
            {isExpanded ? <ExternalLink className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        <div className={`transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-24'} overflow-hidden`}>
          <ul className="space-y-2 mb-4">
            {summary.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-navy-900 font-medium">
            <span className="text-teal-600">Impact:</span> {impact}
          </p>
        </div>
      </div>
    </div>
  );
}