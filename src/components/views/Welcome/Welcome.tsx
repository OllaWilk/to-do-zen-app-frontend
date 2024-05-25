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
  const { header } = welcome;

  return (
    <section className={`${styles.welcome} `}>
      <article>
        <Logo text={'SpaceSteps'} />
        <Paragraph text={header} />
        <div className={styles.btns}>
          <ButtonBlack dynamicPath={'login'} buttonName={'Login'} />
          <ButtonBlack dynamicPath={'signup'} buttonName={'Signup'} />
        </div>
      </article>
      <AnimatedAstronaut />
    </section>
  );
};

export { Welcome };
