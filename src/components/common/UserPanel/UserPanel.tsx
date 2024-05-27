import React from 'react';
import { CiLogout } from 'react-icons/ci';
import { useLogout } from '../../../utils/hooks';
import { userAvatar } from '../../../images';

import styles from './UserPanel.module.scss';

interface Props {
  userName: string;
}

const UserPanel = ({ userName }: Props) => {
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  return (
    <div className={styles.userWrap}>
      <p className={styles.text}>{userName}</p>
      <div className={styles.imgWrap}>
        <img src={userAvatar} alt='avatar' />
      </div>
      <button onClick={handleClick}>
        Logout
        <span>
          <CiLogout />
        </span>
      </button>
    </div>
  );
};

export { UserPanel };
