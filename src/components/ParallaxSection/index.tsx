// ParallaxSection.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { useParallax } from '../../contexts/ParallaxContext';
import { motion } from 'framer-motion';

const ParallaxSection = () => {
    const { scrollY } = useParallax();
    const [windowWidth, setWindowWidth] = useState(0); // Estado para armazenar a largura da janela
    const [centerPosition, setCenterPosition] = useState(0); // Estado para armazenar a posição central

    useEffect(() => {
        // Atualiza a largura da janela e a posição central quando o componente é montado
        setWindowWidth(window.innerWidth);
        setCenterPosition(window.innerHeight / 2);

        // Opcional: adicionar um listener para atualizar a largura da janela em caso de redimensionamento
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setCenterPosition(window.innerHeight / 2);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Calcular a transformação horizontal com base na posição de rolagem vertical
    const translateX = (scrollY - centerPosition) * 0.25; // Ajuste a intensidade do efeito

    // Definir limite para o movimento
    const maxTranslateX = windowWidth; // Limite à direita

    // Garantir que o translateX fique dentro dos limites
    const constrainedTranslateX = Math.min(maxTranslateX, translateX);

    return (
        <div className="relative h-[600px] overflow-hidden bg-black">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/image-child.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>
            <motion.div
                className="relative flex items-center justify-center h-full text-white"
                style={{ translateX: constrainedTranslateX }} // Usando translateX diretamente
                initial={{ x: 0, opacity: 1 }} // Começa no centro da tela e visível
                animate={{ x: constrainedTranslateX, opacity: constrainedTranslateX > 0 ? 1 : 0 }} // Animação baseada na rolagem
                transition={{ type: "spring", stiffness: 100, damping: 20 }} // Configurações de animação
            >
                <div className="text-center p-4">
                    <h1 className="text-5xl font-bold mb-4 text-gray-200">
                        Descubra Nossos Produtos
                    </h1>
                    <p className="text-lg mb-6 text-gray-200">
                        Explore uma variedade de produtos que atendem a todas as suas necessidades.
                    </p>
                    <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        Ver Produtos
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default ParallaxSection;