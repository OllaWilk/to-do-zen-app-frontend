import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './utils/hooks';
import {
  Welcome,
  Cockpit,
  NotFound,
  Event,
  Info,
  About,
  Login,
  Signup,
} from './components/views';
import { MainLayout } from './components/layout';
import { MyPortfolio } from './components/common';

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path='/' element={<Welcome />} />
        <Route
          path='/login'
          element={!user ? <Login /> : <Navigate to='/cockpit' />}
        />
        <Route
          path='/signup'
          element={!user ? <Signup /> : <Navigate to='/cockpit' />}
        />
        {/* Protected routes */}
        {user ? (
          <Route element={<MainLayout />}>
            <Route path='/cockpit' element={<Cockpit />} />
            <Route path='/events/:id' element={<Event />} />
            <Route path='/info' element={<Info />} />
            <Route path='/AleksandraWilk' element={<About />} />
            <Route path='/portfolio' element={<MyPortfolio />} />
          </Route>
        ) : (
          // Redirect to Welcome page if user is not authenticated
          <Route path='/*' element={<Welcome />} />
        )}
        {/* Fallback route */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
