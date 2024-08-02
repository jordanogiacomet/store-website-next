import { ReactNode } from 'react'

interface HeaderMenuProps{
  children: ReactNode;
};

export const HeaderMenu = ({ children }: HeaderMenuProps) => {
  return(
    <ul className='flex flex-row gap-12'>{children}</ul>
  );
};