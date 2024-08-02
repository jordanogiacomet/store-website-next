import { ReactNode } from 'react'
import { Heading } from '../Heading';

interface LogoLinkRootProps {
  children: ReactNode;
};

export const LogoLinkRoot = ({ children }: LogoLinkRootProps) => {
  return(
    <Heading size='huge' uppercase colorDark className='font-bold'>{children}</Heading>
  );
};