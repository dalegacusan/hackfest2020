import React from 'react';
import styles from './Box.module.css';

export default function Box() {
  return (
    <div className={`${styles.box_container}`}>
      <p>Some text here</p>
    </div>
  );
}