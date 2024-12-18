import { FC } from 'react';

interface ButtonProps {
  text?: string; // The text content displayed inside the button
  style?: string; // Optional additional classes for custom styling
  onClick: () => void; // Function to handle button click events
  // Type of button: 'text' for a simple text button, 'exit' for an exit button,
  // 'blank' for a button with no styling
  variant?: 'text' | 'exit' | 'blank';
}

// Reusable Button component with consistent styling
const Button: FC<ButtonProps> = ({ text, onClick, style, variant }) => {
  if (variant === 'exit') {
    return (
      <button onClick={onClick}>
        {/* This is an "X" icon for exit buttons */}
        <img src="./assets/x-icon.svg" />
      </button>
    );
  }

  if (variant === 'blank') {
    <button onClick={onClick} className={style}>
      {text}
    </button>;
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
