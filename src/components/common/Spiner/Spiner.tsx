import React from 'react';
import { TbUfo } from 'react-icons/tb';
import style from './Spiner.module.scss';

const Spiner = () => {
  return (
    <div className={style.spinerWraper}>
      <div className={style.spinner}></div>
      <p>
        <TbUfo />
        Loading...
      </p>
    </div>
  );
};

export { Spiner };
