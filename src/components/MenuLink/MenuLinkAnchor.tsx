'use client';
import { MouseEventHandler, ReactNode, FC } from 'react';
import Link from 'next/link';

interface MenuLinkProps {
  children: ReactNode;
  href: string;
  target?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>; 
}

export const MenuLinkAnchor: FC<MenuLinkProps> = ({ children, href, target = "_self", onClick }) => {
  return (
    <Link href={href} target={target} onClick={onClick} className='text-pink-500 font-bold'>
      {children}
    </Link>
  );
};