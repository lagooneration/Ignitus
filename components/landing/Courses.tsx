  'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CourseCard from './CourseCard';

const courses = [
    {
      title: "Social Entrepreneurship",
      description: "Learn how to create sustainable businesses that address social problems and drive positive change in communities.",
      path: "/companions?subject=social-entrepreneurship",
      image: "/images/c3.png"
    },
    {
      title: "Inclusive Innovation",
      description: "Discover techniques for creating products and services that are accessible to all, regardless of background or ability.",
      path: "/companions?subject=inclusive-innovation",
      image: "/images/c1.png"
    },
    {
      title: "Research & Development",
      description: "Master the process of developing new products through systematic research and experimentation.",
      path: "/companions?subject=research-development",
      image: "/images/c2.png"
    }
];

const Courses = () => {
  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Courses</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Dive into specialized courses designed to help you make a <br /> positive impact on society
          through innovation.
        </p>
      </motion.div>      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            index={index}
            title={course.title}
            description={course.description}
            path={course.path}
            image={course.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Courses;