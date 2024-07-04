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
    (async () => {
      if (search === '') {
        await getEvents();
      } else {
        await getEvents({ search });
      }
    })();
  }, [getEvents, search]);

  if (!events) {
    return <NoDataAlert message='No events to display' />;
  } else if (events.length === 0) {
    return <Spiner message='add event' />;
  } else if (events === null) {
    return <NoDataAlert message='Event not found' />;
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
