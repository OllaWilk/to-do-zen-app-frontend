import React from 'react';
import style from './Spiner.module.scss';
import { TbUfo } from 'react-icons/tb';

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
