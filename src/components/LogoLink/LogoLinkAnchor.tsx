import Link from 'next/link';
import Image from 'next/image';

interface LogoLinkAnchorProps {
  text: string;
  srcImg?: string;
  link: string;
}

export const LogoLinkAnchor = ({ text, srcImg = '', link }: LogoLinkAnchorProps) => {
  return (
    <Link className='no-underline text-pink-400 flex items-center font-bold' href={link}>
      {srcImg ? (
        <Image alt={text} src={srcImg} priority layout="fill" className="object-contain" />
      ) : (
        <span>{text}</span>
      )}
    </Link>
  );
};
