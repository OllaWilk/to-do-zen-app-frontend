import React from 'react';
import { Link } from 'react-router-dom';
import { SiGmail } from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useAuthContext } from '../../../utils/hooks/index';

import styles from './Footer.module.scss';

export const Footer = () => {
  const { user } = useAuthContext();

  return (
    <footer
      className={`${styles.footer} ${
        !user ? styles.login : styles.cockpitView
      }`}
    >
      <p className={styles.info}>
        This application is made from scratch for training and recruitment
        purposes.
      </p>
      <div className={styles.links}>
        <span>Aleksandra Wilk | </span>
        <Link to='https://github.com/OllaWilk'>
          <FaGithub />
        </Link>
        <Link to='https://www.linkedin.com/in/alex-wilk/'>
          <FaLinkedin />
        </Link>
        <a
          href='mailto:alex.dev.wilk@gmail.com
'
        >
          <SiGmail />
        </a>
      </div>
    </footer>
  );
};
