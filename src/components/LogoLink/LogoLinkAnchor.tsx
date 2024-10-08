import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

interface LogoLinkAnchorProps {
  text: string;
  srcImg?: string;
  link: string;
}

export const LogoLinkAnchor: FC<LogoLinkAnchorProps> = ({ text, srcImg = '', link }) => {
  return (
    <Link className='no-underline text-pink-500 flex items-center font-bold' href={link}>
      {srcImg ? (
        <Image 
          alt={text} 
          src={srcImg} 
          priority 
          layout="fill" 
          className="object-contain" 
        />
      ) : (
        <span>{text}</span>
      )}
    </Link>
  );
};