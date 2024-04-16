import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { aboutContent } from '../../../data/dataStore';
import avatar from '../../../images/userAvatar.png';
import { Paragraph, SectionHeader } from '../../common/index';
import { MainLayout } from '../../layout/index';
import styles from './About.module.scss';

const About = () => {
  const { text, title, aboutBackend, aboutFrontend, end } = aboutContent;
  return (
    <MainLayout>
      <div className={styles.wrap}>
        <img src={avatar} alt='Alex Wilk' />
        <article className={styles.info}>
          <SectionHeader text={title} />
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
    </MainLayout>
  );
};

export { About };
