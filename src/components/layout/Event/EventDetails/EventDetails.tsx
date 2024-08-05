import React, { useEffect } from 'react';
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

  useEffect(() => {
    const text =
      status === 'completed'
        ? 'The event is completed. You can now add photo and use this event as a blog post.'
        : 'Once the event is completed, you will be able to add photos and use this event as a blog post.';
    console.log(text);
    // setMessage(text);
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/event/photos/${eventId}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch photos');
        }

        const data = await response.json();
        // setPhotos(data);
        console.log(data);
      } catch (error) {
        setMessage({ message: 'Failed to load photos', ikonError: true });
      }
    };

    if (status === 'completed') {
      fetchPhotos();
    }
  }, [status, eventId, setMessage]);

  return (
    <div className={styles.event}>
      <div className={styles.imgWrap}>
        <img src={backgrounImg} alt='woman in space' />
        {/* <p className={styles.text}>{error ? error : text}</p> */}
      </div>
      <SectionHeader text={title} date={date} />
      <div className={styles.wrap}>
        <Paragraph text={description} />
      </div>
    </div>
  );
};
