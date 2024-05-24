import React from 'react';
import ReactDOM from 'react-dom/client';
import { TasksContextProvider } from './context/tasks';
import { AuthContextProvider } from './context/auth';
import { App } from './App';
import './styles/normalize.scss';
import './styles/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <TasksContextProvider>
        <App />
      </TasksContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
