import { FC } from 'react';
import { motion, Variants } from 'motion/react';

// Defining the animation variants for the fade-in effect
const fadeIn: Variants = {
  offscreen: {
    opacity: 0, // Start with opacity 0 when the element is offscreen
  },
  onscreen: {
    opacity: 1, // Fade in to full opacity when element is onscreen
    transition: {
      duration: 0.3, // Transition duration for smooth fade-in effect
    },
  },
};

// Component to render a semi-transparent and blurred overlay on the screen
const ScreenBlur: FC = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial="offscreen"
      whileInView="onscreen"
      className="absolute top-0 right-0 bg-black/40 backdrop-blur-[2px] z-10 w-full h-screen"
    ></motion.div>
  );
};

export default ScreenBlur;
