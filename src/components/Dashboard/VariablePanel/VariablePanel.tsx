import { FC } from 'react';
import { motion, Variants } from 'motion/react';
import Button from '../../ui/Button';
import VariableSearch from './VariableSearch';
import VariableCategoryCard from './VariableCategoryCard/VariableCategoryCard';
import { VariableCategory } from './VariableCategoryCard/VariableCategoryRow';

// Define the variants for the slideOpen animation
const slideIn: Variants = {
  // Offscreen state when the element is hidden
  offscreen: {
    x: 200, // Start the panel off-screen to the right (500px from its final position)
  },

  // Onscreen state when the element is visible and sliding into place
  onscreen: {
    x: 0, // Move the panel to its final position (x = 0)
    transition: {
      duration: 0.6, // The transition will last 0.6 seconds
      ease: [0.25, 0.8, 0.25, 1], // Apply an easing function for a smooth effect
    },
  },
};

interface VariablePanelProps {
  setPanelOpen: (isOpen: boolean) => void; // Function to set whether the panel is open or closed
  variableCategoryData: VariableCategory[]; // Data for the variable categories to be displayed
}

// Component to render the slide out Variable Panel
const VariablePanel: FC<VariablePanelProps> = ({
  setPanelOpen,
  variableCategoryData,
}) => {
  return (
    <motion.aside
      variants={slideIn}
      initial="offscreen"
      whileInView="onscreen"
      className="absolute top-0 right-0 z-20 bg-[#0E0D0D] w-full lg:w-1/2 h-full border-lightGrey border-[1px] p-8"
    >
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl">Edit Variables</h2>
        <Button variant="exit" onClick={() => setPanelOpen(false)} />{' '}
        {/* Button to close the panel */}
      </div>
      <VariableSearch />{' '}
      {/* Include the VariableSearch component to allow users to search for variables */}
      <VariableCategoryCard variableCategoryData={variableCategoryData} />
    </motion.aside>
  );
};

export default VariablePanel;
