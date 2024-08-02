import { ReactNode } from 'react'

interface HeaderRootProps {
  children: ReactNode;
};

export const HeaderRoot = ({ children }: HeaderRootProps) => {
  return (
    <header className='bg-white p-6 flex justify-between'>{children}</header>
  );
};