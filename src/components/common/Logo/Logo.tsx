import React from 'react';
import { logo } from '../../../images';
import styles from './Logo.module.scss';

interface Props {
  text?: string;
  fontSize?: string;
  imgSize?: { width: string; height: string };
}

const Logo = ({
  text,
  fontSize = '2.3rem',
  imgSize = { width: '50px', height: '50px' },
}: Props) => {
  return (
    <div className={styles.logo}>
      <div className={styles.imgWrap}>
        <img src={logo} alt='logo' style={imgSize} />
      </div>
      {text && (
        <h1 className={styles.text} style={{ fontSize: `${fontSize}` }}>
          {text}
        </h1>
      )}
    </div>
  );
};

export { Logo };
