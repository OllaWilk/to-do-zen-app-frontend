import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import styles from './ButtonBlack.module.scss';

interface Props {
  dynamicPath?: string | string[];
  buttonName: string;
  onClick?: () => void;
}

const ButtonBlack = ({ dynamicPath, buttonName, onClick }: Props) => {
  if (!dynamicPath)
    return <button className={styles.component}> {parse(buttonName)}</button>;

  return (
    <Link to={`/${dynamicPath}`} className={styles.component} onClick={onClick}>
      {parse(buttonName)}
    </Link>
  );
};

export { ButtonBlack };
