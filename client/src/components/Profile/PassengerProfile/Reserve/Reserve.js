import React from 'react';
import ProfileHeader from '../../ProfileHeader/ProfileHeader';
import Footer from '../../../Footer/Footer';
import styles from './Reserve.module.css';

import {
  Link
} from "react-router-dom";
export default function Reserve(props) {
  const { currentUser } = props;

  return (
    <div className="container">
      <div class="row">
        <div class="col">
          <ProfileHeader currentpage="reservebooking" />
        </div>
      </div>

      <div class="row" style={{ marginTop: "20px" }}>
        <div class="col">

          <h3 style={{ margin: "25px 0 30px 0" }}>Reserve a seat</h3>

          <div class="form-group">
            <label for="numberOfPassengers">Number of Passengers</label>
            <input type="text" class="form-control" id="numberOfPassengers" />
          </div>

          <div className={`${styles.bookingDetails_container}`}>
            <h4 style={{ marginBottom: "12px" }}>Booking Details</h4>
            <p><b>Driver Name:</b> <span>Juan De La Cruz</span></p>
            <p><b>Vehicle Plate Number:</b> <span>FGE 834</span></p>
            <p><b>Destination:</b> <span>Taguig, BGC</span></p>
          </div>

          <Link to="passengerrides">
            <button type="button" class="btn btn-primary btn-block">Book Ride</button>
          </Link>
        </div>
      </div>



      {
        currentUser === "driver" ?
          <Footer home="driverhome" profile="drivermainprofile" rides="driverrides" />
          :
          // Put PASSENGER ROUTES HERE
          <Footer home="passengerhome" profile="passengerprofile" rides="passengerrides" />
      }
    </div >
  );
}