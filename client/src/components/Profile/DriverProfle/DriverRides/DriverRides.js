import React, { useState } from 'react';
import ProfileHeader from '../../ProfileHeader/ProfileHeader';
import RideContainer from './RideContainer';
import Footer from '../../../Footer/Footer';
import styles from './DriverRides.module.css';
import {
  Link
} from "react-router-dom";

export default function DriverRides(props) {

  const { currentUser } = props;

  return (
    <div class="container">

      <div class="row">
        <div class="col">
          <ProfileHeader currentpage="driverrides" />
        </div>
      </div>

      <div class="d-flex flex-row-reverse" style={{ position: "absolute", right: "10px" }}>
        <div class={`p-2 ${styles.addTrip_container}`}>
          <Link to="drivercreateride">
            <button type="button" className="btn btn-primary">+ Add Trip</button>
          </Link>
        </div>
      </div>

      <div class="row ml-1" style={{ marginTop: "25px", marginBottom: "30px" }}>
        <img src="assets/img/ICON.jpg" width="20" class="front-1" data-aos="fade-right" alt="history_img" style={{ width: "50px", height: "50px", marginTop: "-10px", transform: "scaleX(-1)" }} />
        <p style={{ fontSize: "24px", marginBottom: "0", marginLeft: "9px" }}>Trip History</p>
      </div>


      <div class="row mt-3 py-3 px-lg-3 border bg-light">
        <div class="col-3 ml-1"><h5>Date</h5></div>
        <div class="col-4"><h5>Time</h5></div>
        <div class="col-4"><h5>Route</h5></div>
      </div>

      <div style={{ marginBottom: "70px" }}>
        <RideContainer />
      </div>

      {
        currentUser === "driver" ?
          <Footer home="driverhome" profile="drivermainprofile" rides="driverrides" />
          :
          // Put PASSENGER ROUTES HERE
          null
      }

    </div>
  );
}