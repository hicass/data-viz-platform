import { FC } from 'react';

interface ButtonProps {
  text?: string; // The text content displayed inside the button
  style?: string; // Optional additional classes for custom styling
  onClick: () => void; // Function to handle button click events
  variant?: 'text' | 'exit'; // Type of button: 'text' for a simple text button, 'exit' for an exit button
}

// Reusable Button component with consistent styling
const Button: FC<ButtonProps> = ({ text, onClick, style, variant }) => {
  if (variant === 'exit') {
    return (
      <button onClick={onClick}>
        {/* This is an "X" icon for exit buttons */}
        <img src="./assets/x-icon.svg" className="opacity-70 hover:opacity-100"/>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      // Default button styling, allowing optional styles via the `style` prop
      className={`border-lightGrey border-[1px] rounded p-2 ${style}`}
    >
      {/* Render text for the 'text' button */}
      {text}
    </button>
  );
};

export default Button;
