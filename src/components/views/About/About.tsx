import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { about } from '../../../data/pages/about';
import avatar from '../../../images/userAvatar.png';
import { Paragraph, SectionCart, SectionHeader } from '../../common/index';
import styles from './About.module.scss';

const About = () => {
  const { text, header, aboutBackend, aboutFrontend, end } = about;
  return (
    <SectionCart>
      <div className={styles.wrap}>
        <img src={avatar} alt='Alex Wilk' />
        <article className={styles.info}>
          <SectionHeader text={header} />
          <Paragraph text={text} />
          <Paragraph text={aboutBackend} />
          <Paragraph text={aboutFrontend} />
          <Paragraph text={end} />
          <div className={styles.contact}>
            <FaGithub />
            <FaLinkedin />

            <SiGmail />
          </div>
        </article>
      </div>
    </SectionCart>
  );
};

export { About };
