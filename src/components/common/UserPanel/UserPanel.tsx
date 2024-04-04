import React from 'react';
import { userAvatar } from '../../../images';
import styles from './UserPanel.module.scss';

interface Props {
  userName: string;
}

const UserPanel = ({ userName }: Props) => {
  return (
    <div className={styles.userWrap}>
      <p className={styles.text}>{userName}</p>
      <div className={styles.imgWrap}>
        <img src={userAvatar} alt='avatar' />
      </div>
    </div>
  );
};

export { UserPanel };
