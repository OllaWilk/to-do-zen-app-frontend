import React, { ChangeEvent, useState } from 'react';
import { RiImageAddFill } from 'react-icons/ri';
import { useEventPhotosFetch } from '../../../utils/hooks';
import styles from './UploadToDropbox.module.scss';
import { ExpandableSection } from '../ExpandableSection/ExpandableSection';

interface Props {
  eventId: string;
}
// This React component is designed for uploading an image file to a server.
const UploadToDropbox = ({ eventId }: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState<string>('');
  const { handleUpload, success } = useEventPhotosFetch();

  // Event handler for file input change.
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectFile = e.target.files ? e.target.files[0] : null;
    setFile(selectFile);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  // Function to handle the file upload process.
  const onUploadClick = () => {
    handleUpload({ eventId, file, description });
  };

  return (
    <ExpandableSection icon={<RiImageAddFill />}>
      <button className={styles.chooseFileButton} onClick={onUploadClick}>
        Upload picture to Dropbox
      </button>
      <input type='file' onChange={handleFileChange} accept='image/*' />
      <textarea
        placeholder='Enter image description'
        onChange={handleDescriptionChange}
        className={styles.textarea}
      />
      {/* Display success message if needed */}
      <p>{success}</p>
    </ExpandableSection>
  );
};

export { UploadToDropbox };
