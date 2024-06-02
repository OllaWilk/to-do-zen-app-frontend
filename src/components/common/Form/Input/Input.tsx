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
  | 'datetime-local';

interface Props {
  name: string;
  type?: Type;
  label?: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
  date?: boolean;
}

export const Input = ({
  label,
  name,
  type = 'text',
  placeholder,
  maxLength,
  minLength,
  disabled,
}: Props) => {
  const { form, handleFormChange } = useContext(FormContext);

  return (
    <div
      className={disabled ? `${styles.disabled}` : `${styles.formLabelWrap}`}
    >
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        value={form[name as keyof typeof form] || ''}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
        onChange={handleFormChange}
        disabled={!disabled ? disabled : false}
        id={name}
      />
    </div>
  );
};
