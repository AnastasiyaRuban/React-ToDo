import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import Button from '@mui/material/Button';
import styles from './Layout.module.scss';

export default function Layout({ autorisation, logout }) {
  const setClassLink = ({ isActive }) =>
    isActive
      ? `${styles.nav__link} ${styles['nav__link-active']}`
      : `${styles.nav__link}`;

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
          {autorisation ? (
            <NavLink to='/login' className={setClassLink}>
              Login
            </NavLink>
          ) : (
            <button className={styles.nav__link} onClick={logout}>
              Logout
            </button>
          )}{' '}
        </nav>
      </header>
      <main className='container app'>
        <Outlet />
      </main>
      <footer className={`container ${styles.footer}`}>Ruban</footer>
    </>
  );
}
