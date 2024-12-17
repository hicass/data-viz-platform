import { FC } from 'react';

// Define the type for the props that the Card component will accept
export type CardType = {
  title: string;
  description: string;
  value: string;
};

// Component to render a single performance card
const Card: FC<CardType> = ({ title, description, value }) => {
  return (
    <article className="flex flex-col justify-between items-end bg-grey border-lightGrey border-[1px] rounded p-8">
      {/* Top section containing the title and description */}
      <div>
        <h4 className="text-xl">{title}</h4>
        <p className="text-sm text-[#BBBBBB] mt-2">{description}</p>
      </div>

      {/* Bottom section displaying the main value */}
      <span className="text-3xl font-bold">{value}</span>
    </article>
  );
};

export default Card;
