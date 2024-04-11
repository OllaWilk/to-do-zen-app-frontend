import React, { useState } from 'react';
import { TaskEntity } from 'types';
import { hartClaud } from '../../../images';
import style from './TaskInfo.module.scss';
import { Link } from 'react-router-dom';
import { ButtonDeleteTask } from '../Buttons/ButtonDeleteTask/ButtonDeleteTask';

const TaskInfo = ({
  title,
  description,
  id,
}: Pick<TaskEntity, 'title' | 'description' | 'id'>) => {
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
        <Link to={`/tasks/${id}`}>
          <p className={style.buttonIcon}>edit</p>
        </Link>
        <ButtonDeleteTask taskId={`${id}`} />
      </div>
    </article>
  );
};

export { TaskInfo };
