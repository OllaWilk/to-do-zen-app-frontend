import React, { useEffect } from 'react';
import backgrounImg from '../../../../images/space.png';
import {
  useEventPhotosContext,
  useEventPhotosFetch,
} from '../../../../utils/hooks';
import { SectionHeader, Paragraph, PhotoGallery } from '../../../common/index';
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
  const { photoFetch } = useEventPhotosFetch();

  const {
    state: { photos },
  } = useEventPhotosContext();

  useEffect(() => {
    if (status === 'completed') {
      photoFetch(eventId);
    }
  }, [eventId, status, photoFetch]);

  return (
    <div className={styles.event}>
      {/* Conditionally render the photo gallery if the event is completed */}
      {status === 'completed' ? (
        <PhotoGallery images={photos} />
      ) : (
        <div className={styles.imgWrap}>
          <img src={backgrounImg} alt='woman in space' />
        </div>
      )}
      <SectionHeader text={title} date={date} />
      <div className={styles.wrap}>
        <Paragraph text={description} />
      </div>
    </div>
  );
};
