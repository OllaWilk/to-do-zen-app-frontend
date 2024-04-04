import React, { useState } from 'react';
import { hartClaud } from '../../../images';
import style from './TaskCategorie.module.scss';

interface Props {
  title: string;
  description: string;
}
const TaskCategorie = ({ title, description }: Props) => {
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
      <div className={acordion ? style.cartTasksClosed : style.cartTasksOpen}>
        <ul>
          <li>5</li>
          <li>4</li>
          <li>3</li>
          <li>2</li>
        </ul>
      </div>
    </article>
  );
};

export { TaskCategorie };
