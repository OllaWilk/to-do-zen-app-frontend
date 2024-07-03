import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import style from './ButtonBlack.module.scss';

interface Props {
  dynamicPath?: string | string[];
  buttonName: string;
  disabled?: boolean | null | undefined;
  styles?: React.CSSProperties;

  onClick?: () => void;
}

const ButtonBlack = ({
  dynamicPath,
  buttonName,
  onClick,
  disabled,
  styles,
}: Props) => {
  const className = `${style.component} ${disabled ? style.disabled : ''}`;

  if (!dynamicPath)
    return (
      <button style={styles} className={className} disabled={!!disabled}>
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
