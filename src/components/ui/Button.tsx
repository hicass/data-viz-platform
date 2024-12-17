import { FC } from 'react';

interface ButtonProps {
  text: string; // The text content displayed inside the button
  style?: string; // Optional additional classes for custom styling
  onClick: () => void; // Function to handle button click events
}

// Reusable Button component with consistent styling
const Button: FC<ButtonProps> = ({ text, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      // Default button styling, allowing optional styles via the `style` prop
      className={`border-lightGrey border-[1px] rounded p-2 ${style}`}
    >
      {text}
    </button>
  );
};

export default Button;
