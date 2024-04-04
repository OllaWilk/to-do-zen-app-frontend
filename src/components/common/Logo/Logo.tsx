import React from 'react';
import { logo } from '../../../images';
import styles from './Logo.module.scss';

interface Props {
  text?: string;
  size?: string;
}

const Logo = ({ text, size }: Props) => {
  return (
    <div className={styles.logo}>
      <div className={styles.imgWrap}>
        <img src={logo} alt='logo' />
      </div>
      {text && (
        <h1 className={styles.text} style={{ fontSize: `${size}` }}>
          {text}
        </h1>
      )}
    </div>
  );
};

export { Logo };
