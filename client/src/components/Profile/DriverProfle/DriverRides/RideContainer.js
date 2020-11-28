import React from 'react';
import styles from './DriverRides.module.css';

export default function RideContainer() {
  return (
    <div>
      <div class="row py-3 px-lg-3 border bg-light">
        <div class="col-3 ml-1">
          <div class="row ml-1"><p style={{ fontSize: "12px" }}>11/27/2020</p></div>
          <div class="row ml-1"><p style={{ fontSize: "12px" }}>Friday</p></div>
        </div>
        <div class="col-4"><p style={{ fontSize: "12px" }}>(11:00 AM - 12:00 PM )</p></div>
        <div class="col-2"><p style={{ fontSize: "12px" }}>Park Square, Makati -> SM Molino, Cavite</p></div>
        <div class="col-2 justify-content-md-center "><a href="#"><img src="assets/img/view.png" width="30" /></a></div>
      </div>
    </div>
  );
}