import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import AccountMenu from './AccountMenu';

export default function Layout({ autorisation, logout }) {
  function setClassLink({ isActive }) {
    if (isActive) {
      return `${styles.nav__link} ${styles['nav__link-active']}`;
    } else {
      return `${styles.nav__link}`;
    }
  }

  const handleLogout = () => {
    logout();
  };

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
          <AccountMenu handleLogout={handleLogout} styles={styles} />
        )}{' '}
      </header>
      <main className='container app'>
        <Outlet />
      </main>
      <footer className={`container ${styles.footer}`}>Ruban</footer>
    </>
  );
}
