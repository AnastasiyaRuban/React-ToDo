import React from 'react';
import Button from '@mui/material/Button';
import Input from '../../Input';
import { useState } from 'react';
import styles from './LoginPage.module.scss';

export default function Login() {
  const [valueLogin, setValueLogin] = useState('');
  const [valuePassword, setValuePassword] = useState('');
  const [valueRepeatPassword, setValueRepeatPassword] = useState('');
  const [newUser, setNewUser] = useState(false);
  console.log(styles);

  const classButton = `${styles['type-sign__button']} button-reset`;
  return (
    <div className={styles['app-login']}>
      <div className={styles['type-sign']}>
        <Button
          variant={!newUser ? 'contained' : 'outlined'}
          className={
            !newUser ? `${classButton} ${styles.active}` : `${classButton}`
          }
          onClick={() => setNewUser(false)}
        >
          Login
        </Button>
        <Button
          variant={newUser ? 'contained' : 'outlined'}
          className={
            newUser ? `${classButton} ${styles.active}` : `${classButton}`
          }
          onClick={() => setNewUser(true)}
        >
          Sign up
        </Button>
      </div>
      <form
        className={`form ${styles['form-login']}`}
        onSubmit={(e) => console.log(e)}
      >
        <Input
          label='login'
          name='login'
          type='text'
          value={valueLogin}
          onChange={setValueLogin}
        />

        <Input
          label='Password'
          name='password'
          type='password'
          value={valuePassword}
          onChange={setValuePassword}
        />

        {newUser ? (
          <Input
            label='Repeat password'
            name='repeat-password'
            type='password'
            value={valueRepeatPassword}
            onChange={setValueRepeatPassword}
          />
        ) : (
          ''
        )}

        <button className='form__button button-reset' type='submit'>
          {newUser ? 'Sign Up' : 'Sign In'}
        </button>

        {!newUser && (
          <button className={`${styles['password-recovery']} button-reset`}>
            Forgot your password?
          </button>
        )}
      </form>
    </div>
  );
}
