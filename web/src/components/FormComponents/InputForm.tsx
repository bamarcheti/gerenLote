import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { useField } from '@unform/core';
import { useEffect, useRef, useState } from 'react';

interface Props {
  type: string;
  name: string;
  placeholder?: string;
  label?: string;
  labelStyle?: string;
  inputStyle?: string;
  disabled?: boolean;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const InputForm = ({
  onChange,
  type,
  name,
  placeholder,
  label,
  labelStyle,
  inputStyle,
  className,
  disabled,
  ...rest
}: InputProps) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error, clearError } = useField(name);
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
    clearError();
  };

  const toggleVisibility = () => {
    setIsVisible((visible) => !visible);
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    });
  }, [fieldName, registerField]);

  return (
    <div className={`flex flex-col text-sm ${className || ''}`}>
      <label
        htmlFor={name}
        className={labelStyle || `py-1 font-medium ${error ? ' text-error' : 'text-textA'}`}
      >
        {label}
      </label>
      <div
        className={`relative border rounded ${
          error
            ? 'border-error focus:border-error focus:ring-error'
            : 'text-textA border-clean focus:border-primary focus:ring-primary'
        }`}
      >
        <input
          type={isVisible ? 'text' : type}
          name={name}
          id={fieldName}
          placeholder={placeholder}
          defaultValue={defaultValue}
          ref={inputRef}
          onChange={(e) => handleChange(e)}
          disabled={disabled}
          className={
            inputStyle ||
            `w-full border rounded focus:ring-1 p-2 focus:outline-none
          ${
            error
              ? 'border-error focus:border-error focus:ring-error'
              : 'text-textA border-clean focus:border-primary focus:ring-primary'
          }
              `
          }
          {...rest}
        />
        {type === 'password' &&
          (isVisible ? (
            <EyeSlashIcon
              onClick={toggleVisibility}
              className="absolute inset-y-0 mr-2 mt-2 right-0 w-5 h-5 text-textA items-center cursor-pointer"
            />
          ) : (
            <EyeIcon
              onClick={toggleVisibility}
              className="absolute inset-y-0 mr-2 mt-2 right-0 w-5 h-5 text-textA items-center cursor-pointer"
            />
          ))}
      </div>
      {error && <span className="text-error text-xs mt-1 ml-1">{error}</span>}
    </div>
  );
};

export default InputForm;
