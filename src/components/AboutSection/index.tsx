// AboutSection.tsx
'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Atualiza a visibilidade com base na interseção
      },
      { threshold: 0.1 } // Ajuste o threshold conforme necessário
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observa a seção
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Para de observar ao desmontar
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative flex flex-col md:flex-row items-center justify-center bg-pink-100 text-black py-20">
      <div className="md:w-1/2 p-4">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }} // Animação baseada na visibilidade
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Nossa Motivação
        </motion.h2>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }} // Animação baseada na visibilidade
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          "Na nossa loja, acreditamos que cada produto conta uma história. 
          Estamos aqui para ajudar você a encontrar não apenas o que precisa, 
          mas também o que ama. Explore nossa seleção cuidadosamente escolhida e 
          descubra a alegria de encontrar algo especial que se encaixa perfeitamente na sua vida."
        </motion.p>
        <motion.button
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }} // Animação baseada na visibilidade
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          Ver Produtos
        </motion.button>
      </div>
      <div className="md:w-1/2 p-4 relative">
        <motion.img
          src="/background.jpg" // Substitua pelo caminho da sua imagem
          alt="Imagem representativa"
          className="w-full h-auto rounded-xl shadow-lg" // Aumentando o arredondamento e ajustando a sombra
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }} // Animação baseada na visibilidade
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
};

export default AboutSection;