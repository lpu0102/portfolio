import React from 'react';

export default function ProfilePhoto() {
  return (
    <div className="mb-8 relative">
      <div className="w-56 h-56 mx-auto relative">
        {/* Decorative ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 animate-pulse" />
        
        {/* Image container */}
        <div className="absolute inset-1 rounded-full bg-white p-1">
          <img
            //src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80"
            src="https://i.imgur.com/37PlAQe.png"
            alt="Rajesh Reddy"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}