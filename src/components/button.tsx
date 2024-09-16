import React from 'react';

interface ButtonProps {
  onClick: () => void;
  backgroundColor: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, backgroundColor, text }) => {
  return (
    <button
      className={`${backgroundColor} text-white font-bold py-2 px-4 rounded-lg`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
