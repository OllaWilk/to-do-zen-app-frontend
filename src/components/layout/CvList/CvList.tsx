import React from 'react';
import styles from './CvList.module.scss';

interface Entry {
  year: string;
  name?: string;
  description?: string;
}

interface Props {
  entries: Entry[];
}

const CvList = ({ entries }: Props) => (
  <ul className={styles.listWrap}>
    {entries.map((entry, index) => (
      <li key={index} className={styles.list}>
        <span className={styles.year}>{entry.year}</span>
        <div className={styles.text}>
          <p>{entry.name},</p>
          <p className={styles.description}>{entry.description}</p>
        </div>
      </li>
    ))}
  </ul>
);

export { CvList };
