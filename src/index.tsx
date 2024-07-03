import React from 'react';
import ReactDOM from 'react-dom/client';

// Main application component
import { App } from './App';

// Context providers
import { MainContextProvider } from './context/mainContext';

// External styles
import './styles/normalize.scss';
import './styles/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </React.StrictMode>
);
