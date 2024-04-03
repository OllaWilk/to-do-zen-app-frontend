import React from 'react';
import { welcomeContent } from '../../../data/dataStore';
import { Logo, Paragraph, AnimatedAstronaut } from '../../common/index';

import styles from './Welcome.module.scss';

const Welcome = () => {
  const { text } = welcomeContent;
  return (
    <section className={styles.welcome}>
      <article>
        <Logo text={'SpaceSteps'} />
        <Paragraph text={text} />
      </article>
      <AnimatedAstronaut />
    </section>
  );
};

export { Welcome };
