import React from 'react';
import styles from './DriverName.module.css';

export default function DriverName(props) {
  return (
    <div className={styles.driverName_container}>
      <p>John Doe</p>
    </div>
  );
}