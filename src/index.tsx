import React from 'react';
import ReactDOM from 'react-dom/client';
import { TasksContextProvider } from './context/tasks';
import { App } from './App';
import './styles/normalize.scss';
import './styles/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TasksContextProvider>
      <App />
    </TasksContextProvider>
  </React.StrictMode>
);
