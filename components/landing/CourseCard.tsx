'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  title: string;
  description: string;
  path: string;
  index: number;
  image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  description, 
  path, 
  index,
  image
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Define background colors for different courses
  const backgrounds = [
    'bg-gradient-to-br from-pink-500 to-orange-400',
    'bg-gradient-to-br from-blue-500 to-teal-400',
    'bg-gradient-to-br from-violet-500 to-purple-400'
  ];
  
  return (
    <motion.div
      className={`rounded-xl p-1 ${backgrounds[index % backgrounds.length]}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg h-full flex flex-col">
        <div className="mb-4 relative h-40 w-full overflow-hidden rounded-lg">
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{description}</p>
        
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex justify-between items-center"
        >
          <Link href={path} passHref>
            <Button variant="default" size="lg" className="w-full">
              Start Learning
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
