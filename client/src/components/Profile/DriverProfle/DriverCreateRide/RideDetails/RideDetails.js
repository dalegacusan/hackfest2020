import React from 'react';
import Footer from '../../../../Footer/Footer';
import styles from './rideDetails.module.css';
import {
  Link
} from "react-router-dom";

export default function RideDetails() {
  return (
    <div className={`${styles.rideDetails_container}`}>
      <div class="row">
        <div class="col">
          <small>Please do note that once there are reservations already to your ride, you may not cancel or edit the ride information anymore</small>
        </div>
      </div>

      <p style={{marginTop: "20px"}}>Select Time</p>

      <form>
        <div class="form-group row">
          <div class="col-2">
            <label for="etd" class="col-sm-2 col-form-label">ETD</label>
          </div>
          <div class="col-10">
            <input type="text" class="form-control" id="etd" />
          </div>
        </div>

        <div class="form-group row">
          <div class="col-2">
            <label for="eta" class="col-sm-2 col-form-label">ETA</label>
          </div>
          <div class="col-10">
            <input type="text" class="form-control" id="eta" />
          </div>
        </div>

        <div class="form-group row">
          <div class="col-7">
            <label for="numberOfPassengers" class="col-sm-7 col-form-label">Number of Passengers</label>
          </div>
          <div class="col-5">
            <input type="text" class="form-control" id="numberOfPassengers" />
          </div>
        </div>

        <Link to="/driverrides">
          <button type="button" class="btn btn-primary btn-lg btn-block" style={{marginBottom: "100px"}}>Create Ride</button>
        </Link>
      </form>

    <Footer />

    </div>
  );
}