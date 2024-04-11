import React from 'react';
import { logo } from '../../../images';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  text?: string;
  size?: string;
}

const Logo = ({ text, size }: Props) => {
  return (
    <Link to={'/tasks'} className={styles.logo}>
      <div className={styles.imgWrap}>
        <img src={logo} alt='logo' />
      </div>
      {text && (
        <h1 className={styles.text} style={{ fontSize: `${size}` }}>
          {text}
        </h1>
      )}
    </Link>
  );
};

export { Logo };
