import React from 'react';
import {
  SiJavascript,
  SiExpress,
  SiMysql,
  SiRedux,
  SiTypescript,
  SiSass,
  SiHandlebarsdotjs,
  SiMongodb,
  SiJest,
  SiBlender,
  SiAdobephotoshop,
  SiJira,
} from 'react-icons/si';
import { FaHtml5, FaNodeJs, FaGithub, FaReact } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { aleksandraWilk } from '../../../images/index';
import {
  Bio,
  Contact,
  EducationSection,
  ExperienceSection,
  LanguageSection,
  RODO,
  SectionHeader,
  SkillsSection,
} from '../../common';
import styles from './About.module.scss';

const About = () => {
  const skills = {
    proficient: [
      { icon: <SiJavascript />, name: 'JavaScript (ES6+)' },
      { icon: <SiTypescript />, name: 'Typescript' },
      { icon: <FaHtml5 />, name: 'HTML5' },
      { icon: <SiSass />, name: 'CSS3, Scss' },
    ],
    frontend: [
      { icon: <FaReact />, name: 'React.js' },
      { icon: <SiRedux />, name: 'Redux' },
    ],
    backend: [
      { icon: <FaNodeJs />, name: 'Node.js' },
      { icon: <SiExpress />, name: 'Express.js' },
      { icon: <SiHandlebarsdotjs />, name: 'Handlebars' },
    ],
    databases: [
      { icon: <SiMysql />, name: 'MySQL' },
      { icon: <SiMongodb />, name: 'MongoDB' },
    ],
    'Skilled in': [
      { icon: <FaGithub />, name: 'git' },
      { icon: <SiJest />, name: 'unit testing principles with Jest' },
      { icon: <GoDotFill />, name: 'RESTful APIs' },
    ],
    'Familiar with': [
      { icon: <SiAdobephotoshop />, name: 'Photoshop' },
      { icon: <SiBlender />, name: 'Blender' },
      { icon: <SiJira />, name: 'jira' },
    ],
  };

  return (
    <div className={styles.cv}>
      <div className={styles.header}>
        <img src={aleksandraWilk} alt='Alex Wilk' />
        <div className={styles.name}>
          <SectionHeader text='Aleksandra Wilk' />
          <p>fullstack Javascript Developer</p>
        </div>
      </div>
      <article className={styles.info}>
        <div className={styles.leftSide}>
          <SkillsSection skills={skills} />
          <LanguageSection />
        </div>
        <div className={styles.rightSide}>
          <Contact />
          <Bio />
          <EducationSection />
          <ExperienceSection />
          <RODO />
        </div>
      </article>
    </div>
  );
};

export { About };
