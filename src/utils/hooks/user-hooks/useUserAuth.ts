import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { UserActions } from '../../types/JsonCommunicationType';

// Custom hook for user authentication
export const useUserAuth = () => {
  // State for managing error messages
  const [error, setError] = useState<null | string>(null);
  // State for managing loading status
  const [isLoading, setIsLoading] = useState<null | boolean>(null);
  // Destructure dispatch from AuthContext
  const { dispatch } = useAuthContext();

  // Function to handle authentication
  const auth = async (email: string, password: string, url: string) => {
    setIsLoading(true);
    setError(null);

    // Make a POST request to the authentication endpoint
    const res = await fetch(`http://localhost:3001/user/${url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }), // Send email and password in the request body
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
  // Return the auth function, loading state, and error state
  return { auth, isLoading, error };
};
