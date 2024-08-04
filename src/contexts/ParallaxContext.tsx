'use client';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ParallaxContextType {
  offsetY: number;
}

const ParallaxContext = createContext<ParallaxContextType>({ offsetY: 0 });

export const useParallax = () => useContext(ParallaxContext);

interface ParallaxProviderProps {
  children: ReactNode; 
}

export const ParallaxProvider: React.FC<ParallaxProviderProps> = ({ children }) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ParallaxContext.Provider value={{ offsetY }}>
      {children} 
    </ParallaxContext.Provider>
  );
};