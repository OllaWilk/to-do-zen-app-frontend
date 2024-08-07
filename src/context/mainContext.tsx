import React, { ReactNode } from 'react';
import { AuthContextProvider } from './auth';
import { EventPhotosContextProvider } from './eventPhotos';
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
        <EventPhotosContextProvider>
          <AsistantMessageProvider>
            <SearchContextProvider>{children}</SearchContextProvider>
          </AsistantMessageProvider>
        </EventPhotosContextProvider>
      </EventsContextProvider>
    </AuthContextProvider>
  );
};
