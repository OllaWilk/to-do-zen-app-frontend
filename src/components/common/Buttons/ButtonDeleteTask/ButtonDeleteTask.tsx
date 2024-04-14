import React, { SyntheticEvent } from 'react';
import { deleteTask } from '../../../../utils/apiCalls/taskService';
import styles from './ButtonDeleteTask.module.scss';

interface Props {
  taskId: string;
}

const ButtonDeleteTask = ({ taskId }: Props) => {
  const deleteItem = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await deleteTask(taskId);
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
