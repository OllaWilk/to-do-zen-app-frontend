import React, { useEffect } from 'react';
import { logo } from '../../../images';
import styles from './Logo.module.scss';

interface Props {
  text?: string;
}

const Logo = ({ text }: Props) => {
  return (
    <div className={styles.logo}>
      <div className={styles.imgWrap}>
        <img src={logo} alt='logo' />
      </div>
      {text && <h1 className={styles.text}>{text}</h1>}
    </div>
  );
};

export { Logo };
