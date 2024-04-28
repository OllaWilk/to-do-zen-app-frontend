import React from 'react';
import { welcome } from '../../../data/pages/welcome';
import { Logo, Paragraph, AnimatedAstronaut } from '../../common/index';

import styles from './Welcome.module.scss';

const Welcome = () => {
  const { header } = welcome;
  return (
    <section className={styles.welcome}>
      <article>
        <Logo text={'SpaceSteps'} />
        <Paragraph text={header} />
      </article>
      <AnimatedAstronaut />
    </section>
  );
};

export { Welcome };
