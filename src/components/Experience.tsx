import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "System Administrator",
    company: "eBay",
    period: "2021 - Present",
    achievements: [
      "Managed and optimized Windows and Linux servers across Azure and AWS environments",
      "Implemented cost-saving automation strategies using PowerShell and Python",
      "Enhanced monitoring with Azure Monitor and AWS CloudWatch",
      "Secured cloud infrastructure using IAM, Key Vault, and NSGs",
      "Managed containerized applications with Kubernetes and Docker"
    ]
  },
  {
    title: "Cloud Operations Engineer",
    company: "NTT DATA",
    period: "2019 - 2021",
    achievements: [
      "Designed and managed cloud infrastructure using Terraform and Azure DevOps",
      "Implemented disaster recovery solutions and conducted security assessments",
      "Managed Active Directory and endpoint security for 500+ users",
      "Optimized VMware virtualized environments for improved resource utilization"
    ]
  },
  {
    title: "Cloud Administrator",
    company: "Sify DataCenter",
    period: "2017 - 2019",
    achievements: [
      "Maintained physical servers and SAN/NAS storage infrastructure",
      "Designed scalable solutions for Azure and AWS environments",
      "Led projects to enhance system architecture and security",
      "Implemented Veeam backup solutions for improved data recovery"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-navy-900 mb-16">
          Professional Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 border-l-2 border-teal-600"
            >
              <div className="absolute -left-3 top-0">
                <div className="bg-teal-600 rounded-full p-2">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-navy-900">{exp.title}</h3>
                    <p className="text-xl text-teal-600">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}