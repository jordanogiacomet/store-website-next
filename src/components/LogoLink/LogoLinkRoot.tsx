import { ReactNode, FC } from 'react';
import { Heading } from '../Heading';

interface LogoLinkRootProps {
  children: ReactNode;
}

export const LogoLinkRoot: FC<LogoLinkRootProps> = ({ children }) => {
  return (
    <Heading size='huge' uppercase colorDark className='font-bold'>
      {children}
    </Heading>
  );
};