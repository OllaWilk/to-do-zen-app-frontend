import React, { useEffect } from 'react';
import { EventEntity } from 'types';
import { useAuthContext, useEventsContext } from '../../../utils/hooks';
import { NoDataAlert, Spiner, Event } from '../../common';
import styles from './EventsList.module.scss';

export const EventsList = () => {
  const {
    state: { events },
    dispatch,
  } = useEventsContext();

  const { user } = useAuthContext();
  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3001/events', {
        headers: { Authorization: `Bearer ${user?.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        const eventRefords = json.eventRecord;
        dispatch({ type: 'SET_EVENTS', payload: eventRefords });
      }
    })();
  }, [dispatch, user]);

  if (!events) {
    return <Spiner />;
  } else if (events.length === 0) {
    return <NoDataAlert />;
  }

  return (
    <div className={styles.tasksList}>
      {events.map(
        ({
          id,
          title,
          created_at,
          price,
          date,
          status,
          description,
          creator_id,
          category,
        }: EventEntity) => (
          <Event
            key={id}
            id={id}
            title={title}
            created_at={created_at}
            price={price}
            date={date}
            status={status}
            description={description}
            creator_id={creator_id}
            category={category}
          />
        )
      )}
    </div>
  );
};
