'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '../../contexts/ParallaxContext';
import { StaticImageData } from 'next/image'; // Import StaticImageData

// Update the interface to accept both string and StaticImageData
interface ParallaxBackgroundProps {
  src: string | StaticImageData; 
  speed: number; 
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ src, speed }) => {
  const { scrollY } = useParallax();

  return (
    <motion.div
      style={{
        backgroundImage: `url(${typeof src === 'string' ? src : src.src})`, // Handle both types
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'calc(100vh)', // Adjust height to prevent overlap with Divider
        transform: `translateY(${scrollY * speed}px)`,
      }}
      className="absolute top-0 left-0 w-full z-[-1]" 
    />
  );
};

export default ParallaxBackground;