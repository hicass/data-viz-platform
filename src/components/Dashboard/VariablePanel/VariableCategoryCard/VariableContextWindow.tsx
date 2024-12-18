import { FC } from 'react';
import { motion, Variants } from 'motion/react';
import { VariableType } from './VariableSelector';

// Define the variants for the slideOpen animation
const slideOpen: Variants = {
  // Offscreen state when the element is hidden
  offscreen: {
    maxHeight: 0, // Start with a max height of 0 to collapse the element
    opacity: 0, // Start with 0 opacity to make it invisible
    visibility: 'hidden', // Make the element invisible but keep it in the layout
    overflow: 'hidden', // Prevent content from overflowing when the element is hidden
  },

  // Onscreen state when the element is visible and expanding
  onscreen: {
    maxHeight: 1000, // Set a sufficiently large maxHeight to fit the content
    opacity: 1, // Make the element fully visible
    visibility: 'visible', // Ensure the element is visible after transition
    transition: {
      duration: 0.3, // Duration of the transition
    },
  },
};

// Component to render a context window to see variable details
const VariableContextWindow: FC<VariableType> = ({ title, description }) => {
  return (
    <motion.section
      variants={slideOpen}
      initial="offscreen"
      whileInView="onscreen"
      className="bg-[#222324] p-6 border-t-lightGrey border-t-[1px]"
    >
      <h3 className="text-xl">{title}</h3>

      <p className="text-sm text-[#BBBBBB] mt-4">{description}</p>
    </motion.section>
  );
};

export default VariableContextWindow;
