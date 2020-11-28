import React from 'react';
import styles from './UserPhoto.module.css';

export default function DriverPhoto(props) {
  const { mainProfile } = props;

  return (
    <div className={`d-flex justify-content-center ${styles.image_container}`} style={{ padding: mainProfile ? "10px 0" : "10px 0 30px 0" }}>
      <img src="https://www.worldfuturecouncil.org/wp-content/uploads/2020/02/dummy-profile-pic-300x300-1.png" alt="profilePicture" />
    </div>
  );
}