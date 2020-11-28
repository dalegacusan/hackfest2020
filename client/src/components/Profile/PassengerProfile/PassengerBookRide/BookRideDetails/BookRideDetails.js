import React from 'react';
import Footer from '../../../../Footer/Footer';
import styles from './BookRideDetails.module.css';
import {
  Link
} from "react-router-dom";

export default function BookRideDetails(props) {

  const { currentUser } = props;

  return (
    <div style={{ margin: "30px 0" }} className={`${styles.bookRideDetails_container}`}>
      <div class="row" >
        <div class="col">
          <p style={{ fontSize: "20px", fontWeight: "500" }}>Book a Ride</p>
        </div>
      </div>

      <p style={{ marginTop: "10px" }}>Enter Number of Passengers Boarding</p>

      <form>
        <div class="form-group row">
          <div class="col-12">
            <input type="text" name="numberOfPassengers" class="form-control" id="numberOfPassengers" />
          </div>
        </div>
      </form>

      <div class="row" style={{ marginBottom: "20px" }}>
        <div class="col">
          <div style={{ border: "1px solid lightgray", padding: "15px", backgroundColor: "#DBDBDB" }} className={`${styles.bookingDetailsDescription_container}`}>
            <p style={{ fontSize: "18px", fontWeight: "500" }}>Booking Details</p>
            <p style={{ marginBottom: "0" }}>Driver Name:</p>
            <p style={{ marginBottom: "0" }}>Plate Number: </p>
            <p style={{ marginBottom: "0" }}>Route: </p>
          </div>
        </div>
      </div>

      <Link to="/passengerrides">
        <button type="button" class="btn btn-primary btn-lg btn-block" style={{ marginBottom: "100px" }}>Book Ride</button>
      </Link>

      {
        currentUser === "driver" ?
          <Footer home="driverhome" profile="drivermainprofile" rides="driverrides" />
          :
          // Put PASSENGER ROUTES HERE
          <Footer home="passengerhome" profile="passengerprofile" rides="passengerrides" />
      }

    </div>
  );
}