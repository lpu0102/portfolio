import React from 'react';
import { Server, Cloud, Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-navy-900 mb-16">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <FeatureCard
            icon={<Cloud className="w-12 h-12 text-teal-600" />}
            title="Cloud Expert"
            description="Specialized in AWS, Azure, and VMware environments with extensive experience in cloud infrastructure management and optimization."
          />
          <FeatureCard
            icon={<Terminal className="w-12 h-12 text-teal-600" />}
            title="Automation Specialist"
            description="Proficient in PowerShell and Terraform, creating efficient automation solutions that streamline operations and reduce manual effort."
          />
          <FeatureCard
            icon={<Server className="w-12 h-12 text-teal-600" />}
            title="System Administrator"
            description="Over 6 years of experience in managing complex IT infrastructures, ensuring high availability and optimal performance."
          />
        </div>
        <div className="prose prose-lg max-w-4xl mx-auto">
          <p className="text-gray-600 leading-relaxed">
            As a dedicated System Administrator with over 6 years of experience, I've developed a passion for creating efficient, scalable, and secure IT infrastructures. My expertise spans across major cloud platforms including AWS, Azure, and VMware, where I've successfully implemented and managed critical systems for various organizations.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            I specialize in automation and infrastructure as code, using tools like PowerShell and Terraform to streamline operations and reduce manual intervention. My approach combines technical expertise with a strong focus on business objectives, ensuring that IT infrastructure supports and enhances organizational goals.
          </p>
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-navy-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);