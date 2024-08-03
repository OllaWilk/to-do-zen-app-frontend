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
  required?: boolean;
  placeholder?: string;
}

const Textarea = ({
  name,
  label,
  minLength = 3,
  maxLength = 1000,
  maxHeight = 200,
  disabled,
  placeholder,
  required,
}: Props) => {
  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;
  const styleCss = {
    height: `${maxHeight}px`,
  };
  const astrid = required && ' *';

  return (
    <div className={style.formLabelWrap}>
      {label && (
        <label>
          {label}
          <span>{astrid}</span>
        </label>
      )}
      <textarea
        name={name}
        style={styleCss}
        maxLength={maxLength}
        disabled={disabled ? disabled : false}
        onChange={handleFormChange}
        placeholder={placeholder}
        minLength={minLength}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        value={(form as Record<string, any>)[name]}
        required={required}
      />
    </div>
  );
};

export { Textarea };
