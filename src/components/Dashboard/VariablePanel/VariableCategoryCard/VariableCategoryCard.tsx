import { FC, useState } from 'react';
import VariableCategoryRow, {
  VariableCategoryProps,
} from './VariableCategoryRow';
import VariableContextWindow from './VariableContextWindow';

interface VariableCategoryCardProps {
  variableCategoryData: VariableCategoryProps[];
}

// Component to render a card that displays all Categories and their Variables
const VariableCategoryCard: FC<VariableCategoryCardProps> = ({
  variableCategoryData,
}) => {
  // State to track which variables are selected (active) in the card
  const [activeVariables, setActiveVariables] = useState<number[]>([]);
  // State to track the variable's title and description for the context window
  const [contextWindowVariable, setContextWindowVariable] = useState<{
    id: number;
    title: string;
    description: string;
  } | null>(null);

  // Function to handle the selection/deselection of a variable
  const handleVariableSelect = ({ variableId }: { variableId: number }) => {
    setActiveVariables(
      (prev) =>
        prev.includes(variableId)
          ? prev.filter((id) => id !== variableId) // Remove if already active
          : [...prev, variableId] // Add if not active
    );
  };

  // Function to handle mouse enter event on a variable (show context window)
  const handleVariableMouseEnter = (
    title: string,
    description: string,
    id: number
  ) => {
    // Set the hovered variable info after 1.5 seconds
    const timeout = setTimeout(() => {
      setContextWindowVariable({ title, description, id });
    }, 1500);

    // Clear the timeout if the user moves the mouse before the timeout
    return () => clearTimeout(timeout);
  };

  // Function to handle mouse leave event from a variable (hide context window)
  const handleVariableMouseLeave = () => {
    setContextWindowVariable(null); // Reset hovered variable when mouse leaves
  };

  return (
    <article className="flex flex-col mt-6 border-lightGrey border-[1px] bg-[#161618] rounded">
      {/* div to render the variable rows */}
      <div className="flex flex-col gap-8 p-6">
        {variableCategoryData.map((category, idx) => (
          <VariableCategoryRow
            {...category}
            key={idx}
            activeVariables={activeVariables}
            onVariableSelect={handleVariableSelect}
            handleVariableMouseEnter={handleVariableMouseEnter}
            handleVariableMouseLeave={handleVariableMouseLeave}
          />
        ))}
      </div>

      {/* If there is a contextWindowVariable, render the context window */}
      {contextWindowVariable && (
        <VariableContextWindow {...contextWindowVariable} />
      )}
    </article>
  );
};

export default VariableCategoryCard;
