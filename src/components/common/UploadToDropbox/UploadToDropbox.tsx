import React, { ChangeEvent, useState } from 'react';
import { RiImageAddFill } from 'react-icons/ri';
import { useAsistantMessageContext, useToggle } from '../../../utils/hooks';
import styles from './UploadToDropbox.module.scss';

// This React component is designed for uploading an image file to a server.
const UploadToDropbox = () => {
  // Context hook to set messages for the user.
  const { setMessage } = useAsistantMessageContext();
  // State to manage the success message display.
  const [success, setSuccess] = useState<string | null>(null);
  // State to control the visibility of the file upload interface.
  const [isOpen, toggleIsOpen] = useToggle(false);
  // State to hold the file object to be uploaded.
  const [file, setFile] = useState<File | null>(null);

  // Event handler for file input change.
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectFile = e.target.files ? e.target.files[0] : null;
    setFile(selectFile);

    // If no file is selected, prompt the user to select a file.
    if (!selectFile) {
      setMessage('Please select a file to upload');
    }
  };

  // Function to handle the file upload process.
  const handleUpload = async () => {
    // Check if a file has been selected before proceeding.
    if (!file) {
      setMessage('No file selected. Please attach a picture.');
      setSuccess(null);
      return;
    } else {
      // Clear any previous messages or statuses.
      setMessage(null);
      setSuccess(null);

      // Prepare the file data for sending.
      const formData = new FormData();
      formData.append('image', file);
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
      } catch (error) {
        // Handle errors and update the user interface with the error message.
        console.error('Error uploading file:', error);
        setMessage('Error uploading file: ' + error);
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
          <p>{success}</p>
        </div>
      )}
    </div>
  );
};

export { UploadToDropbox };
