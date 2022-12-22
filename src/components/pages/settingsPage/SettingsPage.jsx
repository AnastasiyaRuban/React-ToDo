import React from 'react';
import ColorsTheme from './ColorsTheme';
import styles from './SettingsPage.module.scss';

export default function SettingsPage() {
  return (
    <div>
      <h2 className=''>Change your theme: </h2>
      <div>
        <ColorsTheme styles={styles} />
      </div>
    </div>
  );
}
