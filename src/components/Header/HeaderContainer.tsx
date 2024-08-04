import { ReactNode, FC } from 'react';

interface HeaderContainerProps {
  children: ReactNode;
}

export const HeaderContainer: FC<HeaderContainerProps> = ({ children }) => {
  return (
    <div className='flex flex-wrap items-center justify-between p-6'>
      {children}
    </div>
  );
};