import React from 'react';
import { FaSearch } from 'react-icons/fa';

import style from './ButtonIcon.module.scss';

const ButtonIcon = () => {
  return (
    <div className={style.buttonIcon}>
      <FaSearch />
    </div>
  );
};

export { ButtonIcon };
