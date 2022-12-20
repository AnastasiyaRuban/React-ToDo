import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import Button from '@mui/material/Button';
import styles from './Layout.module.scss';

export default function Layout({ autorisation, logout }) {
  function setClassLink({ isActive }) {
    if (isActive) {
      return `${styles.nav__link} ${styles['nav__link-active']}`;
    } else {
      return `${styles.nav__link}`;
    }
  }

  return (
    <>
      <header className={`container ${styles.header}`}>
        <nav className='nav'>
          <NavLink to='/' className={setClassLink}>
            Home
          </NavLink>
          <NavLink to='/about' className={setClassLink}>
            About Project
          </NavLink>
          {!autorisation && (
            <NavLink to='/todos' className={setClassLink}>
              My Todos
            </NavLink>
          )}
        </nav>
        {autorisation ? (
          <NavLink to='/login' className={setClassLink}>
            Login
          </NavLink>
        ) : (
          <NavLink to='/login'>
            <button
              className={`${styles.nav__link} button-reset`}
              onClick={logout}
            >
              Logout
            </button>
          </NavLink>
        )}{' '}
      </header>
      <main className='container app'>
        <Outlet />
      </main>
      <footer className={`container ${styles.footer}`}>Ruban</footer>
    </>
  );
}
