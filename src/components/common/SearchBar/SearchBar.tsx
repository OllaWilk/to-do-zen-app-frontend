import React from 'react';
import { ButtonIcon } from '../../common/index';
import { search } from '../../../images/index';
import style from './SearchBar.module.scss';

const SearchBar = () => {
  return (
    <div className={style.component}>
      <ButtonIcon icon={search} />
      <input type='text' placeholder={'Search'} value={''} />
    </div>
  );
};

export { SearchBar };
