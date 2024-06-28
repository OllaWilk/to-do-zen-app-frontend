import React from 'react';
import { Link } from 'react-router-dom';
import style from './ButtonPurple.module.scss';

interface Props {
  url: string;
  text?: string;
}

const ButtonPurple = ({ url, text }: Props) => {
  return (
    <Link to={url}>
      <p className={style.buttonIcon}>{text}</p>
    </Link>
  );
};

export { ButtonPurple };
