import React from 'react';
import styles from './SectionHeader.module.scss';

interface Props {
  text: string;
}

const SectionHeader = ({ text }: Props) => {
  return <h2 className={styles.sectionHeader}>{text}</h2>;
};

export { SectionHeader };
