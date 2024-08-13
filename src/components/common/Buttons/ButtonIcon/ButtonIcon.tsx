import React from 'react';
import { FaSearch } from 'react-icons/fa';

import style from './ButtonIcon.module.scss';

const ButtonIcon = () => (
  <button className={style.buttonIcon}>
    <FaSearch />
  </button>
);

export { ButtonIcon };
