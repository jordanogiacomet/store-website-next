import { ReactNode } from 'react'

interface MenuLinkRoot{
  children: ReactNode;
};

export const MenuLinkRoot = ({ children }: MenuLinkRoot) => {
  return <li className='flex flex-row gap-2'>{children}</li>
};