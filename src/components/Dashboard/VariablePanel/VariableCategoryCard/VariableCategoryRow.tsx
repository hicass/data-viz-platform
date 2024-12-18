import { FC } from 'react';
import VariableSelector, { VariableType } from './VariableSelector';

export type VariableCategoryType = {
  categoryTitle: string;
  variables: VariableType[];
};

// Component to render a single row of a Categories variables
const VariableCategoryRow: FC<VariableCategoryType> = ({
  categoryTitle,
  variables,
}) => {
  return (
    <section>
      <h4 className="text-sm">{categoryTitle}</h4>

      {variables ? (
        <div className='mt-4 flex flex-wrap gap-6'>
          {variables.map((variable, idx) => (
            <VariableSelector {...variable} key={idx} />
          ))}
        </div>
      ) : (
        <p>No Variables Found...</p>
      )}
    </section>
  );
};

export default VariableCategoryRow;
