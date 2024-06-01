import React from 'react';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { useLogout } from '../../../../utils/hooks';
import style from './ButtonLogout.module.scss';

export const ButtonLogout = () => {
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };
  return (
    <div onClick={handleClick} className={style.logout}>
      <RiLogoutBoxLine />
      <p>Logout</p>
    </div>
  );
};
