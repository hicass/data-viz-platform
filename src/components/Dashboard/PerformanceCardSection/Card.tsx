import { FC } from 'react';

export type CardType = {
  title: string;
  description: string;
  value: string;
};

const Card: FC<CardType> = ({ title, description, value }) => {
  return (
    <article className='flex flex-col justify-between items-end bg-grey border-lightGrey border-[1px] rounded p-8'>
      <div>
        <h4 className='text-xl'>{title}</h4>
        <p className='text-sm text-[#BBBBBB] mt-2'>{description}</p>
      </div>

      <span className='text-3xl font-bold'>{value}</span>
    </article>
  );
};

export default Card;
