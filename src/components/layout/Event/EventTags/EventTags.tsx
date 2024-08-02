import React from 'react';
import { LuCalendarClock } from 'react-icons/lu';
import { BsCashCoin } from 'react-icons/bs';
import { MdCategory } from 'react-icons/md';
import { TbTimeDuration10 } from 'react-icons/tb';
import { Tag } from '../../../common/index';
import styles from './EventTags.module.scss';

interface Props {
  status: string;
  category: string;
  price?: number | null | 'free';
  duration?: string;
  reminder?: number | null;
}

export const EventTags = ({ status, category, price, duration }: Props) => (
  <div className={styles.eventsWrap}>
    <Tag text={status}>
      <LuCalendarClock />
    </Tag>
    <Tag text={category}>
      <MdCategory />
    </Tag>

    <Tag text={price + ' zł'}>
      <BsCashCoin />
    </Tag>

    {duration && (
      <Tag text={duration}>
        <TbTimeDuration10 />
      </Tag>
    )}
  </div>
);
