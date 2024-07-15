import React, { ReactNode } from 'react';
import { AuthContextProvider } from './auth';
import { EventsContextProvider } from './events';
import { SearchContextProvider } from './search';
import { AsistantMessageProvider } from './assistantMessage';

interface Props {
  children: ReactNode;
}

export const MainContextProvider = ({ children }: Props) => {
  return (
    <AuthContextProvider>
      <EventsContextProvider>
        <AsistantMessageProvider>
          <SearchContextProvider>{children}</SearchContextProvider>
        </AsistantMessageProvider>
      </EventsContextProvider>
    </AuthContextProvider>
  );
};
