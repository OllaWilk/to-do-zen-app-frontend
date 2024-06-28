import React, { useContext } from 'react';
import { FormContext } from '../../../../utils/hooks';
import styles from './Input.module.scss';

type Type =
  | 'text'
  | 'number'
  | 'password'
  | 'radio'
  | 'submit'
  | 'file'
  | 'email'
  | 'date';

interface Props {
  name: string;
  type?: Type;
  label?: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
  date?: boolean;
  required?: boolean;
}

const getCurrentDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const Input = ({
  label,
  name,
  type = 'text',
  placeholder,
  maxLength,
  minLength,
  disabled,
  required,
}: Props) => {
  const { form, handleFormChange } = useContext(FormContext);

  const inputValue =
    type === 'date' && !form[name as keyof typeof form]
      ? getCurrentDate()
      : form[name as keyof typeof form] || '';

  const astrid = required && ' *';
  return (
    <div className={`${disabled ? styles.disabled : styles.formLabelWrap}`}>
      {label && (
        <label htmlFor={name}>
          {label}
          <span>{astrid}</span>
        </label>
      )}
      <input
        type={type}
        name={name}
        value={inputValue}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
        onChange={handleFormChange}
        disabled={!disabled ? disabled : false}
        id={name}
        required={required}
      />
    </div>
  );
};
