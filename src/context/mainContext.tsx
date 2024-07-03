import React, { ReactNode } from 'react';
import { AuthContextProvider } from './auth';
import { EventsContextProvider } from './events';
import { SearchContextProvider } from './search';

interface Props {
  children: ReactNode;
}

export const MainContextProvider = ({ children }: Props) => {
  return (
    <AuthContextProvider>
      <EventsContextProvider>
        <SearchContextProvider>{children}</SearchContextProvider>
      </EventsContextProvider>
    </AuthContextProvider>
  );
};
