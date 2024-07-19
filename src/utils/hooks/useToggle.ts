import { useState, useCallback } from 'react';

// Custom hook to toggle a boolean value
export const useToggle = (initialValue: boolean): [boolean, () => void] => {
  // State to hold the current value, initialized with the provided initial value
  const [value, setValue] = useState(initialValue);

  // Function to toggle the value between true and false
  const toggleValue = useCallback(() => {
    setValue((currentValue) => !currentValue);
  }, []);

  // Return the current value and the toggle function
  return [value, toggleValue];
};
