import { ElementType, FC } from 'react';

interface MenuIconProps {
  icon: ElementType; 
}

export const MenuIcon: FC<MenuIconProps> = ({ icon: Icon }) => {
  return (
    <Icon className='w-6 h-6 text-pink-500' />
  );
};