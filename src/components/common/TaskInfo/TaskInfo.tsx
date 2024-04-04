import React, { useState } from 'react';
import { hartClaud, edit, deleteIcon } from '../../../images';
import style from './TaskInfo.module.scss';

interface Props {
  title: string;
  description: string;
}
const TaskInfo = ({ title, description }: Props) => {
  const [acordion, setAcordion] = useState(true);

  const toggleAcordion = () => {
    setAcordion(!acordion);
  };

  return (
    <article className={style.cart} onClick={toggleAcordion}>
      <div className={style.cartImage}>
        <img src={hartClaud} alt='hart icon' />
      </div>
      <div className={style.cartText}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div
        className={`${acordion ? style.cartTasksClosed : style.cartTasksOpen}`}
      >
        <p className={style.buttonIcon}>delete</p>
        <p className={style.buttonIcon}>edit</p>
      </div>
    </article>
  );
};

export { TaskInfo };
