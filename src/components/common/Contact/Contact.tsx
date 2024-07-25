import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { AiFillPhone } from 'react-icons/ai';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.wrap}>
        <a
          href='https://github.com/OllaWilk'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
          <p>github.com/OllaWilk</p>
        </a>
        <a
          href='https://www.linkedin.com/in/alex-wilk'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin />
          <p>www.linkedin.com/in/alex-wilk</p>
        </a>
      </div>
      <div className={styles.wrap}>
        <a href='mailto:aleksandra.wilk.letkiewicz@gmail.com'>
          <SiGmail />
          <p>aleksandra.wilk.letkiewicz@gmail.com</p>
        </a>
        <a href='tel:+48721775786'>
          <AiFillPhone />
          <p>+48 721 775 786</p>
        </a>
      </div>
    </div>
  );
};

export { Contact };
