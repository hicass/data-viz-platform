import { FC } from 'react';
import { VariableCategoryType } from './VariableCategoryCard';

// Component to render a single row of a Categories variables
const VariableCategoryRow: FC<VariableCategoryType> = ({
  categoryTitle,
  variables,
}) => {
  return (
    <section>
      <h4 className='text-sm'>{categoryTitle}</h4>
    </section>
  );
};

export default VariableCategoryRow;
