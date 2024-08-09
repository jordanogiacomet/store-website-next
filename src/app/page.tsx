'use client';
import FeaturedProducts from '@/components/FeaturedProducts';
import React from 'react';
import ParallaxSection from '@/components/ParallaxSection';
import { ParallaxProvider } from '@/contexts/ParallaxContext';
import AboutSection from '@/components/AboutSection';
import MapComponent from '@/components/MapComponent';





export default function Home() {
  return (
    <main className='md:mt-[154px] bg-transparent h-screen relative mt-[84px] '>
      <FeaturedProducts />
      <ParallaxProvider>
        <ParallaxSection /> 
      </ParallaxProvider>
      <AboutSection />
      <div className='border-t-pink-300 border-t-[1px]'/>
      <MapComponent />
    </main>
  );
}