import React from 'react';

interface ButtonProps {
onClick?: () => void;
name: string
type?: 'submit' | 'button'

children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ onClick, type, name}) => {
  return (
    <>
    <button  
    onClick={onClick}
    type={type}
   

  >
    
  {name}
    </button>
  
      </>
  );
};