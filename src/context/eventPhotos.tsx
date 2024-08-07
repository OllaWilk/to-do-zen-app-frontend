import React, { Dispatch, ReactNode, useReducer, createContext } from 'react';
import { EventPhoto } from 'types';

interface EventPhotoState {
  photos: EventPhoto[] | null;
}

type EventPhotoAction =
  | { type: 'SET_EVENT_PHOTO'; payload: EventPhoto[] }
  | { type: 'ADD_EVENT_PHOTO'; payload: EventPhoto }
  | { type: 'DELETE_EVENT_PHOTO'; payload: string };

const initialState: EventPhotoState = { photos: [] };

export const eventPhotosReducer = (
  state: EventPhotoState,
  action: EventPhotoAction
) => {
  switch (action.type) {
    case 'SET_EVENT_PHOTO':
      return {
        ...state,
        photos: action.payload,
      };
    case 'ADD_EVENT_PHOTO':
      console.log('add photo', state, action);
      return {
        ...state,
        photos: [action.payload, ...(state.photos || [])],
      };
    case 'DELETE_EVENT_PHOTO':
      return {
        ...state,
        photos:
          state.photos?.filter((photo) => photo.photo_id !== action.payload) ||
          [],
      };
    default:
      return state;
  }
};

const EventPhotosContext = createContext<{
  state: EventPhotoState;
  dispatch: Dispatch<EventPhotoAction>;
}>({ state: initialState, dispatch: () => null });

const EventPhotosContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(eventPhotosReducer, initialState);

  return (
    <EventPhotosContext.Provider value={{ state, dispatch }}>
      {children}
    </EventPhotosContext.Provider>
  );
};

export { EventPhotosContext, EventPhotosContextProvider };
