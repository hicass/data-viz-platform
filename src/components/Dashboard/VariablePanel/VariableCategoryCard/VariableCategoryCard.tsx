import { FC, useState } from 'react';
import VariableCategoryRow, {
  VariableCategoryType,
} from './VariableCategoryRow';

interface VariableCategoryCardProps {
  variableCategoryData: VariableCategoryType[];
}

// Component to render a card that displays all Categories and their Variables
const VariableCategoryCard: FC<VariableCategoryCardProps> = ({
  variableCategoryData,
}) => {
  const [activeVariables, setActiveVariables] = useState<number[]>([]);

  const handleVariableSelect = ({ variableId }: { variableId: number }) => {
    setActiveVariables(
      (prev) =>
        prev.includes(variableId)
          ? prev.filter((id) => id !== variableId) // Remove if already active
          : [...prev, variableId] // Add if not active
    );
  };

  return (
    <article className="flex flex-col gap-6 mt-6 border-lightGrey border-[1px] bg-[#161618] rounded p-6">
      {variableCategoryData.map((category, idx) => (
        <VariableCategoryRow
          {...category}
          key={idx}
          activeVariables={activeVariables}
          onVariableSelect={handleVariableSelect}
        />
      ))}
    </article>
  );
};

export default VariableCategoryCard;
