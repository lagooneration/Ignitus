'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Ctatwo from '../extra/CTATWO';
import Image from 'next/image';

const Hero = () => {  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background image with overlay */}
      
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="md:w-1/2 text-left">
            <Link href="/">
                <div className="flex items-center gap-2.5 cursor-pointer text-2xl font-bold text-pink-800 dark:text-gray-200 mb-6">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={62}
                        height={64}
                    />
                    ROIi
                </div>
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-pink-800 dark:text-pink-300">
              Calling Young Innovators & Leaders
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-200 max-w-3xl mb-10">
              Get industry experts and personalized AI conversations to solve real world problems. 
            </p>
            
            <div className="flex gap-4 flex-wrap">
              <Link href="/companions">
                <Button variant="default" size="lg" className="px-8 py-6 text-lg bg-pink-800 hover:bg-pink-400 text-white border-0">
                  Explore Companions
                </Button>
              </Link>
              <Link href="/mentors">
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-purple-300 text-black hover:bg-purple-400 hover:text-purple-600 hover:bg-opacity-20">
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