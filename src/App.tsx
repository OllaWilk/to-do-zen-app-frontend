import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Welcome,
  Home,
  NotFound,
  Task,
  Info,
  About,
  Login,
} from './components/views';
import { MainLayout } from './components/layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Welcome />} />

        <Route element={<MainLayout />}>
          <Route path='/cockpit' element={<Home />} />
          <Route path='/events/:id' element={<Task />} />
          <Route path='/info' element={<Info />} />
          <Route path='/about' element={<About />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
