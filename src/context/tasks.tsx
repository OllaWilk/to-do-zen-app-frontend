import React, { createContext, useReducer } from 'react';
import { TaskEntity } from 'types';

type TasksState = {
  tasks: TaskEntity[] | null;
  task: TaskEntity | null;
};

type TaskAction =
  | { type: 'SET_TASKS'; payload: TaskEntity[] }
  | { type: 'CREATE_TASK'; payload: TaskEntity }
  | { type: 'DELETE_TASK'; payload: string }
  | { type: 'UPDATE_TASK'; payload: TaskEntity }
  | { type: 'SET_TASKS_EMPTY'; payload?: [] }
  | { type: 'SET_CURRENT_TASK'; payload: TaskEntity };

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
    case 'DELETE_TASK':
      return {
        ...state,
        tasks:
          state.tasks?.filter((task) => task.id !== action.payload) ||
          [].length > 0
            ? state.tasks?.filter((task) => task.id !== action.payload) || []
            : null,
      };
    case 'SET_CURRENT_TASK':
      return {
        ...state,
        task: action.payload,
      };
    case 'UPDATE_TASK': {
      const updatedTasks = state.tasks?.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );

      return {
        ...state,
        task: action.payload,
        tasks: updatedTasks || state.tasks,
      };
    }
    default:
      return state;
  }
};

export const TasksContextProvider = ({ children }: Props) => {
  const initialState: TasksState = { tasks: [], task: null };

  const [state, dispatch] = useReducer(tasksReducer, initialState);

  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};
