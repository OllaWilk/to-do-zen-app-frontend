/* eslint-disable indent */
import React, { useState } from 'react';
import parse from 'html-react-parser';
import { BiError } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import {
  useAsistantMessageContext,
  formatShortDate,
} from '../../../utils/hooks/index';
import { userAvatar } from '../../../images';
import styles from './UserPanel.module.scss';

interface Props {
  userName?: string | null;
}

const UserPanel = ({ userName }: Props) => {
  // Access the assistant message context
  const { messageState } = useAsistantMessageContext();
  // State to track the current message index
  const [messageIndex, setMessageIndex] = useState(0);

  // Get today's date and format it
  const today: Date = new Date();
  const formattedDate: string = formatShortDate(today);

  // Array of messages to display in the user panel
  const messages = [
    'Hi, I am your virtual assistant ^_^',
    `Today is <span>${formattedDate}</span>`,
    'Keep up the great work!',
  ];

  // Function to cycle through the messages on image click
  const nextInfo = () => {
    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  return (
    <div className={styles.userWrap}>
      <div className={`${styles.text}`}>
        {messageState.message ? (
          <div>
            {/* Display error or success icon based on ikonError */}
            {messageState.ikonError ? (
              <BiError className={styles.ikonError} />
            ) : (
              <AiOutlineCheckCircle className={styles.ikonOk} />
            )}
            <p>{messageState.message}</p>
          </div>
        ) : (
          <p>{parse(messages[messageIndex])}</p>
        )}
      </div>
      {/* Image that cycles through messages on click */}
      <div className={styles.imgWrap} onClick={nextInfo}>
        <img src={userAvatar} alt='avatar' />
      </div>
    </div>
  );
};

export { UserPanel };
