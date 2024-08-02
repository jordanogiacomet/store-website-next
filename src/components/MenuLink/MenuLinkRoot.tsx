import { ReactNode } from 'react'

interface MenuLinkRoot{
  children: ReactNode;
};

export const MenuLinkRoot = ({ children }: MenuLinkRoot) => {
  return <li className='flex gap-2 flex-row items-center border-b-4 border-transparent p-2 group hover:border-pink-500 transition-colors'>{children}</li>
};