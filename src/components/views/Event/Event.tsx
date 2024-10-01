import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MdDelete, MdOutlineEdit } from 'react-icons/md';
import { EventEntity } from '@alexwilk/spacesteps-types';
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
  EventForm,
  UserPanel,
  UploadToDropbox,
  ExpandableSection,
  ButtonDeleteWithQuesctionProceed,
  NoDataAlert,
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
        <NoDataAlert message='sorry, no event here' />
      </SectionCart>
    );
  }

  if (event?.id !== id) {
    return <NotFound message={'sorry, no event here'} />;
  }

  const text =
    event.status === 'completed'
      ? 'The event is completed. You can now add photo and use this event as a blog post.'
      : 'Once the event is completed, you will be able to add photos and use this event as a blog post.';

  return (
    <SectionCart>
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
          <p className={styles.text}>{text}</p>
          <div className={styles.actions}>
            {event.status === 'completed' && (
              <UploadToDropbox eventId={event.id} />
            )}
            <ExpandableSection icon={<MdOutlineEdit />}>
              <div className={styles.chooseFile}>
                <EventForm event={event} />
              </div>
            </ExpandableSection>
            <ExpandableSection icon={<MdDelete />}>
              <ButtonDeleteWithQuesctionProceed event_id={event.id} />
            </ExpandableSection>
          </div>
        </ControlPanel>
      )}
    </SectionCart>
  );
};
