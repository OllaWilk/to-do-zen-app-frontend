import React, { SyntheticEvent } from 'react';

import style from './ButtonSort.module.scss';
interface Props {
  value: string;
  label: string;
  handleSort: (e: SyntheticEvent<HTMLButtonElement>) => void;
}

export const ButtonSort = ({ value, label, handleSort }: Props) => {
  return (
    <button className={style.sortBtn} value={value} onClick={handleSort}>
      {label}
    </button>
  );
};
