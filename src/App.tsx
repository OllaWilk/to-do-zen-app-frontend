import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './utils/hooks';
import {
  Welcome,
  Home,
  NotFound,
  Task,
  Info,
  About,
  Login,
  Signup,
} from './components/views';
import { MainLayout } from './components/layout';

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route
          path='/login'
          element={!user ? <Login /> : <Navigate to='/home' />}
        />
        <Route
          path='/signup'
          element={!user ? <Signup /> : <Navigate to='/home' />}
        />
        {user ? (
          <Route element={<MainLayout />}>
            <Route path='/home' element={<Home />} />
            <Route path='/events/:id' element={<Task />} />
            <Route path='/info' element={<Info />} />
            <Route path='/about' element={<About />} />
          </Route>
        ) : (
          <Route path='/*' element={<Welcome />} />
        )}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
