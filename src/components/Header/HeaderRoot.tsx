import { ReactNode, FC } from 'react';

interface HeaderRootProps {
  children: ReactNode;
}

export const HeaderRoot: FC<HeaderRootProps> = ({ children }) => {
  return (
    <nav className='bg-white fixed top-0 left-0 right-0 z-10 opacity-100'>
      {children}
    </nav>
  );
};