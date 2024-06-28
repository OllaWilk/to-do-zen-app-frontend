import React, { SyntheticEvent } from 'react';
import { FaTrash } from 'react-icons/fa';

import { useAuthContext, useEventFetch } from '../../../../utils/hooks';
import styles from './ButtonDelete.module.scss';

interface Props {
  eventId: string;
}

export const ButtonDelete = ({ eventId }: Props) => {
  const { user } = useAuthContext();
  const { eventDelete } = useEventFetch();

  const deleteItem = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!user) {
      return;
    }

    await eventDelete(eventId);
  };

  return <FaTrash className={styles.icon} onClick={deleteItem} />;
};
