import { useState } from 'react';
import { EventEntity, NewEventEntity } from 'types';
import { useAuthContext, useEventsContext } from '../index';
import { HttpMethod, EventActions } from '../../types';

export const useEventFetch = () => {
  const [error, setError] = useState<null | string>(null);
  const { user } = useAuthContext();
  const { dispatch } = useEventsContext();

  const eventInsert = async (data: NewEventEntity | EventEntity) => {
    setError(null);

    const res = await fetch(`http://localhost:3001/events`, {
      method: HttpMethod.POST,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.token}`,
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (!res.ok) {
      setError(json.error);
    }

    if (res.ok) {
      //update EventContext
      dispatch({
        // type: event?.id ? 'UPDATE_EVENT' : 'CREATE_EVENT',
        type: EventActions.CREATE_EVENT,
        payload: json,
      });
    }
  };

  return { eventInsert, error };
};
