import React from 'react';
import parse from 'html-react-parser';

import styles from './Paragraph.module.scss';

interface Props {
  text?: string | number;
}

const Paragraph = ({ text }: Props) => {
  return (
    <p className={styles.paragraph}>
      {typeof text !== 'number' ? parse(text + '') : text}
    </p>
  );
};

export { Paragraph };
