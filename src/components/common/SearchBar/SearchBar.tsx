import React from 'react';
import { ButtonIcon } from '../../common/index';
import style from './SearchBar.module.scss';

const SearchBar = () => {
  return (
    <div className={style.component}>
      <ButtonIcon />
      <input type='text' placeholder={'Search'} value={''} />
    </div>
  );
};

export { SearchBar };
