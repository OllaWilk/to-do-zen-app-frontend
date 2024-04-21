import React from 'react';
import parse from 'html-react-parser';
import styles from './SectionHeader.module.scss';

interface Props {
  text: string;
}

const SectionHeader = ({ text }: Props) => {
  return <h2 className={styles.sectionHeader}>{parse(text)}</h2>;
};

export { SectionHeader };
