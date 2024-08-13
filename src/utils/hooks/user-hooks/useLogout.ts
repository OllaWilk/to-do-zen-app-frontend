import { UserActions /* EventActions */ } from '../../types/';
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

  const logout = () => {
    //remove user from storage
    localStorage.removeItem('user');

    //dispatch logout action
    dispatch({ type: UserActions.LOGOUT });
    eventDispatch({ type: EventActions.SET_EVENTS_EMPTY, payload: [] });
  };

  return { logout };
};
