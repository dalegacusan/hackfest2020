import React from 'react';
import ProfileHeader from '../../ProfileHeader/ProfileHeader';
import Footer from '../../../Footer/Footer';
import {
  Link
} from "react-router-dom";

export default function DriverHome(props) {
  const { currentUser } = props;

  return (
    <div className="container">
      <div class="row">
        <div class="col">
          <ProfileHeader currentpage="passengerhome" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Link to="/passengerbookride">
            <button type="button" class="btn btn-primary">Book a Ride</button>
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