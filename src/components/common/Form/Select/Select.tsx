import React from 'react';
import styles from './Select.module.scss';

interface Props {
  label?: string;
  name: string;
  options?: string[];
}
const Select = ({ label, name, options }: Props) => {
  return (
    <div className={styles.formLabelWrap}>
      {label && <label>{label}</label>}
      <select name={name}>
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
