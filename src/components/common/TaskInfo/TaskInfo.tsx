import React, { useState } from 'react';
import { TaskEntity } from 'types';
import { hartClaud, edit, deleteIcon } from '../../../images';
import style from './TaskInfo.module.scss';

const TaskInfo = ({
  title,
  description,
}: Pick<TaskEntity, 'title' | 'description'>) => {
  const [accordion, setAccordion] = useState(true);

  const toggleAcordion = () => {
    setAccordion(!accordion);
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
        className={`${accordion ? style.cartTasksClosed : style.cartTasksOpen}`}
      >
        <p className={style.buttonIcon}>delete</p>
        <p className={style.buttonIcon}>edit</p>
      </div>
    </article>
  );
};

export { TaskInfo };
