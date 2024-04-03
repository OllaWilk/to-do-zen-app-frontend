import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import styles from './ButtonBlack.module.scss';

interface Props {
  dynamicPath: string;
  buttonName: string;
}

const ButtonBlack = ({ dynamicPath, buttonName }: Props) => {
  return (
    <Link to={`/${dynamicPath}`} className={styles.component}>
      {parse(buttonName)}
    </Link>
  );
};

export { ButtonBlack };
