import React from 'react';
import styles from './Input.module.scss';

type Type =
  | 'text'
  | 'number'
  | 'password'
  | 'radio'
  | 'submit'
  | 'file'
  | 'email'
  | any;

interface Props {
  name: string;
  type?: Type;
  label?: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
  value?: Type;
}

const Input = ({
  label,
  name,
  type = 'text',
  placeholder,
  maxLength,
  minLength,
  disabled,
  value,
}: Props) => {
  return (
    <div
      className={disabled ? `${styles.disabled}` : `${styles.formLabelWrap}`}
    >
      {label && <label>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
        disabled={!disabled ? disabled : false}
      />
    </div>
  );
};

export { Input };
