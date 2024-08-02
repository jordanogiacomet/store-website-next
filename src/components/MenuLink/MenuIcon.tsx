import { ElementType } from 'react'

interface MenuIconProps{
  icon: ElementType;
};

export const MenuIcon = ({ icon: Icon }: MenuIconProps) => {
  return(
    <Icon className='w-6 h-6 text-pink-500'/>
  );
};