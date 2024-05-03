import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import styles from './ButtonBlack.module.scss';

interface Props {
  dynamicPath?: string | string[];
  buttonName: string;
}

const ButtonBlack = ({ dynamicPath, buttonName }: Props) => {
  if (!dynamicPath)
    return <button className={styles.component}> {parse(buttonName)}</button>;

  return (
    <Link to={`/${dynamicPath}`} className={styles.component}>
      {parse(buttonName)}
    </Link>
  );
};

export { ButtonBlack };
