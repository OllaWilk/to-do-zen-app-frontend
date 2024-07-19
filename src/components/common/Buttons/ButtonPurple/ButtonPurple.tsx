import React from 'react';
import { Link } from 'react-router-dom';
import style from './ButtonPurple.module.scss';

interface Props {
  url?: string;
  text?: string;
  disabled?: boolean | null | undefined;
}

const ButtonPurple = ({ url, text, disabled }: Props) => {
  if (!url)
    return (
      <button className={style.buttonNoUrl} disabled={!!disabled}>
        {text}
      </button>
    );

  return (
    <Link to={url}>
      <p className={style.buttonIcon}>{text}</p>
    </Link>
  );
};

export { ButtonPurple };
