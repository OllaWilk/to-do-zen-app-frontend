import React, { createContext, useReducer, Dispatch, useEffect } from 'react';
import { UserEntity, CompleteUserEntity } from 'types';
import { UserActions } from '../utils/types/JsonCommunicationType';
import { isTokenExpired } from '../utils/hooks/tokenValidation';

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
    const savedUser = localStorage.getItem('user');

    //get user from localStorage
    if (savedUser) {
      const user = JSON.parse(savedUser);
      const token = user.token;

      // Check if the token is expired
      if (token && isTokenExpired(token)) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/';
      } else {
        // Dispatch login action if the token is valid
        dispatch({ type: UserActions.LOGIN, payload: user });
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
