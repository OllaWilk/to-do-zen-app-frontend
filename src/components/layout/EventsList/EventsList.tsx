import React, { useContext, useEffect } from 'react';
import { EventEntity } from 'types';
import { useEventFetch, useEventsContext } from '../../../utils/hooks';
import { SearchContext } from '../../../context/search';
import { NoDataAlert, Spiner, Event } from '../../common';
import styles from './EventsList.module.scss';

export const EventsList = () => {
  const {
    state: { events },
  } = useEventsContext();

  const { search } = useContext(SearchContext);
  const { getEvents } = useEventFetch<EventEntity[]>();

  useEffect(() => {
    console.log('reequest do bazy danych', search);

    (async () => {
      await getEvents();
    })();
  }, [getEvents, search]);

  if (!events) {
    return <Spiner />;
  } else if (events.length === 0) {
    return <NoDataAlert message='Brak wydarzeń do wyświetlenia' />;
  } else if (events === null) {
    return <NoDataAlert message='Nie znaleziono wydarzenia' />;
  }

  return (
    <div className={styles.tasksList}>
      {events.map(
        ({
          id,
          title,
          created_at,
          price,
          event_date,
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
            event_date={event_date}
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
