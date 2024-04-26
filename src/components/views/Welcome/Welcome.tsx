import React from 'react';
import { welcome } from '../../../data/pages/welcome';
import {
  Logo,
  Paragraph,
  AnimatedAstronaut,
  ButtonBlack,
} from '../../common/index';
import styles from './Welcome.module.scss';

const Welcome = () => {
  const { header, button } = welcome;

  return (
    <section className={styles.welcome}>
      <article>
        <Logo text={'SpaceSteps'} size='3rem' />
        <Paragraph text={header} />
        <ButtonBlack dynamicPath={button.path} buttonName={button.name} />
      </article>
      <AnimatedAstronaut />
    </section>
  );
};

export { Welcome };
