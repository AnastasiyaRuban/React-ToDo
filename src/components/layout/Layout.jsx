import React, { useRef } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import AccountMenu from './AccountMenu';
import ColorsTheme from '../ColorsTheme';

export default function Layout({ autorisation, logout }) {
  const navRef = useRef(null);
  const burgerRef = useRef(null);

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

  const handleClick = () => {
    navRef.current.classList.toggle(styles.active);
    burgerRef.current.classList.toggle(styles['burger-active']);
  };

  document.body.addEventListener('click', (e) => {
    if (
      !e.target.className.includes('nav') &&
      !e.target.className.includes('burger')
    ) {
      navRef.current.classList.remove(styles.active);
      burgerRef.current.classList.remove(styles['burger-active']);
    }
  });

  return (
    <>
      <header className={`container ${styles.header}`}>
        <button
          className={`button-reset ${styles.burger}`}
          ref={burgerRef}
          onClick={handleClick}
        >
          <span className={styles.burger__line}></span>
        </button>
        <nav className={styles.nav} ref={navRef}>
          <NavLink to='/' className={setClassLink} onClick={handleClick}>
            Home
          </NavLink>
          <NavLink to='/about' className={setClassLink} onClick={handleClick}>
            About Project
          </NavLink>
          {!autorisation && (
            <NavLink to='/todos' className={setClassLink} onClick={handleClick}>
              My Todos
            </NavLink>
          )}
        </nav>
        <ColorsTheme styles={styles} />
        {autorisation ? (
          <NavLink to='/login' className={setClassLink}>
            Login
          </NavLink>
        ) : (
          <AccountMenu handleLogout={handleLogout} styles={styles} />
        )}{' '}
      </header>
      <main className={styles.app}>
        <Outlet />
      </main>
      <footer className={`container ${styles.footer}`}>Ruban</footer>
    </>
  );
}
