import React from 'react';
import styles from './Paragraph.module.scss';

interface Props {
  text: string;
}

const Paragraph = ({ text }: Props) => {
  return <p className={styles.paragraph}>{text}</p>;
};

export { Paragraph };
