import React, { SyntheticEvent, useContext } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { SearchContext } from '../../../context/search';
import { ButtonSort } from '../Buttons';

import style from './SortBar.module.scss';

// The SortBar component provides a sorting interface for event listings.
const SortBar = () => {
  // Use useContext to access search-related state and actions from SearchContext.
  const { setOrder, search, order, setSearch } = useContext(SearchContext);

  // Define the sorting buttons with their respective values and labels.
  const buttons = [
    { value: '', label: 'all' }, // Button to show all events.
    { value: 'title', label: 'title' }, // Button to sort events by title.
    { value: 'status', label: 'status' }, // Button to sort events by status.
    { value: 'price', label: 'price' }, // Button to sort events by price.
    { value: 'event_date', label: 'event date' }, // Button to sort events by event date.
  ];

  // Handle sorting when a button is clicked.
  const handleSort = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement; // Get the button element that was clicked.
    setSearch(target.value); // Set the search context to the button's value.
    setOrder('ASC'); // Set the sorting order to ascending by default.
  };

  // Toggle the sorting order between ascending and descending.
  const toggleOrder = (newOrder: 'ASC' | 'DESC') => {
    search === '' ? setOrder('') : setOrder(newOrder); // Update the sorting order in the search context.
    setSearch(search); // Reapply the current search query with the new order.
  };

  return (
    <form className={style.buttonsWrap}>
      {buttons.map((button, index) => (
        <ButtonSort
          key={`${button}-${index}-order`}
          value={button.value}
          label={button.label}
          handleSort={handleSort}
        />
      ))}
      <div className={style.ikons}>
        <FaArrowUp
          onClick={() => toggleOrder('ASC')}
          style={order === 'ASC' ? { opacity: 1 } : { opacity: 0.5 }}
        />
        <FaArrowDown
          onClick={() => toggleOrder('DESC')}
          style={order === 'DESC' ? { opacity: 1 } : { opacity: 0.5 }}
        />
      </div>
    </form>
  );
};

export { SortBar };
