import { useState, useCallback } from 'react';
import { EventEntity, NewEventEntity } from 'types';
import {
  useAuthContext,
  useEventsContext,
  useAsistantMessageContext,
} from '../index';

type GetEventsParams = { id?: string; search?: string };

interface FetchState<T> {
  event: T | null;
  message: string | null;
  setMessage: (message: string | null) => void;
  eventInsert: (data: NewEventEntity | EventEntity) => Promise<void>;
  eventDelete: (id: string) => Promise<void>;
  getEvents: (params?: GetEventsParams) => Promise<void>;
}

export const useEventFetch = <T>(): FetchState<T> => {
  const { message, setMessage } = useAsistantMessageContext();
  const [json, setJson] = useState<T | null>(null);
  const { user } = useAuthContext();
  const { dispatch } = useEventsContext();

  const eventInsert = async (data: NewEventEntity | EventEntity) => {
    setMessage(null);
    const method = 'id' in data ? 'PATCH' : 'POST';
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
      setMessage(json.error || 'An error occurred');
    }

    if (res.ok) {
      //update EventContext
      dispatch({
        type: method === 'POST' ? 'CREATE_EVENT' : 'UPDATE_EVENT',
        payload: json,
      });
      setMessage(null);
      setJson(json);
    }
  };

  const eventDelete = async (id: string) => {
    setMessage(null);

    const res = await fetch(`http://localhost:3001/events/${id}`, {
      method: 'DELETE',
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
    async ({ id, search }: GetEventsParams = {}) => {
      setMessage(null);

      let url;

      if (id) {
        url = `http://localhost:3001/events/${id}`;
      } else if (search) {
        url = `http://localhost:3001/events/search/${search}`;
      } else {
        url = 'http://localhost:3001/events';
      }

      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user?.token}`,
        },
      });

      const json = await response.json();

      if (response.ok) {
        const eventRecords = !id && !search ? json.eventRecord : json;

        dispatch({
          type: !id ? 'SET_EVENTS' : 'SET_CURRENT_EVENT',
          payload: eventRecords,
        });
        setJson(eventRecords);
      } else {
        setMessage(json.message);
      }
    },
    [dispatch, user, setMessage]
  );

  return {
    eventInsert,
    eventDelete,
    getEvents,
    message,
    setMessage,
    event: json,
  };
};
