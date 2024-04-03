import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Welcome, Tasks, NotFound } from './components/views';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
