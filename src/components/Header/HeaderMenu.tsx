import { ReactNode, FC } from 'react';

interface HeaderMenuProps {
  children: ReactNode;
}

export const HeaderMenu: FC<HeaderMenuProps> = ({ children }) => {
  return (
    <ul className='hidden md:flex flex-row gap-12'>
      {children}
    </ul>
  );
};