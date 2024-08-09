// ParallaxContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const ParallaxContext = createContext({ scrollY: 0 });

export const useParallax = () => {
    return useContext(ParallaxContext);
};

export const ParallaxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ParallaxContext.Provider value={{ scrollY }}>
            {children}
        </ParallaxContext.Provider>
    );
};
