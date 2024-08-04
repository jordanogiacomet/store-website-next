import { ReactNode, FC } from 'react';

interface HeaderMenuProps {
  children: ReactNode;
}

export const HeaderMenu: FC<HeaderMenuProps> = ({ children }) => {
  return (
    <ul className='flex flex-row gap-12 hidden md:flex'>
      {children}
    </ul>
  );
};