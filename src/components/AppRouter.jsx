import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TODO_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import Login from './Login';
import Todo from './pages/todoPage/Todo';
import Layout from './Layout';
import Homepage from './pages/homePage/Homepage';

export default function AppRouter() {
  //   const user = false;

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path={LOGIN_ROUTE} element={<Login />} />
        </Route>
      </Routes>
    </>
  );

  //   return user ? (
  //     <Routes>
  //       {privateRoutes.map(({ path, Component }) => (
  //         <Route path={path} element={Component} />
  //       ))}
  //       <Route to={TODO_ROUTE} />
  //     </Routes>
  //   ) : (
  //     <Routes>
  //       {publicRoutes.map(({ path, Component }) => (
  //         <Route path={path} element={Component} />
  //       ))}
  //       <Route to={LOGIN_ROUTE} />
  //     </Routes>
  //   );
}
