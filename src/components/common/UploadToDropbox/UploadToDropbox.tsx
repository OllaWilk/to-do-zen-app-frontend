import React, { ChangeEvent, useState } from 'react';
import { RiImageAddFill } from 'react-icons/ri';
import { useToggle } from '../../../utils/hooks';

import styles from './UploadToDropbox.module.scss';

const UploadToDropbox = () => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await fetch(
          'http://localhost:3001/event/photos/upload',
          {
            method: 'POST',
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          console.log('File uploaded successfully', data);
        } else {
          const textData = await response.text();
          console.log('Response received:', textData);
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div className={styles.upload}>
      <div className={styles.icon} onClick={toggleIsOpen}>
        <RiImageAddFill />
      </div>
      {isOpen && (
        <div className={styles.chooseFile}>
          <button className={styles.chooseFileButton} onClick={handleUpload}>
            Upload to Dropbox
          </button>
          <input type='file' onChange={handleFileChange} accept='image/*' />
        </div>
      )}
    </div>
  );
};

export { UploadToDropbox };
