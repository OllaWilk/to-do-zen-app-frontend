import { useState, useCallback } from 'react';
import { EventEntity, NewEventEntity } from 'types';
import { useAuthContext, useEventsContext } from '../index';
import { HttpMethod, EventActions } from '../../types';

interface FetchState<T> {
  event: T | null;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  eventInsert: (data: NewEventEntity | EventEntity) => Promise<void>;
  eventDelete: (id: string) => Promise<void>;
  getEvents: (id?: string) => Promise<void>;
}

export const useEventFetch = <T>(): FetchState<T> => {
  const [error, setError] = useState<null | string>(null);
  const [json, setJson] = useState<T | null>(null);
  const { user } = useAuthContext();
  const { dispatch } = useEventsContext();

  const eventInsert = async (data: NewEventEntity | EventEntity) => {
    setError(null);

    const method = 'id' in data ? HttpMethod.PATCH : HttpMethod.POST;
    const url =
      'id' in data
        ? `http://localhost:3001/events/${data.id}`
        : `http://localhost:3001/events`;

    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.token}`,
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (!res.ok) {
      setError(json.message);
    }

    if (res.ok) {
      //update EventContext
      dispatch({
        type:
          method === HttpMethod.POST
            ? EventActions.CREATE_EVENT
            : EventActions.UPDATE_EVENT,
        payload: json,
      });
      setError(null);
      setJson(json);
    }
  };

  const eventDelete = async (id: string) => {
    setError(null);

    const res = await fetch(`http://localhost:3001/events/${id}`, {
      method: HttpMethod.DELETE,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.token}`,
      },
    });

    if (res.ok) {
      dispatch({ type: 'DELETE_EVENT', payload: id });
    }
  };

  const getEvents = useCallback(
    async (id?: string) => {
      setError(null);
      const url = !id
        ? 'http://localhost:3001/events'
        : `http://localhost:3001/events/${id}`;

      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user?.token}`,
        },
      });

      const json = await response.json();

      if (response.ok) {
        const eventRecords = !id ? json.eventRecord : json;

        dispatch({
          type: !id ? 'SET_EVENTS' : 'SET_CURRENT_EVENT',
          payload: eventRecords,
        });
        setJson(eventRecords);
      } else {
        setError(json.message);
      }
    },
    [dispatch, user]
  );

  return { eventInsert, eventDelete, getEvents, error, setError, event: json };
};
