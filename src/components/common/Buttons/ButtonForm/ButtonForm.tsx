import React from 'react';
import styles from './ButtonForm.module.scss';

interface Props {
  text: string | string[];
}

const ButtonForm = ({ text }: Props) => {
  return (
    <button type='submit' className={styles.component}>
      {text}
    </button>
  );
};

export { ButtonForm };
