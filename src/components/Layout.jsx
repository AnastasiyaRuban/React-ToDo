import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import CastomLink from './CastomLink';

export default function Layout() {
  const setClassLink = ({ isActive }) => (isActive ? 'active-link' : 'link');
  const setStyleLink = ({ isActive }) => ({ color: isActive ? 'red' : 'blue' });

  return (
    <>
      <header>
        {/* <NavLink to='/' className={setClassLink}>
          Home
        </NavLink> */}
        <CastomLink to='/'> Home</CastomLink>
        <NavLink to='/about' className={setClassLink}>
          About Us
        </NavLink>
        <NavLink to='/login' className={setClassLink}>
          Login
        </NavLink>
      </header>
      <main className='container'>
        <Outlet />
      </main>
      <footer>
        <NavLink to='/' style={setStyleLink}>
          Home
        </NavLink>
        <NavLink to='/about' className={setClassLink}>
          About Us
        </NavLink>
        <NavLink to='/login' className={setClassLink}>
          Login
        </NavLink>
      </footer>
    </>
  );
}
