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
import { SectionCart, Spiner, EventForm } from '../../common/index';
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
            title={event.title}
            date={event.event_date}
            description={event.description}
          />
          <EventTags
            status={event.status}
            category={event.category}
            price={event.price}
            duration={event.duration}
            reminder={event.reminder}
          />
        </LeftSidePanel>
        {/* <div onClick={toggleIsOpen} className={styles.addBtn}>
          {!isOpen ? (
            <ButtonBlack buttonName={'edit event'} styles={{ width: '100%' }} />
          ) : (
            <IoMdClose />
          )}
        </div> */}
        {event.id === id && (
          <ControlPanel>
            <EventForm event={event} />
          </ControlPanel>
        )}
      </div>
    </SectionCart>
  );
};
