import React from 'react';
import { Dropdown } from '../Dropdown';

interface SubheaderProps {
  categories: { label: string; items: string[] }[];
}

const Subheader: React.FC<SubheaderProps> = React.memo(({ categories }) => {
  return (
    <div className='p-6 bg-gradient-to-r from-purple-200 via-pink-200 to-pink-300 h-16 shadow-lg rounded-lg'>
      <ul className='flex flex-row justify-center items-center gap-8'>
        {categories.map((category, index) => (
          <li key={index} className='transition-transform transform hover:scale-105'>
            <Dropdown label={category.label} items={category.items} />
          </li>
        ))}
      </ul>
    </div>
  );
});

Subheader.displayName = 'Subheader';

export default Subheader;