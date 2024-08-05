import FeaturedProducts from '@/components/FeaturedProducts';
import React from 'react';
import ParallaxBackground from '@/components/ParallaxBackground'; // Adjust the import path as necessary
import dragonScales from '../../public/dragon-scales.png'; 


export default function Home() {
  return (
    <main className='mt-[154px] bg-transparent h-screen relative'>
      <FeaturedProducts />
    </main>
  );
}