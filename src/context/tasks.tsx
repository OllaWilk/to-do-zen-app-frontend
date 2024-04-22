import React, { createContext, useReducer } from 'react';
import { TaskEntity } from 'types';

type TasksState = {
  tasks: TaskEntity[] | null;
};

type TaskAction =
  | { type: 'SET_TASKS'; payload: TaskEntity[] }
  | { type: 'CREATE_TASK'; payload: TaskEntity };

type Props = {
  children: React.ReactNode;
};

export const TasksContext = createContext<{
  state: TasksState;
  dispatch: React.Dispatch<TaskAction>;
} | null>(null);

export const tasksReducer = (
  state: TasksState,
  action: TaskAction
): TasksState => {
  switch (action.type) {
    case 'SET_TASKS':
      return {
        ...state,
        tasks: action.payload,
      };
    case 'CREATE_TASK':
      return { ...state, tasks: [action.payload, ...(state.tasks || [])] };

    default:
      return state;
  }
};

export const TasksContextProvider = ({ children }: Props) => {
  const initialState: TasksState = { tasks: [] };

  const [state, dispatch] = useReducer(tasksReducer, initialState);

  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};
