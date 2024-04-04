import React from 'react';
import { welcomeContent } from '../../../data/dataStore';
import {
  Logo,
  Paragraph,
  AnimatedAstronaut,
  ButtonBlack,
} from '../../common/index';
import styles from './Welcome.module.scss';

const Welcome = () => {
  const { text, title, pathToHome } = welcomeContent;
  return (
    <section className={styles.welcome}>
      <article>
        <Logo text={'SpaceSteps'} size='3.5rem' />
        <Paragraph text={text} />
        <ButtonBlack dynamicPath={pathToHome} buttonName={title} />
      </article>
      <AnimatedAstronaut />
    </section>
  );
};

export { Welcome };
