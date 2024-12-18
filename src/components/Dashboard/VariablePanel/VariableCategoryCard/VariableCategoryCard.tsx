import { FC } from 'react';
import VariableCategoryRow, { VariableCategoryType } from './VariableCategoryRow';

interface VariableCategoryCardProps {
  variableCategoryData: VariableCategoryType[];
}

// Component to render a card that displays all Categories and their Variables
const VariableCategoryCard: FC<VariableCategoryCardProps> = ({
  variableCategoryData,
}) => {
  return (
    <article className='flex flex-col gap-6 mt-6 border-lightGrey border-[1px] bg-[#161618] rounded p-6'>
      {variableCategoryData.map((category, idx) => (
        <VariableCategoryRow {...category} key={idx} />
      ))}
    </article>
  );
};

export default VariableCategoryCard;
