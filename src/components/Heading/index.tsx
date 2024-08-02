import { ElementType, ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'small' | 'medium' | 'big' | 'huge';
  uppercase?: boolean;
  colorDark?: boolean;
};


export const Heading = ({ children, as = 'h1', size = 'huge', uppercase = false, colorDark = true }: HeadingProps) => {
  const baseClasses = `(${colorDark} ? text-black : text-white) (${uppercase} ? uppercase : '')`;
  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    big: 'text-lg',
    huge: 'text-xl',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]}`;
  const Tag = as as keyof JSX.IntrinsicElements;
  return(
    <Tag className={combinedClasses}>
      {children}
    </Tag>
  );
};