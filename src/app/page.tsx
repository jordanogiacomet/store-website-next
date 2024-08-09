'use client';
import FeaturedProducts from '@/components/FeaturedProducts';
import React from 'react';
import ParallaxSection from '@/components/ParallaxSection';
import { ParallaxProvider } from '@/contexts/ParallaxContext';
import AboutSection from '@/components/AboutSection';




export default function Home() {
  return (
    <main className='md:mt-[154px] bg-transparent h-screen relative mt-[96px] '>
      <FeaturedProducts />
      <ParallaxProvider>
        <ParallaxSection /> 
      </ParallaxProvider>
      <AboutSection />
    </main>
  );
}