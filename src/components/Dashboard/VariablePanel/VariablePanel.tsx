import { FC } from 'react';
import { motion, Variants } from 'motion/react';
import Button from '../../ui/Button';
import VariableSearch from './VariableSearch';
import VariableCategoryCard, { VariableCategoryType } from './VariableCategoryCard/VariableCategoryCard';

const slideIn: Variants = {
  offscreen: {
    x: 500,
    opacity: 1,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6, // Increase duration for a slower transition
      ease: [0.25, 0.8, 0.25, 1], // Use an ease-in-out cubic-bezier curve for smoothness
    },
  },
};

interface VariablePanelProps {
  setPanelOpen: (isOpen: boolean) => void;
  variableCategoryData: VariableCategoryType[];
}

// Component to render the slide out Variable Panel
const VariablePanel: FC<VariablePanelProps> = ({ setPanelOpen, variableCategoryData }) => {
  return (
    <motion.aside
      variants={slideIn}
      initial="offscreen"
      whileInView="onscreen"
      className="absolute top-0 right-0 z-20 bg-[#0E0D0D] w-1/2 h-full border-lightGrey border-[1px] p-8"
    >
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl">Edit Variables</h2>
        <Button variant="exit" onClick={() => setPanelOpen(false)} />
      </div>

      <VariableSearch />
      <VariableCategoryCard variableCategoryData={variableCategoryData} />
    </motion.aside>
  );
};

export default VariablePanel;
