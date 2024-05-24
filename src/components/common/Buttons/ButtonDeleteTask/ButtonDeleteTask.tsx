import React, { SyntheticEvent } from 'react';
import { FaTrash } from 'react-icons/fa';

import { useTasksContext } from '../../../../utils/hooks/useTasksContext';
import { HttpMethods, useFetch } from '../../../../utils/hooks/useFetch';
import styles from './ButtonDeleteTask.module.scss';

interface Props {
  taskId: string;
}

const ButtonDeleteTask = ({ taskId }: Props) => {
  const { dispatch } = useTasksContext();
  const { fetchData } = useFetch();

  const deleteItem = async (e: SyntheticEvent) => {
    e.preventDefault();

    fetchData(`http://localhost:3001/events/${taskId}`, {
      method: HttpMethods.DELETE,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };

  return <FaTrash className={styles.icon} onClick={deleteItem} />;
};

export { ButtonDeleteTask };
