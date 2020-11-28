import React, { useState } from 'react';
import Footer from '../../../../Footer/Footer';
import styles from './rideDetails.module.css';
import {
  Link
} from "react-router-dom";

export default function RideDetails(props) {

  const { currentUser, handleInputChange, handleSubmit } = props;

  return (
    <div className={`${styles.rideDetails_container}`}>
      <div class="row" style={{ margin: "40px 0" }}>
        <div class="col">
          <small>Please do note that once there are reservations already to your ride, you may not cancel or edit the ride information anymore</small>
        </div>
      </div>

      <p style={{ marginTop: "20px" }}>Select Time</p>

      <form>
        <div class="form-group row">
          <div class="col-2">
            <label for="etd" class="col-sm-2 col-form-label">ETD</label>
          </div>
          <div class="col-10">
            <input type="text" name="etd" onChange={handleInputChange} class="form-control" id="etd" />
          </div>
        </div>

        <div class="form-group row">
          <div class="col-2">
            <label for="eta" class="col-sm-2 col-form-label">ETA</label>
          </div>
          <div class="col-10">
            <input type="text" name="eta" onChange={handleInputChange} class="form-control" id="eta" />
          </div>
        </div>

        <div class="form-group row">
          <div class="col-7">
            <label for="maxNumberOfPassengers" class="col-sm-7 col-form-label">Max Number of Passengers</label>
          </div>
          <div class="col-5">
            <input type="text" name="maxNumberOfPassengers" onChange={handleInputChange} class="form-control" id="maxNumberOfPassengers" />
          </div>
        </div>

        <Link to="/driverrides">
          <button type="button" onClick={handleSubmit} class="btn btn-primary btn-lg btn-block" style={{ marginBottom: "100px" }}>Create Ride</button>
        </Link>
      </form>

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