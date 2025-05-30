'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Ctatwo from '../extra/CTATWO';

const Hero = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 dark:from-pink-300 dark:to-purple-300">
              Youth Leadership Organization
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mb-10">
              Choose a mentor and create AI companions to enhance your learning journey and make a positive impact on society
            </p>
            
            <div className="flex gap-4 flex-wrap">
              <Link href="/companions">
                <Button variant="default" size="lg" className="px-8 py-6 text-lg bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white border-0">
                  Explore Companions
                </Button>
              </Link>
              <Link href="/mentors">
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-purple-300 text-purple-500 hover:bg-purple-50">
                  Meet Our Mentors
                </Button>
              </Link>
            </div>
          </div>
          
            <Ctatwo />
          {/* <div className="md:w-1/2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-purple-100 dark:border-gray-700">
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;