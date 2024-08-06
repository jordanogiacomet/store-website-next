import FeaturedProducts from '@/components/FeaturedProducts';
import React from 'react';
import ParallaxBackground from '@/components/ParallaxBackground'; // Adjust the import path as necessary
import dragonScales from '../../public/dragon-scales.png'; 


export default function Home() {
  return (
    <main className='md:mt-[154px] bg-transparent h-screen relative mt-[96px] '>
      <FeaturedProducts />
    </main>
  );
}