import { TasksContext } from '../../context/tasks';
import { useContext } from 'react';

export const useTasksContext = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw Error('useTasksContext must be used inside an TasksContextProvider');
  }

  return context;
};
