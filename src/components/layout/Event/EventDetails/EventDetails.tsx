import React, { useEffect, useState } from 'react';
import backgrounImg from '../../../../images/space.png';
import { EventPhoto } from 'types';
import {
  SectionHeader,
  Paragraph,
  UploadToDropbox,
} from '../../../common/index';
import styles from './EventDetails.module.scss';

interface Props {
  title: string;
  date?: Date | null;
  description?: string | number;
  status: string;
  eventId: string;
}

export const EventDetails = ({
  title,
  date,
  description,
  status,
  eventId,
}: Props) => {
  const [photos, setPhotos] = useState<EventPhoto[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/event/photos/${eventId}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch photos');
        }

        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        setError('Filed to load photos');
      }
    };

    if (status === 'completed') {
      fetchPhotos();
    }
  }, [status, eventId]);

  const text =
    status === 'completed'
      ? 'The event is completed. You can now add cover photo and use this event as a blog post.'
      : 'Once the event is completed, you will be able to add photos and use this event as a blog post. ';
  return (
    <div className={styles.event}>
      <div className={styles.imgWrap}>
        {photos.length > 0 ? (
          <>
            <img src={photos[0].photo_url} alt={photos[0].photo_title} />
            <p className={styles.text}>{photos[0].photo_title}</p>
          </>
        ) : (
          <img src={backgrounImg} alt='woman in space' />
        )}
        <p className={styles.text}>{error ? error : text}</p>
      </div>
      {status === 'completed' && <UploadToDropbox eventId={eventId} />}
      <SectionHeader text={title} date={date} />
      <div className={styles.wrap}>
        <Paragraph text={description} />
      </div>
    </div>
  );
};
