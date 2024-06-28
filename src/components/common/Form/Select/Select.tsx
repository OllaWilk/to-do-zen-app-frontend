import React, { useContext } from 'react';
import { EventStatus } from 'types';
import { FormContext } from '../../../../utils/hooks';
import styles from './Select.module.scss';

interface Props {
  label?: string;
  name: string;
  options?: EventStatus[];
}

export const Select = ({ label, name, options }: Props) => {
  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;

  return (
    <div className={styles.formLabelWrap}>
      {label && <label>{label}</label>}
      <select
        name={name}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        value={(form as Record<string, any>)[name]}
        onChange={handleFormChange}
      >
        {options?.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};
