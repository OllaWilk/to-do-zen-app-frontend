import React, { SyntheticEvent } from 'react';
import { deleteTask } from '../../../../utils/apiCalls/taskService';
import { useTasksContext } from '../../../../utils/hooks/useTasksContext';
import styles from './ButtonDeleteTask.module.scss';

interface Props {
  taskId: string;
}

const ButtonDeleteTask = ({ taskId }: Props) => {
  const { dispatch } = useTasksContext();
  const deleteItem = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await deleteTask(taskId);
      dispatch({ type: 'DELETE_TASK', payload: taskId });
    } catch (error) {
      console.log('Something went wrong. Failed to delete the task');
    }
  };

  return (
    <div onClick={deleteItem} className={styles.component}>
      Delete
    </div>
  );
};

export { ButtonDeleteTask };
