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
  price?: number | null;
  duration?: string;
  reminder?: number | null;
}

export const EventTags = ({
  status,
  category,
  price,
  duration,
  reminder,
}: Props) => (
  <div className={styles.eventsWrap}>
    <Tag text={status}>
      <LuCalendarClock />
    </Tag>
    <Tag text={category}>
      <MdCategory />
    </Tag>
    {price && (
      <Tag text={price + ' zł'}>
        <BsCashCoin />
      </Tag>
    )}
    {duration && (
      <Tag text={duration}>
        <TbTimeDuration10 />
      </Tag>
    )}
    {reminder && (
      <Tag text={reminder} days={' days'}>
        <p>Remind me for: </p>
      </Tag>
    )}
  </div>
);
