import React from 'react';
import { starts, astronaut } from '../../../images/index';
import styles from './AnimatedAstronaut.module.scss';

const AnimatedAstronaut = () => (
  <div className={styles.imgWrap}>
    <img src={starts} alt='starts' />
    <img className={styles.astronaut} src={astronaut} alt='astronaut' />
  </div>
);

export { AnimatedAstronaut };
