import { ReactNode, FC } from 'react';

interface HeadingProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'small' | 'medium' | 'big' | 'huge';
  uppercase?: boolean;
  colorDark?: boolean;
  className?: string;
}

export const Heading: FC<HeadingProps> = ({
  children,
  as = 'h1',
  size = 'huge',
  uppercase = false,
  colorDark = true,
  className = '',
}) => {
  const baseClasses = `${colorDark ? 'text-black' : 'text-white'} ${uppercase ? 'uppercase' : ''}`;
  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    big: 'text-lg',
    huge: 'text-2xl',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${className}`;
  const Tag = as;

  return (
    <Tag className={combinedClasses}>
      {children}
    </Tag>
  );
};