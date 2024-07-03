import React from 'react';
import { TbUfo } from 'react-icons/tb';
import style from './Spiner.module.scss';

interface Props {
  message?: string;
}
const Spiner = ({ message }: Props) => {
  return (
    <div className={style.spinerWraper}>
      <div className={style.spinner}></div>
      <p>
        <TbUfo />
        {message ? 'Loading...' : message}
      </p>
    </div>
  );
};

export { Spiner };
