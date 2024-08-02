import { useState, useCallback } from 'react';
import { EventEntity, NewEventEntity } from 'types';
import {
  useAuthContext,
  useEventsContext,
  useAsistantMessageContext,
} from '../index';

type GetEventsParams = { id?: string; search?: string; order?: string };

interface FetchState<T> {
  event: T | null;
  message: string | null;
  setMessage: (message: string | null) => void;
  eventInsert: (data: NewEventEntity | EventEntity) => Promise<void>;
  eventDelete: (id: string) => Promise<void>;
  getEvents: (params?: GetEventsParams) => Promise<void>;
}

// Custom hook for event-related operations
export const useEventFetch = <T>(): FetchState<T> => {
  const { message, setMessage } = useAsistantMessageContext(); // Message context for displaying messages
  const [json, setJson] = useState<T | null>(null); // State to hold the fetched event data
  const { user } = useAuthContext(); // Authentication context to get user data
  const { dispatch } = useEventsContext(); // Events context to dispatch actions

  // Function to insert or update an event
  const eventInsert = async (data: NewEventEntity | EventEntity) => {
    setMessage(null); // Clear any previous messages
    const method = 'id' in data ? 'PATCH' : 'POST'; // Determine the HTTP method based on whether the event has an id
    const url =
      'id' in data
        ? `http://localhost:3001/events/${data.id}`
        : `http://localhost:3001/events`;

    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user?.token}`, // Include the authorization header
      },
      body: JSON.stringify(data), // Send the event data as JSON
    });

    const json = await res.json(); // Parse the JSON response

    if (!res.ok) {
      setMessage(json.error || 'An error occurred'); // Set an error message if the request was not successful
    }

    if (res.ok) {
      //update EventContext
      dispatch({
        type: method === 'POST' ? 'CREATE_EVENT' : 'UPDATE_EVENT',
        payload: json,
      });
      setMessage(null); // Clear the message state
      setJson(json);
    }
  };

  // Function to delete an event
  const eventDelete = async (id: string) => {
    setMessage(null); // Clear any previous messages

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

  // Function to fetch events
  const getEvents = useCallback(
    async ({ id, search, order }: GetEventsParams = {}) => {
      setMessage(null); // Clear any previous messages

      let url;

      if (id) {
        url = `http://localhost:3001/events/${id}`; // Fetch a specific event by id
      } else if (search && !order) {
        url = `http://localhost:3001/events/search/${search}`; // Fetch events by search term
      } else if (search && order) {
        url = `http://localhost:3001/events/sort/${search}/${order}`; // Fetch and sort events by search term and order
      } else {
        url = 'http://localhost:3001/events'; // Fetch all events
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

        // Dispatch an action to set the fetched events in the context
        dispatch({
          type: !id ? 'SET_EVENTS' : 'SET_CURRENT_EVENT',
          payload: eventRecords,
        });
        setJson(eventRecords);
      } else {
        setMessage(json.message);
      }
    },
    [dispatch, user, setMessage] // Dependencies for the useCallback hook
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
