import { FC } from 'react';

// Type for the variable data
export type VariableType = {
  id: number;
  title: string;
  description: string;
};

interface VariableSelectorProps extends VariableType {
  isActive?: boolean; // Optional prop to determine if the variable is active
  onClick: () => void; // Click handler for selecting the variable
  handleVariableMouseEnter: (
    title: string,
    description: string,
    id: number
  ) => () => void; // Mouse enter event handler
  handleVariableMouseLeave: () => void; // Mouse leave event handler
}

// Component to render a variables selector button
const VariableSelector: FC<VariableSelectorProps> = ({
  id,
  title,
  description,
  isActive,
  onClick,
  handleVariableMouseEnter,
  handleVariableMouseLeave,
}) => {
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => handleVariableMouseEnter(title, description, id)}
      onMouseLeave={handleVariableMouseLeave}
      className={`rounded-full px-4 py-1 text-sm  border-[1px] hover:bg-[#CCFF00]/10 hover:border-[#C9FF3B] hover:text-[#C8E972] ${
        isActive
          ? 'bg-[#CCFF00]/10 border-[#C9FF3B] text-[#C8E972]'
          : 'text-[#D5D5D5] bg-[#595959]/30 border-[#EEEEEE]'
      }`}
    >
      {title}
    </button>
  );
};

export default VariableSelector;
