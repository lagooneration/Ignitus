'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface MentorCardProps {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  imgUrl: string;
}

const MentorCard: React.FC<MentorCardProps> = ({ 
  id, 
  name, 
  role, 
  expertise, 
  imgUrl 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48 w-full">
        <Image 
          src={imgUrl} 
          alt={name}
          fill
          className="object-cover"
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

export default MentorCard;
