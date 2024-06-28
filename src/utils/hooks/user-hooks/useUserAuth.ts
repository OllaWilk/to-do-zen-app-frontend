import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { UserActions } from '../../types/JsonCommunicationType';

export const useUserAuth = () => {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<null | boolean>(null);
  const { dispatch } = useAuthContext();

  const auth = async (email: string, password: string, url: string) => {
    setIsLoading(true);
    setError(null);

    const res = await fetch(`http://localhost:3001/user/${url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const json = await res.json();

    if (!res.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (res.ok) {
      //save the user to local storage
      localStorage.setItem('user', JSON.stringify({ ...json }));

      //update AuthContext
      dispatch({
        type: UserActions.LOGIN,
        payload: json,
      });

      setIsLoading(false);
    }
  };

  return { auth, isLoading, error };
};
