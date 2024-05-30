import React, { SyntheticEvent } from 'react';
import { FaTrash } from 'react-icons/fa';

import { useFetch, useEventsContext } from '../../../../utils/hooks';
import { HttpMethod } from '../../../../utils/types/JsonCommunicationType';
import styles from './ButtonDelete.module.scss';

interface Props {
  taskId: string;
}

export const ButtonDelete = ({ taskId }: Props) => {
  const { dispatch } = useEventsContext();
  const { fetchData } = useFetch();

  const deleteItem = async (e: SyntheticEvent) => {
    e.preventDefault();

    fetchData(`http://localhost:3001/events/${taskId}`, {
      method: HttpMethod.DELETE,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({ type: 'DELETE_EVENT', payload: taskId });
  };

  return <FaTrash className={styles.icon} onClick={deleteItem} />;
};
