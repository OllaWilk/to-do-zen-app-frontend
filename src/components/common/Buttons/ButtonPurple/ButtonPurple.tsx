import React from 'react';
import { Link } from 'react-router-dom';
import style from './ButtonPurple.module.scss';

interface Props {
  url: string;
}

const ButtonPurple = ({ url }: Props) => {
  return (
    <Link to={url}>
      <p className={style.buttonIcon}>edit</p>
    </Link>
  );
};

export { ButtonPurple };
