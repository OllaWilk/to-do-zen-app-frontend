import React from 'react';
import styles from './PhotoGallery.module.scss';
import { FaTrash } from 'react-icons/fa';

interface PhotoGalleryProps {
  images: string[];
  name: string;
  onEdit?: (index: number) => void;
  onDelete?: (index: number) => void;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  images,
  name,
  onEdit,
  onDelete,
}) => {
  console.log(images);
  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <div key={index} className={styles.tile}>
          <img src={image} alt={`Photo ${name}`} className={styles.image} />
          <div className={styles.overlay}>
            <FaTrash className={styles.delete} />
          </div>
        </div>
      ))}
    </div>
  );
};
export { PhotoGallery };
