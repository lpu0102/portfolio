import React from 'react';

interface TechBadgeProps {
  name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="px-3 py-1 text-sm font-medium bg-teal-50 text-teal-700 rounded-full">
      {name}
    </span>
  );
}