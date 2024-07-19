import React, { SyntheticEvent, useContext, useState } from 'react';
import { ButtonIcon } from '../../common/index';
import { SearchContext } from '../../../context/search';
import style from './SearchBar.module.scss';

/**
 * The SearchBar component allows users to enter search queries.
 * It uses context to manage search query state at the application level.
 */

const SearchBar = () => {
  // Retrieve the search state and the function to update it from the context
  const { search, setSearch, setOrder } = useContext(SearchContext);
  // Local state for input value
  const [inputVal, setInputVal] = useState(search);

  /**
   * Function to handle form submission.
   * Updates the search state and resets the input value.
   */
  const setSearchFromLocaleState = (e: SyntheticEvent) => {
    e.preventDefault();
    setOrder(''); // Resets the order value
    setSearch(inputVal); // Updates the search state in the context
    setInputVal(''); // Resets the input value
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
