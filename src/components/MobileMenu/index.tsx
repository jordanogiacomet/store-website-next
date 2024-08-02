import { useState } from 'react';
import { UserRound, Phone, ShoppingCart, Menu, X } from 'lucide-react';
import { Header } from '../Header';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button 
        className="text-pink-500" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className='w-8 h-8' /> : <Menu className="w-8 h-8" />}
      </button>
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white p-4 shadow-lg flex justify-center items-center flex-col gap-4">
          <Header.MenuLinkRoot>
            <UserRound className='w-6 h-6 text-pink-500' /> 
            <Header.MenuLinkAnchor href='/' onClick={() => setIsOpen(false)}>
              Conta
            </Header.MenuLinkAnchor>
         </Header.MenuLinkRoot>
         <Header.MenuLinkRoot>
         <Phone className='w-6 h-6 text-pink-500' /> 
          <Header.MenuLinkAnchor href='/' onClick={() => setIsOpen(false)}>
            Suporte
          </Header.MenuLinkAnchor>
          </Header.MenuLinkRoot>
          <Header.MenuLinkRoot>
            <ShoppingCart className='w-6 h-6 text-pink-500' /> 
            <Header.MenuLinkAnchor href='/' onClick={() => setIsOpen(false)}>
               Carrinho
            </Header.MenuLinkAnchor>
          </Header.MenuLinkRoot>
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;
