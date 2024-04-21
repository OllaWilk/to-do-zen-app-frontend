import React from 'react';
import { notFound } from '../../../data/pages/notFound';
import { AnimatedAstronaut, ButtonBlack } from '../../common/index';
import styles from './NotFound.module.scss';

interface Props {
  message?: string;
}
const NotFound = ({ message }: Props) => {
  const { header, button } = notFound;
  return (
    <div className={styles.componentWrap}>
      <div className={styles.infoWrap}>
        <h2>{header}</h2>
        <p>{message}</p>
        <ButtonBlack
          dynamicPath={`${button.link}`}
          buttonName={`${button.text}`}
        />
      </div>
      <div className={styles.imgWrap}>
        <AnimatedAstronaut />
      </div>
    </div>
  );
};

export { NotFound };
