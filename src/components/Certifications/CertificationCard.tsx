import React from 'react';
import { Award, Calendar } from 'lucide-react';

interface CertificationCardProps {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialURL?: string;
}

export default function CertificationCard({ 
  name, 
  issuer, 
  date, 
  credentialId, 
  credentialURL 
}: CertificationCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold text-navy-900 mb-2">{name}</h3>
          <p className="text-teal-600 font-medium mb-2">{issuer}</p>
          <div className="flex items-center text-gray-600 text-sm mb-3">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{date}</span>
          </div>
          {credentialId && (
            <p className="text-sm text-gray-600">
              Credential ID: {credentialId}
            </p>
          )}
        </div>
        <Award className="w-8 h-8 text-teal-600 flex-shrink-0" />
      </div>
      {credentialURL && (
        <a
          href={credentialURL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-teal-600 hover:text-teal-700 transition-colors text-sm"
        >
          
        </a>
      )}
    </div>
  );
}