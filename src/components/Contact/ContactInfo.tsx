import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import CopyButton from './CopyButton';

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

const contactItems: ContactItem[] = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "ReddyRajesh2212@gmail.com",
    href: "mailto:ReddyRajesh2212@gmail.com"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Phone",
    value: "+1 563-499-7172",
    href: "tel:+15634997172"
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    value: "linkedin.com/in/rajesh-reddy-g",
    href: "https://linkedin.com/in/rajesh-reddy-g"
  }
];

export default function ContactInfo() {
  return (
    <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {contactItems.map((item) => (
        <div
          key={item.label}
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-4 md:p-6"
        >
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 p-3 bg-teal-50 rounded-lg text-teal-600">
              {item.icon}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-gray-500 mb-1">{item.label}</p>
              <a 
                href={item.href}
                className="block font-medium text-navy-900 hover:text-teal-600 transition-colors truncate"
                title={item.value}
              >
                {item.value}
              </a>
            </div>
            <div className="flex-shrink-0">
              <CopyButton value={item.value} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}