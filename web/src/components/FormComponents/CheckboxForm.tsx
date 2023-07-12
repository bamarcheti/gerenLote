import { useField } from '@unform/core';
import { useEffect, useRef, useState } from 'react';

interface Props {
  name: string;
  label: string;
}

const CheckboxForm = ({ name, label, ...rest }: Props) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [value, setValue] = useState(false);

  const handleChange = (event: any) => {
    setValue(event.target.checked);
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'checked',
      setValue: (ref: any, value: any) => {
        setValue(value);
      }
    });
  }, [fieldName, registerField]);

  return (
    <div className="flex flex-col text-sm">
      <div className="flex">
        <label className={`py-1 font-medium ${error ? ' text-error' : 'text-textA'}`}>
          <input
            type="checkbox"
            defaultChecked={defaultValue}
            ref={inputRef}
            checked={value}
            onChange={handleChange}
            id={fieldName}
            className="accent-primary"
            {...rest}
          />
        </label>
        <span className={`py-1 ml-2 font-medium ${error ? ' text-red-500' : 'text-textA'}`}>
          {label}
        </span>
      </div>
      {error && <span className="text-error text-xs ml-1">{error}</span>}
    </div>
  );
};

export default CheckboxForm;
