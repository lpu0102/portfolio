import React from 'react';
import CertificationCard from './CertificationCard';

const certifications = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "Aug 2024",
    credentialId: "EC1E4D9BC9E831C",
    credentialURL: "https://learn.microsoft.com/en-us/users/rajeshreddyg-1465/credentials/ec1e4d9bc9e831c?ref=https%3A%2F%2Fwww.google.com%2F"
  },
  {
    name: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    date: "Aug 2024",
    credentialId: "2FE504E2E7250826",
    credentialURL: "https://learn.microsoft.com/en-us/users/rajeshreddyg-1465/credentials/2fe504e2e7250826?ref=https%3A%2F%2Fwww.google.com%2F"
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "Mar 2023",
    credentialId: "37NLTVP23EE53ELR",
    credentialURL: "https://aws.amazon.com/verification"
  },
  {
    name: "VMware Certified Professional",
    issuer: "VMware",
    date: "Jun 2021",
    credentialId: "VCP-0057-3748-8361-9101",
    credentialURL: "https://vmware.com/certification"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-navy-900 mb-16">
          Professional Certifications
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div
              key={cert.credentialId}
              className="opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <CertificationCard {...cert} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}