import React from 'react';
import styles from './DriverRides.module.css';

export default function RideContainer() {
  return (
    <div style={{marginBottom: '5px'}}>
      <div class="row py-3 px-lg-5 border bg-light">
        <div class="col-2">
          <a>
            <img src="assets/img/ride.png" width="60" class="front-1" data-aos="fade-right" />
          </a>
        </div>
        <div class="col-7">
          <h5>SM Molino -> Park Square, Makati</h5>
          <p> ( 9:00 AM - 10:00 AM )</p>
        </div>
        <div class={`col-md-3 ${styles.driverRides_buttons} d-flex flex-row-reverse`}>
          <span className={`${styles.driverRides_button}`}><i class="far fa-trash-alt"></i> Cancel</span>
          <span className={`${styles.driverRides_button}`}><i class="far fa-edit"></i> Edit</span>
          <span className={`${styles.driverRides_button}`}><i class="fas fa-eye"></i> View</span>
          {/* <button type="button" class={`btn ${styles.btn_view}`}>View</button>
          <button type="button" class={`btn ${styles.btn_edit}`}>Edit</button>
          <button type="button" class={`btn ${styles.btn_cancel}`}>Cancel</button> */}
        </div>

      </div>
    </div>
  );
}