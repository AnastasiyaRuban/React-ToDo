import React from 'react';
import styles from './AboutPage.module.scss';

export default function AboutPage() {
  return (
    <div className={styles.about}>
      <h1 className={styles.about__title}>Future:</h1>
      <ul>
        <li>Add option "Favorite color"</li>
        <li>Add downloading data from the server</li>
        <li>Add ability to upload files</li>
      </ul>
    </div>
  );
}
