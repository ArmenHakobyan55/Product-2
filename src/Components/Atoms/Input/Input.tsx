
import React from 'react';


interface InputProps {
  value: string;
  type: string;
  id: string
  placeholder: string
  required: boolean
  min?: number 
  max?: number 
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode
}

export const Input: React.FC<InputProps> = ({  value, type, id, min, max, placeholder, required, onChange }) => {
  return <input 
  min={min}
  max={max}
  type={type} 
  id={id} 
  value={value} 
  required={required}
  placeholder={placeholder}
  onChange={onChange} />;
};