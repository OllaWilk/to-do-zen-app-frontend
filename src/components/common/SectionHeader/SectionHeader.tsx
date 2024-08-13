import React from 'react';
import parse from 'html-react-parser';
import { DateDisplay } from '../DateDisplay/DateDisplay';
import styles from './SectionHeader.module.scss';

interface Props {
  text: string;
  date?: Date | null;
}

const SectionHeader = ({ text, date }: Props) => (
  <div className={styles.sectionHeader}>
    <h2>{parse(text)}</h2>
    {date && <DateDisplay date={date} />}
  </div>
);

export { SectionHeader };
