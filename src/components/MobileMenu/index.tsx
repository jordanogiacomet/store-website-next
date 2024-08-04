import React, { useState } from 'react';
import { UserRound, Phone, ShoppingCart } from 'lucide-react';
import { Header } from '@/components/Header';
import { Menu, X } from 'lucide-react'; // Ensure you import Menu and X icons

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <UserRound className='w-6 h-6 text-pink-500' />, text: 'Conta', href: '/' },
    { icon: <Phone className='w-6 h-6 text-pink-500' />, text: 'Suporte', href: '/' },
    { icon: <ShoppingCart className='w-6 h-6 text-pink-500' />, text: 'Carrinho', href: '/' },
  ];

  return (
    <div className="md:hidden">
      <button 
        className="text-pink-500" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className='w-8 h-8' /> : <Menu className="w-8 h-8" />}
      </button>
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white p-4 shadow-lg flex justify-center items-center flex-col gap-4">
          {menuItems.map(({ icon, text, href }) => (
            <Header.MenuLinkRoot key={text}>
              {icon} 
              <Header.MenuLinkAnchor href={href} onClick={() => setIsOpen(false)}>
                {text}
              </Header.MenuLinkAnchor>
            </Header.MenuLinkRoot>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;