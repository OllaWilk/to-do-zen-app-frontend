import React from 'react';
import { logo } from '../../../images';
import styles from './Logo.module.scss';

interface Props {
  text?: string;
  fontSize?: string;
  slogan?: boolean;
}

const Logo = ({
  text = 'SplotApp',
  fontSize = '50px',
  slogan = true,
}: Props) => (
  <div className={styles.logo}>
    <img src={logo} alt='logo' className={styles.logoImage} />
    {text && (
      <div className={styles.textWrapper}>
        <h1 style={{ fontSize: `${fontSize}` }}>{text}</h1>
        {slogan && <p>Take control of your universe</p>}
      </div>
    )}
  </div>
);

export { Logo };
