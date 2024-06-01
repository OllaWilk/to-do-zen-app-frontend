import React, { SyntheticEvent } from 'react';
import { FaTrash } from 'react-icons/fa';

import { useEventsContext, useAuthContext } from '../../../../utils/hooks';
import { HttpMethod } from '../../../../utils/types/JsonCommunicationType';
import styles from './ButtonDelete.module.scss';

interface Props {
  eventId: string;
}

export const ButtonDelete = ({ eventId }: Props) => {
  const { dispatch } = useEventsContext();
  const { user } = useAuthContext();

  const deleteItem = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!user) {
      return;
    }

    const response = await fetch(`http://localhost:3001/events/${eventId}`, {
      method: HttpMethod.DELETE,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    if (response.ok) {
      dispatch({ type: 'DELETE_EVENT', payload: eventId });
    }
  };

  return <FaTrash className={styles.icon} onClick={deleteItem} />;
};
