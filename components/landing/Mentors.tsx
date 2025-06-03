'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// Sample mentor data - in a real app this would come from an API or database
const mentors = [
  {
    id: '1',
    name: 'Jaden Williams',
    role: 'Fulbright Scholar, MIT',
    expertise: ['Design Thinking', 'Assistive Technology', 'Impact Measurement'],
    imgUrl: '/images/d.jpg'
  },
  {
    id: '2',
    name: 'Sareen Clark',
    role: 'Masters in CS, UC San Diego',
    expertise: ['Computer Science', 'Bioinfomatics', 'Machine Learning'],
    imgUrl: '/images/b.jpg'
  },
  {
    id: '3',
    name: 'Debi Delgado',
    role: 'PHD in Chemical Engg, MIT',
    expertise: ['Chemical Engg', 'Research Methods', 'Innovation Strategy'],
    imgUrl: '/images/c.jpg'
  },
  {
    id: '4',
    name: 'Smith Johnson',
    role: 'Research Officer, AIIMS',
    expertise: ['Medical Officer', 'Research Innovation', 'Technology Policy'],
    imgUrl: '/images/a.jpg'
  }
];

interface MentorCardProps {
  id: string;   
    name: string;
    role: string;
    expertise: string[];
    imgUrl: string;
}

// Mentor Card Component
const MentorCard = ({id, name, role, expertise, imgUrl}: MentorCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">      <div className="relative h-64 w-full overflow-hidden group">
        {/* Squiggly lines that appear on hover */}
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg width="100%" height="100%" className="absolute inset-0">            <pattern id={`squiggly-pattern-${id}`} width="50" height="50" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <path d="M0,25 Q12.5,0 25,25 Q37.5,50 50,25" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" />
            </pattern>
            <rect width="100%" height="100%" fill={`url(#squiggly-pattern-${id})`} />
          </svg>
        </div>
        <Image 
          src={imgUrl} 
          alt={name}
          fill
          className="object-cover z-10 transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{role}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Expertise:</h4>
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill, index) => (
              <span 
                key={index} 
                className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <Link href={`/mentors/${id}`}>
          <Button variant="outline" className="w-full">
            View Profile
          </Button>
        </Link>
      </div>
    </div>
  );
};

// Main Mentors Component
const Mentors = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mentors</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Connect with industry professionals guiding you through your learning journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {mentors.map((mentor) => (
            <MentorCard 
              key={mentor.id}
              id={mentor.id}
              name={mentor.name}
              role={mentor.role}
              expertise={mentor.expertise}
              imgUrl={mentor.imgUrl}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/mentors">
            <Button variant="default" size="lg" className="px-8">
              Book a Session with a Mentor
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Mentors;