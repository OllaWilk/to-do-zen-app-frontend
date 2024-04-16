import React from 'react';
import { notFoundContent } from '../../../data/dataStore';
import { AnimatedAstronaut, ButtonBlack } from '../../common/index';
import styles from './NotFound.module.scss';

interface Props {
  message?: string;
}

const NotFound = ({ message }: Props) => {
  return (
    <div className={styles.componentWrap}>
      <div className={styles.infoWrap}>
        <h2>{notFoundContent.notFoundMessage}</h2>
        <p>{message}</p>
        <ButtonBlack
          dynamicPath={`${notFoundContent.url}`}
          buttonName={`${notFoundContent.return}`}
        />
      </div>
      <div className={styles.imgWrap}>
        <AnimatedAstronaut />
      </div>
    </div>
  );
};

export { NotFound };
