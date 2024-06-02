import React, { useContext } from 'react';
import { FormContext } from '../../../../utils/hooks';
import style from './Textarea.module.scss';

interface Props {
  name: string;
  label?: string;
  minLength?: number;
  maxLength?: number;
  maxHeight?: number;
  disabled?: boolean;
  placeholder?: string;
}

const Textarea = ({
  name,
  label,
  minLength = 0,
  maxLength = 1000,
  maxHeight = 500,
  disabled,
  placeholder,
}: Props) => {
  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;
  const styleCss = {
    maxHeight: `${maxHeight}px`,
  };

  return (
    <div className={style.formLabelWrap}>
      {label && <label>{label}</label>}
      <textarea
        name={name}
        style={styleCss}
        maxLength={maxLength}
        disabled={disabled ? disabled : false}
        onChange={handleFormChange}
        placeholder={placeholder}
        minLength={minLength}
        value={(form as Record<string, any>)[name]}
      />
    </div>
  );
};

export { Textarea };
