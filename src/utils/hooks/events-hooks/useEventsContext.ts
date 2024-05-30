import { EventsContext } from '../../../context/events';
import { useContext } from 'react';

export const useEventsContext = () => {
  const context = useContext(EventsContext);

  if (!context) {
    throw Error('useTasksContext must be used inside an TasksContextProvider');
  }

  return context;
};
