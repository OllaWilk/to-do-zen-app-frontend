import React, { createContext, useReducer, Dispatch, useEffect } from 'react';
import { UserEntity } from 'types';
import { UserActions } from '../utils/types/JsonCommunicationType';

type UserState = {
  user: UserEntity | null;
};

type UserAction =
  | { type: UserActions.LOGIN; payload: UserEntity }
  | { type: UserActions.LOGOUT };

type AuthContextType = {
  user: UserEntity | null;
  dispatch: Dispatch<UserAction>;
};

type Props = {
  children: React.ReactNode;
};

const initialState: UserState = {
  user: null,
};

export const AuthContext = createContext<AuthContextType | null>(null);

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

export const AuthContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    //get user from localStorage
    if (savedUser) {
      const user: UserEntity = JSON.parse(savedUser);
      dispatch({ type: UserActions.LOGIN, payload: user });
    }
  }, []);

  console.log('authContext state', state);
  return (
    <AuthContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
