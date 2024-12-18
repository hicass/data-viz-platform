import { FC } from 'react';
import VariableCategoryRow from './VariableCategoryRow';

type VariableType = {
  title: string;
  description: string;
};

export type VariableCategoryType = {
  categoryTitle: string;
  variables: VariableType[];
};

interface VariableCategoryCardProps {
  variableCategoryData: VariableCategoryType[];
}

// Component to render a card that displays all Categories and their Variables
const VariableCategoryCard: FC<VariableCategoryCardProps> = ({
  variableCategoryData,
}) => {
  return (
    <article className='mt-6 border-lightGrey border-[1px] bg-[#161618] rounded p-6'>
      {variableCategoryData.map((category, idx) => (
        <VariableCategoryRow {...category} key={idx} />
      ))}
    </article>
  );
};

export default VariableCategoryCard;
