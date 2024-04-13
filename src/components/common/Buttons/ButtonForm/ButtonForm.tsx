import React from 'react';
import styles from './ButtonForm.module.scss';

interface Props {
  text: string | string[];
}

const ButtonForm = ({ text }: Props) => {
  return <div className={styles.component}>{text}</div>;
};

export { ButtonForm };
