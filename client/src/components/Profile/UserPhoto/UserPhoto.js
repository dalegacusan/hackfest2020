import React from 'react';
import styles from './UserPhoto.module.css';

export default function DriverPhoto(props) {
  const { mainProfile } = props;

  return (
    <div className={`d-flex justify-content-center ${styles.image_container}`} style={{ padding: mainProfile ? "10px 0" : "10px 0 30px 0" }}>
      
      <img src="assets/img/avatar.png" alt="profilePicture" />
    </div>
  );
}