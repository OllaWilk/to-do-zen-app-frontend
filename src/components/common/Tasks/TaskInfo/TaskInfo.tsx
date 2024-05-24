import React, { useState } from 'react';
import { EventEntity } from 'types';

import { ButtonDeleteTask, ButtonPurple } from '../../index';
import style from './TaskInfo.module.scss';

const TaskInfo = ({
  title,
  description,
  id,
}: Pick<EventEntity, 'title' | 'description' | 'id'>) => {
  const [accordion, setAccordion] = useState(true);

  const toggleAcordion = () => {
    setAccordion(!accordion);
  };

  return (
    <article className={style.cart} onClick={toggleAcordion}>
      <div className={style.cartText}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div
        className={`${accordion ? style.cartTasksClosed : style.cartTasksOpen}`}
      >
        <ButtonPurple url={`/tasks/${id}`} />
        <ButtonDeleteTask taskId={`${id}`} />
      </div>
    </article>
  );
};

export { TaskInfo };
