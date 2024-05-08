import React, { useContext } from 'react';
import { FormContext } from '../../../../utils/hooks';
import styles from './Select.module.scss';

interface Props {
  label?: string;
  name: string;
  options?: string[];
}
const Select = ({ label, name, options }: Props) => {
  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;

  return (
    <div className={styles.formLabelWrap}>
      {label && <label>{label}</label>}
      <select
        value={String(form[name])}
        onChange={handleFormChange}
        name={name}
      >
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Select };
