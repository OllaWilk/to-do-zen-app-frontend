import React, { createContext, useReducer, Dispatch, useEffect } from 'react';
import { UserEntity, CompleteUserEntity } from '@alexwilk/spacesteps-types';
import { UserActions } from '../utils/types/JsonCommunicationType';
//
// Define the initial state type
type UserState = {
  user: UserEntity | null;
};

// Define action types for the reducer
type UserAction =
  | { type: UserActions.LOGIN; payload: UserEntity }
  | { type: UserActions.LOGOUT };

// Define the Auth context type
type AuthContextType = {
  user: CompleteUserEntity | null;
  dispatch: Dispatch<UserAction>;
};
// Define the props for the AuthContextProvider component
type Props = {
  children: React.ReactNode;
};

// Initialize the initial state
const initialState: UserState = {
  user: null,
};

// Create the Auth context
export const AuthContext = createContext<AuthContextType | null>(null);

// Define the auth reducer function
export const authReducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case UserActions.LOGIN:
      return { user: action.payload };
    case UserActions.LOGOUT:
      return { user: null };
    default:
      return state;
  }
};

// Define the AuthContextProvider component
export const AuthContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Fetch the currently logged-in user from the backend
    (async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/user/me`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (res.ok) {
          const user = await res.json();
          dispatch({ type: UserActions.LOGIN, payload: user });
        } else {
          dispatch({ type: UserActions.LOGOUT });
        }
      } catch (error) {
        console.error('Failed to fetch', error);
        dispatch({ type: UserActions.LOGOUT });
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
