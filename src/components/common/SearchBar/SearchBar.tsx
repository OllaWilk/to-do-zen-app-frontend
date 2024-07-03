import React, { SyntheticEvent, useContext, useState } from 'react';
import { ButtonIcon } from '../../common/index';
import style from './SearchBar.module.scss';
import { SearchContext } from '../../../context/search';

const SearchBar = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [inputVal, setInputVal] = useState(search);

  const setSearchFromLocaleState = (e: SyntheticEvent) => {
    e.preventDefault();
    setSearch(inputVal);
  };
  return (
    <form className={style.component} onSubmit={setSearchFromLocaleState}>
      <ButtonIcon />
      <input
        type='text'
        placeholder={'Search'}
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
    </form>
  );
};

export { SearchBar };
