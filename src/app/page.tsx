import FeaturedProducts from '@/components/FeaturedProducts';
import React from 'react';
import ParallaxBackground from '@/components/ParallaxBackground'; // Adjust the import path as necessary
import dragonScales from '../../public/dragon-scales.png'; 
import Divider from '@/components/Divider/intex';

export default function Home() {
  return (
    <main className='mt-[154px] bg-transparent h-screen relative'>
      <ParallaxBackground src={dragonScales} speed={0.5} />
      <FeaturedProducts />
      <Divider />
    </main>
  );
}