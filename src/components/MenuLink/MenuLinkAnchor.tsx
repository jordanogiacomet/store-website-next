'use client';
import { MouseEventHandler, ReactNode } from 'react';
import Link from 'next/link';

interface MenuLinkProps{
  children: ReactNode;
  href: string;
  target?: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
}

export const MenuLinkAnchor = ({ children, href, target = "_self", onClick }: MenuLinkProps) => {
  return(
    <Link href={href} target={target} onClick={onClick} className='text-pink-500 font-bold'>{children}</Link>
  );
};