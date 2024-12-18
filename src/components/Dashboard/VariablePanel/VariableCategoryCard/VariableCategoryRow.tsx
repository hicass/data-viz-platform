import { FC } from 'react';
import VariableSelector, { VariableType } from './VariableSelector';

// Type for the variable category
export type VariableCategory = {
  categoryTitle: string;
  variables: VariableType[];
};

export interface VariableCategoryProps extends VariableCategory {
  activeVariables: number[]; // Array of active variable IDs
  onVariableSelect: ({ variableId }: { variableId: number }) => void; // Function to handle selection of a variable
  handleVariableMouseEnter: (
    title: string,
    description: string,
    id: number
  ) => void; // Function to handle mouse enter event for showing variable context window
  handleVariableMouseLeave: () => void; // Function to handle mouse leave event for hiding variable context window
}

// Component to render a single row of a Categories variables
const VariableCategoryRow: FC<VariableCategoryProps> = ({
  categoryTitle,
  variables,
  activeVariables,
  onVariableSelect,
  handleVariableMouseEnter,
  handleVariableMouseLeave,
}) => {
  return (
    <section>
      <h4 className="text-sm">{categoryTitle}</h4>

      {/* Render variables if available, otherwise show a message */}
      {variables ? (
        <div className="mt-4 flex flex-wrap gap-4">
          {variables.map((variable, idx) => (
            <VariableSelector
              {...variable}
              key={idx}
              isActive={activeVariables.includes(variable.id)}
              onClick={() => onVariableSelect({ variableId: variable.id })}
              handleVariableMouseEnter={handleVariableMouseEnter}
              handleVariableMouseLeave={handleVariableMouseLeave}
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
