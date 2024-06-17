import React, { useState } from 'react';

import { EventEntity } from 'types';

import {
  ButtonDelete,
  ButtonEdit,
  ButtonPurple,
  DateDisplay,
} from '../../index';
import style from './Event.module.scss';

export const Event = ({
  id,
  title,
  price,
  event_date,
  status,
  description,
}: EventEntity) => {
  const [accordion, setAccordion] = useState(false);

  const toggleAcordion = () => {
    setAccordion(!accordion);
  };

  return (
    <article className={style.cart} onClick={toggleAcordion}>
      <div className={style.cartImage}>
        <h2>{title}</h2>
        {event_date && <DateDisplay date={event_date} />}
      </div>
      <div
        className={`${style.acordion} ${
          accordion ? style.cartOpen : style.cartClosed
        }`}
      >
        {accordion && (
          <div className={style.acordionWrap}>
            <p className={style.status}>{status}</p>
            <p className={style.description}>{description}</p>
            <p className={style.price}>Price: {price} zł</p>
            <div className={style.buttonsWrap}>
              <>
                <ButtonPurple url={`/events/${id}`} text='read more' />
              </>
              <div>
                <ButtonEdit url={`/events/${id}`} />
                <ButtonDelete eventId={`${id}`} />
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
