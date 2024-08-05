import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { EventEntity } from 'types';
import { useEventFetch, useEventsContext } from '../../../utils/hooks';
import {
  ControlPanel,
  EventDetails,
  EventTags,
  LeftSidePanel,
} from '../../layout/index';
import { NotFound } from '../NotFound/NotFound';
import {
  SectionCart,
  Spiner,
  EventForm,
  UserPanel,
  UploadToDropbox,
} from '../../common/index';
import styles from './Event.module.scss';

export const Event = () => {
  //get id from URL
  const { id } = useParams();
  const {
    state: { event },
  } = useEventsContext();
  const { getEvents } = useEventFetch<EventEntity>();

  //get event witch id
  useEffect(() => {
    if (event?.id !== id) {
      (async () => {
        await getEvents({ id });
      })();
    }
  }, [getEvents, id, event]);

  if (!event) {
    return (
      <SectionCart>
        <Spiner />
      </SectionCart>
    );
  }

  if (event?.id !== id) {
    return <NotFound message={'sorry, no event here'} />;
  }

  return (
    <SectionCart>
      <div className={styles.eventWrap}>
        <LeftSidePanel>
          <EventDetails
            eventId={event.id}
            title={event.title}
            date={event.event_date}
            description={event.description}
            status={event.status}
          />
          <EventTags
            status={event.status}
            category={event.category}
            price={event.price}
            duration={event.duration}
            reminder={event.reminder}
          />
        </LeftSidePanel>

        {event.id === id && (
          <ControlPanel>
            <UserPanel />
            {event.status === 'completed' && (
              <UploadToDropbox eventId={event.id} />
            )}
            <EventForm event={event} />
          </ControlPanel>
        )}
      </div>
    </SectionCart>
  );
};
