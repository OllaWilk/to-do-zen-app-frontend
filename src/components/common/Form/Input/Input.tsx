import React, { useContext } from 'react';
import { FormContext } from '../../../../utils/hooks';
import styles from './Input.module.scss';

type Type = 'text' | 'number' | 'password' | 'radio' | 'submit' | 'file';

interface Props {
  name: string;
  type?: Type;
  label?: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
}

const Input = ({
  label,
  name,
  type = 'text',
  placeholder,
  maxLength,
  minLength,
  disabled,
}: Props) => {
  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;

  return (
    <div
      className={disabled ? `${styles.disabled}` : `${styles.formLabelWrap}`}
    >
      {label && <label>{label}</label>}
      <input
        type={type}
        name={name}
        value={String(form[name])}
        onChange={handleFormChange}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
        disabled={!disabled ? disabled : false}
        checked={form[name]}
      />
    </div>
  );
};

export { Input };
