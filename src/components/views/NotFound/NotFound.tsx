import React from 'react';
import { AnimatedAstronaut, ButtonBlack } from '../../common/index';
import styles from './NotFound.module.scss';

interface Props {
  message?: string;
}
export const NotFound = ({ message }: Props) => (
  <div className={styles.componentWrap}>
    <div className={styles.infoWrap}>
      <h2>Upss... It looks like you’ve drifted off course into the cosmos!</h2>
      <p>{message}</p>
      <ButtonBlack
        dynamicPath={'cockpit'}
        buttonName={'Return to the main cocakpit'}
      />
    </div>
    <div className={styles.imgWrap}>
      <AnimatedAstronaut />
    </div>
  </div>
);
