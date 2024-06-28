import React from 'react';
import { Link } from 'react-router-dom';
import { SiGmail } from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={` ${styles.footer}`}>
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
          href='mailto:aleksandra.wilk.letkiewicz@gmail.com
'
        >
          <SiGmail />
        </a>
      </div>
    </footer>
  );
};
