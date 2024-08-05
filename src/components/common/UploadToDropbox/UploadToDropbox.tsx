import React, { ChangeEvent, useState } from 'react';
import { RiImageAddFill } from 'react-icons/ri';
import { useAsistantMessageContext, useToggle } from '../../../utils/hooks';
import styles from './UploadToDropbox.module.scss';

interface Props {
  eventId: string;
}
// This React component is designed for uploading an image file to a server.
const UploadToDropbox = ({ eventId }: Props) => {
  // Context hook to set messages for the user.
  const { setMessage } = useAsistantMessageContext();
  // State to manage the success message display.
  const [success, setSuccess] = useState<string | null>(null);
  // State to control the visibility of the file upload interface.
  const [isOpen, toggleIsOpen] = useToggle(false);
  // State to hold the file object to be uploaded.
  const [file, setFile] = useState<File | null>(null);
  // State to description file.
  const [description, setDescription] = useState<string>('');

  // Event handler for file input change.
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectFile = e.target.files ? e.target.files[0] : null;
    setFile(selectFile);

    // If no file is selected, prompt the user to select a file.
    if (!selectFile) {
      setMessage({
        message: 'Please select a file to upload',
        ikonError: true,
      });
    }
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  // Function to handle the file upload process.
  const handleUpload = async () => {
    // Check if a file has been selected before proceeding.
    if (!file) {
      setMessage({
        message: 'No file selected. Please attach a picture.',
        ikonError: true,
      });
      setSuccess(null);
      return;
    } else {
      // Clear any previous messages or statuses.
      setMessage({ message: null, ikonError: null });
      setSuccess(null);

      // Prepare the file data for sending.
      const formData = new FormData();
      formData.append('image', file);
      formData.append('description', description);
      formData.append('event_id', eventId);
      const uploadUrl = 'http://localhost:3001/event/photos/upload';

      try {
        // Perform the file upload via HTTP POST.
        const response = await fetch(uploadUrl, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) throw new Error('Network response was not ok');

        // Process the response and set the success message accordingly.
        const resultText = await (response.headers
          .get('content-type')
          ?.includes('application/json')
          ? response.json()
          : response.text());
        setSuccess(
          typeof resultText === 'string'
            ? resultText
            : 'File uploaded successfully'
        );
        // Clear the file from state after uploading.
        setFile(null);
        setDescription('');
      } catch (error) {
        // Handle errors and update the user interface with the error message.
        console.error(error);
        setMessage({ message: '' + error, ikonError: true });
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
            Upload picture to Dropbox
          </button>
          <input type='file' onChange={handleFileChange} accept='image/*' />
          <textarea
            placeholder='Enter image description'
            value={description}
            onChange={handleDescriptionChange}
            className={styles.textarea}
          />
          <p>{success}</p>
        </div>
      )}
    </div>
  );
};

export { UploadToDropbox };
