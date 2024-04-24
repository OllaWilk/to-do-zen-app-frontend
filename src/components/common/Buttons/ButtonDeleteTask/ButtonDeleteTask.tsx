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
    await deleteTask(taskId);
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };

  return (
    <div onClick={deleteItem} className={styles.component}>
      Delete
    </div>
  );
};

export { ButtonDeleteTask };
