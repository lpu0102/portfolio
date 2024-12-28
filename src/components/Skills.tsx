import React from 'react';

const skills = {
  'Cloud Platforms': {
    'AWS': 90,
    'Azure': 85,
    'VMware': 88
  },
  'Automation': {
    'PowerShell': 92,
    'Terraform': 85,
    'ARM Templates': 85
  },
  'Networking': {
    'VPC': 85,
    'DNS': 85,
    'DHCP': 80
  },
  'Security': {
    'IAM': 95,
    'Azure Key Vault': 90,
    'Multi-factor Authentication': 90
  },
  'Monitoring & Management': {
    'Azure Monitor': 85,
    'AWS CloudWatch': 85,
    'VMware Operations': 85
  },
  'Operating Systems': {
    'Windows Server': 95,
    'Linux (CentOS)': 85,
    'Linux (Ubuntu)': 85
  },
  'Other Skills': {
    'M365': 90,
    'Intune': 85,
    'MS Exchange Online': 85,
    'Active Directory': 90,
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-navy-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-navy-900 mb-16">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-navy-900 mb-6">{category}</h3>
              <div className="space-y-4">
                {Object.entries(categorySkills).map(([skill, level]) => (
                  <SkillBar key={skill} skill={skill} level={level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SkillBar = ({ skill, level }: { skill: string, level: number }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-gray-700">{skill}</span>
      <span className="text-teal-600">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-teal-600 h-2.5 rounded-full transition-all duration-1000"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);