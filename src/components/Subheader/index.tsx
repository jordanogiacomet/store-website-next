import React from 'react';
import { Dropdown } from '../Dropdown';

interface SubheaderProps {
  categories: { label: string; items: string[] }[];
}

const Subheader: React.FC<SubheaderProps> = React.memo(({ categories }) => {
  return (
    <div className='p-6 bg-pink-200 h-16'>
      <ul className='flex flex-row justify-center items-center gap-28'>
        {categories.map((category, index) => (
          <li key={index}>
            <Dropdown label={category.label} items={category.items} />
          </li>
        ))}
      </ul>
    </div>
  );
});

Subheader.displayName = 'Subheader';

export default Subheader;