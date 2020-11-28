import React from 'react';
import styles from './DriverName.module.css';

export default function DriverName(props) {
  const { fullName } = props;
  return (
    <div className={styles.driverName_container}>
      <p>{fullName}</p>
    </div>
  );
}