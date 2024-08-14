import { UserActions } from '../../types/';
import { useEventsContext } from '../events-hooks';
import { useAuthContext } from './useAuthContext';

export enum EventActions {
  CREATE_EVENT = 'CREATE_EVENT',
  DELETE_EVENT = 'DELETE_EVENT',
  SET_CURRENT_EVENT = 'SET_CURRENT_EVENT',
  SET_EVENTS_EMPTY = 'SET_EVENTS',
  UPDATE_EVENT = 'UPDATE_EVENT',
}

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: eventDispatch } = useEventsContext();

  const logout = async () => {
    try {
      await fetch('http://localhost:3001/user/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
    } catch (error) {
      console.error('I can not logout you', error);
    }
    //dispatch logout action
    dispatch({ type: UserActions.LOGOUT });
    eventDispatch({ type: EventActions.SET_EVENTS_EMPTY, payload: [] });
  };

  return { logout };
};
