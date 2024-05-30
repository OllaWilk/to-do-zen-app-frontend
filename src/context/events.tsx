import React, { createContext, Dispatch, useReducer } from 'react';
import { EventEntity } from 'types';

type EventsState = {
  events: EventEntity[] | null;
  event: EventEntity | null;
};

type EventAction =
  | { type: 'SET_EVENTS'; payload: EventEntity[] }
  | { type: 'CREATE_EVENT'; payload: EventEntity }
  | { type: 'DELETE_EVENT'; payload: string }
  | { type: 'UPDATE_EVENT'; payload: EventEntity }
  | { type: 'SET_EVENTS_EMPTY'; payload?: [] }
  | { type: 'SET_CURRENT_EVENT'; payload: EventEntity };

type Props = {
  children: React.ReactNode;
};

export const EventsContext = createContext<{
  state: EventsState;
  dispatch: Dispatch<EventAction>;
} | null>(null);

export const eventsReducer = (
  state: EventsState,
  action: EventAction
): EventsState => {
  switch (action.type) {
    case 'SET_EVENTS':
      return {
        ...state,
        events: action.payload,
      };
    case 'CREATE_EVENT':
      return { ...state, events: [action.payload, ...(state.events || [])] };
    case 'DELETE_EVENT':
      return {
        ...state,
        events:
          state.events?.filter((event) => event.id !== action.payload) ||
          [].length > 0
            ? state.events?.filter((event) => event.id !== action.payload) || []
            : null,
      };
    case 'SET_CURRENT_EVENT':
      return {
        ...state,
        event: action.payload,
      };
    case 'UPDATE_EVENT': {
      const updatedEvents = state.events?.map((event) =>
        event.id === action.payload.id ? action.payload : event
      );

      return {
        ...state,
        event: action.payload,
        events: updatedEvents || state.events,
      };
    }
    default:
      return state;
  }
};

export const EventsContextProvider = ({ children }: Props) => {
  const initialState: EventsState = { events: [], event: null };

  const [state, dispatch] = useReducer(eventsReducer, initialState);

  return (
    <EventsContext.Provider value={{ state, dispatch }}>
      {children}
    </EventsContext.Provider>
  );
};
