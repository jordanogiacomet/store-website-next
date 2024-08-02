import { ReactNode } from 'react'

interface HeaderContainerProps {
  children: ReactNode;
}

export const HeaderContainer = ({ children }: HeaderContainerProps) => {
  return(
    <div className='flex flex-wrap items-center justify-between p-6'>{children}</div>
  );
};