import { FC } from 'react';
import { VariableType } from './VariableSelector';

// Component to render a context window to see variable details
const VariableContextWindow: FC<VariableType> = ({ title, description }) => {
  return (
    <section className="bg-[#222324] p-6 border-t-lightGrey border-t-[1px]">
      <h3 className="text-xl">{title}</h3>

      <p className="text-sm text-[#BBBBBB] mt-4">{description}</p>
    </section>
  );
};

export default VariableContextWindow;
