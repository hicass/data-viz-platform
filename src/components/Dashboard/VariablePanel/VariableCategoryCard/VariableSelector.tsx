import { FC } from 'react';

export type VariableType = {
  id: number;
  title: string;
  description: string;
};

// Component to render a variables selector button
const VariableSelector: FC<VariableType> = ({ title }) => {
  return (
    <button className="rounded-full px-4 py-1 text-sm text-[#D5D5D5] bg-[#595959]/30 border-[#EEEEEE] border-[1px] hover:bg-[#CCFF00]/10 hover:border-[#C9FF3B] hover:text-[#C8E972]">
      {title}
    </button>
  );
};

export default VariableSelector;
