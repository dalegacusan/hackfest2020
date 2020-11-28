import React from 'react';
import styles from './DriverPhoto.module.css';

export default function DriverPhoto(){
  return (
    <div className={`d-flex justify-content-center ${styles.image_container}`}>
      <img src="https://www.worldfuturecouncil.org/wp-content/uploads/2020/02/dummy-profile-pic-300x300-1.png" alt="profilePicture"/>
    </div>
  );
}