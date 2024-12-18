import { FC } from 'react';

export type VariableType = {
  id: number;
  title: string;
  description: string;
  isActive?: boolean;
  onClick?: () => void;
};

// Component to render a variables selector button
const VariableSelector: FC<VariableType> = ({ title, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
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
