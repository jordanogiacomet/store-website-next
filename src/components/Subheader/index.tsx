import React from 'react';
import { Dropdown } from '../Dropdown';

export const Subheader = () => {
  return (
    <div className='p-6 bg-pink-200 h-16'>
      <ul className='flex flex-row justify-center items-center gap-28'>
        <li>
          <Dropdown label="Acessórios" items={['Relógios', 'Bijuterias', 'Óculos']} />
        </li>
        <li>
          <Dropdown label="Promoções" items={['Descontos', 'Ofertas Especiais']} />
        </li>
        <li>
          <Dropdown label="Boca" items={['Batom', 'Gloss', 'Lápis de Boca']} />
        </li>
        <li>
          <Dropdown label="Face" items={['Base', 'Pó Compacto', 'Blush']} />
        </li>
        <li>
          <Dropdown label="Olhos" items={['Máscara de Cílios', 'Sombra', 'Delineador']} />
        </li>
      </ul>
    </div>
  );
};

