import React from 'react';

interface ProjectFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'security', label: 'Security' },
  { id: 'infrastructure', label: 'Infrastructure' }
];

export default function ProjectFilters({ selectedCategory, onCategoryChange }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onCategoryChange(id)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedCategory === id
              ? 'bg-teal-600 text-white'
              : 'bg-white text-navy-900 hover:bg-teal-50'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}