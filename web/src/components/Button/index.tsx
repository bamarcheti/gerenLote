/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface Props {
  onClick?: () => void;
  type?: 'submit' | 'button' | 'reset';
  variant?: 'primary' | 'secondary' | 'default' | 'cancel' | 'clean' | 'error';
  buttonText?: string;
  children?: React.ReactNode;
  styles?: string;
  className?: string;
  style?: any;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  children,
  buttonText,
  onClick,
  styles,
  disabled,
  type,
  variant = 'default',
  className,
  style
}) => {
  return (
    <button
      style={style}
      className={
        `${variant} transition duration-300 hover:bg-opacity-90 font-medium rounded text-base px-9 py-1 text-center block ${
          styles ? styles : null
        }` + className
      }
      type={type}
      onClick={onClick}
    >
      {children || buttonText}
    </button>
  );
};

export default Button;
