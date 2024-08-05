'use client';
import React from 'react';
import { Box, Inset, Card, Text, Strong } from '@radix-ui/themes';
import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Product 1', price: '$99', image: '/baby-1.png' },
  { id: 2, name: 'Product 2', price: '$199', image: '/baby-2.png' },
  { id: 3, name: 'Product 3', price: '$299', image: '/baby-3.png' },
  { id: 4, name: 'Product 4', price: '$399', image: '/baby-4.png' },
  { id: 5, name: 'Product 5', price: '$499', image: '/baby-5.png' },
  { id: 6, name: 'Product 6', price: '$599', image: '/baby-6.png' },
];

const FeaturedProducts: React.FC = () => {
  return (
    <div className="text-pink-500 py-12 grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 bg-pink-100 h-screen">
      {products.map(product => (
        <Box key={product.id} style={{ width: '200px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
          >
            <Card 
              size="1" 
              className="rounded-lg overflow-hidden h-full flex flex-col shadow-sm"
              style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            >
              <Box className="p-4 flex justify-center items-center">
                <Image 
                  className="object-contain w-full h-40 transition-all duration-300 transform hover:scale-105" 
                  src={product.image} 
                  width={200} 
                  height={200} 
                  alt={`${product.name} image`} 
                />
              </Box>
              <Box 
                className="bg-white rounded-t-lg mt-auto p-4"
                style={{ width: '100%', borderTop: '1px solid #eee' }}
              >
                <Text as="p" size="2" className="text-center font-extrabold">
                  <Strong>{product.name}</Strong> - {product.price}
                </Text>
              </Box>
            </Card>
          </motion.div>
        </Box>
      ))}
    </div>
  );
};

export default FeaturedProducts;
