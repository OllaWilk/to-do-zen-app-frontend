/* eslint-disable indent */
import React from 'react';
import parse from 'html-react-parser';
import { BiError } from 'react-icons/bi';
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
  const { message } = useAsistantMessageContext();

  const today: Date = new Date();
  const formattedDate: string = formatShortDate(today);

  const messages = [
    'Hi, I am your virtual assistant ^_^',
    `Today is <span>${formattedDate}</span>`,
  ];

  return (
    <div className={styles.userWrap}>
      <div className={`${styles.text}`}>
        {message ? (
          <div>
            <BiError />
            <p>{message}</p>
          </div>
        ) : (
          <p>{parse(messages[1] + '')}</p>
        )}
      </div>
      <div className={`${styles.errorImgShow} ${styles.imgWrap}`}>
        <img src={userAvatar} alt='avatar' />
      </div>
    </div>
  );
};

export { UserPanel };
