import React from 'react';
import backgrounImg from '../../../../images/space.png';
import { SectionHeader, Paragraph } from '../../../common/index';
import styles from './EventDetails.module.scss';

interface Props {
  title: string;
  date?: Date | null;
  description?: string | number;
}

export const EventDetails = ({ title, date, description }: Props) => (
  <div className={styles.event}>
    <div className={styles.imgWrap}>
      <img src={backgrounImg} alt='woman in space' />
    </div>
    <SectionHeader text={title} date={date} />
    <div className={styles.wrap}>
      <Paragraph text={description} />
    </div>
  </div>
);
