// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-100 text-center p-4 mt-6 border-t border-pink-300">
      <div className="container mx-auto">
        <p className="text-gray-700">
          &copy; {new Date().getFullYear()} Meu Site. Todos os direitos reservados.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;