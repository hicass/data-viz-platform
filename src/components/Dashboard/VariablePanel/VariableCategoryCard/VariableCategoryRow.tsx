import { FC } from 'react';
import VariableSelector, { VariableType } from './VariableSelector';

export type VariableCategoryType = {
  categoryTitle: string;
  variables: VariableType[];
  activeVariables: number[];
  onVariableSelect: ({ variableId }: { variableId: number }) => void;
};

// Component to render a single row of a Categories variables
const VariableCategoryRow: FC<VariableCategoryType> = ({
  categoryTitle,
  variables,
  activeVariables,
  onVariableSelect,
}) => {
  return (
    <section>
      <h4 className="text-sm">{categoryTitle}</h4>

      {variables ? (
        <div className="mt-4 flex flex-wrap gap-6">
          {variables.map((variable, idx) => (
            <VariableSelector
              {...variable}
              key={idx}
              isActive={activeVariables.includes(variable.id)}
              onClick={() => onVariableSelect({ variableId: variable.id })}
            />
          ))}
        </div>
      ) : (
        <p>No Variables Found...</p>
      )}
    </section>
  );
};

export default VariableCategoryRow;
