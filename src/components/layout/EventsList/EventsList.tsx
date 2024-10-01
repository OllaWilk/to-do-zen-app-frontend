import React, { useContext, useEffect } from 'react';
import { EventEntity } from '@alexwilk/spacesteps-types';
import { useEventFetch, useEventsContext } from '../../../utils/hooks';
import { SearchContext } from '../../../context/search';
import { NoDataAlert, Spiner, Event } from '../../common';
import styles from './EventsList.module.scss';

// The EventsList component fetches and displays a list of events
export const EventsList = () => {
  // Destructure state to get the list of events from the events context
  const {
    state: { events },
  } = useEventsContext();

  const { search, order } = useContext(SearchContext); // Destructure search and order from the SearchContext
  const { getEvents } = useEventFetch<EventEntity[]>(); // Get the getEvents function from the useEventFetch custom hook

  // useEffect hook to fetch events whenever search or order changes
  useEffect(() => {
    (async () => {
      if (search === '') {
        await getEvents(); // Fetch all events if no search term is provided
      } else {
        await getEvents({ search, order }); // Fetch events based on search term and order
      }
    })();
  }, [getEvents, search, order]); // Dependencies for the effect

  if (!events) {
    return <NoDataAlert message='No events to display' />; // If events is undefined, show a no data alert
  } else if (events.length === 0) {
    return <Spiner />; // If events array is empty, show a spinner
  } else if (events === null) {
    return <NoDataAlert message='Event not found' />; // If events is null, show a different no data alert
  }

  // Render the list of events
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
