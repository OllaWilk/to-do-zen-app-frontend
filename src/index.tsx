import React from 'react';
import ReactDOM from 'react-dom/client';

// Main application component
import { App } from './App';

// Context providers
import { EventsContextProvider } from './context/events';
import { AuthContextProvider } from './context/auth';

// External styles
import './styles/normalize.scss';
import './styles/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <EventsContextProvider>
        <App />
      </EventsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
