import { UserActions } from '../../types/JsonCommunicationType';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    //remove user from storage
    localStorage.removeItem('user');

    //dispatch logout action

    dispatch({ type: UserActions.LOGOUT });
  };

  return { logout };
};
