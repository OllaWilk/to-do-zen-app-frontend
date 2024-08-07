import React from 'react';
import styles from './PhotoGallery.module.scss';
import { FaTrash } from 'react-icons/fa';
import { useEventPhotosFetch } from '../../../utils/hooks';
import { EventPhoto } from 'types';

interface PhotoGalleryProps {
  images: EventPhoto[] | null;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
  const { onDelete } = useEventPhotosFetch();

  return (
    <div className={styles.gallery}>
      {images?.map((image) => (
        <div key={image.photo_id} className={styles.tile}>
          <img
            src={image.photo_url}
            alt={`${image.photo_id} `}
            className={styles.image}
          />
          <div className={styles.overlay}>
            <FaTrash
              className={styles.delete}
              onClick={() => onDelete(image.photo_url)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export { PhotoGallery };
