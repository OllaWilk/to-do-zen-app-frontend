import React, { createContext, useReducer, Dispatch } from 'react';
import { UserEntity } from 'types';

type UserState = {
  user: UserEntity | null;
};

type UserAction =
  | { type: 'LOGIN'; payload: UserEntity }
  | { type: 'LOGOUT'; payload: null };

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
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
