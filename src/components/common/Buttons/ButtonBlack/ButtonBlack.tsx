import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import styles from './ButtonBlack.module.scss';

interface Props {
  dynamicPath?: string | string[];
  buttonName: string;
  disabled?: boolean | null | undefined;
  onClick?: () => void;
}

const ButtonBlack = ({ dynamicPath, buttonName, onClick, disabled }: Props) => {
  const className = `${styles.component} ${disabled ? styles.disabled : ''}`;

  if (!dynamicPath)
    return (
      <button className={className} disabled={!!disabled}>
        {parse(buttonName)}
      </button>
    );

  return disabled ? (
    <span className={className}>{parse(buttonName)}</span>
  ) : (
    <Link to={`/${dynamicPath}`} className={className} onClick={onClick}>
      {parse(buttonName)}
    </Link>
  );
};

export { ButtonBlack };
