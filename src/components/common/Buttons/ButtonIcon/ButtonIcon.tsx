import React from 'react';
import style from './ButtonIcon.module.scss';

interface Props {
  icon: string;
}

const ButtonIcon = ({ icon }: Props) => {
  return (
    <div className={style.buttonIcon}>
      <img src={icon} alt={`${icon}-icon`} />
    </div>
  );
};

export { ButtonIcon };
