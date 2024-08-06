import React, { useEffect, useState } from 'react';
import backgrounImg from '../../../../images/space.png';
import { useAsistantMessageContext } from '../../../../utils/hooks';
import { SectionHeader, Paragraph } from '../../../common/index';
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
  const { setMessage } = useAsistantMessageContext();
  const [photos, setPhotos] = useState(backgrounImg);

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
        setPhotos(data[0].photo_url);
      } catch (error) {
        console.error({ message: 'Failed to load photos', ikonError: true });
      }
    };

    if (status === 'completed') {
      fetchPhotos();
    }
  }, [status, eventId, setMessage]);

  return (
    <div className={styles.event}>
      <div className={styles.imgWrap}>
        <img src={photos} alt='woman in space' />
      </div>
      <SectionHeader text={title} date={date} />
      <div className={styles.wrap}>
        <Paragraph text={description} />
      </div>
    </div>
  );
};
