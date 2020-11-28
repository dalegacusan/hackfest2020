import React from 'react';
import ProfileHeader from '../../ProfileHeader/ProfileHeader';
import Footer from '../../../Footer/Footer';
import RideContainer from './RideContainer';
import {
  Link
} from "react-router-dom";

export default function PassengerRides(props) {

  const { currentUser } = props;

  return (
    <div class="container">

      <div class="row">
        <div class="col">
          <ProfileHeader currentpage="driverrides" />
        </div>
      </div>

      <div class="row ml-1" style={{ marginTop: "25px", marginBottom: "25px" }}>
        <img src="assets/img/history.png" width="150" class="front-1" data-aos="fade-right" alt="history_img" style={{ width: "50px", marginTop: "-10px", transform: "scaleX(-1)" }} />
        <p style={{ fontSize: "24px", marginBottom: "0", marginLeft: "9px", textAlign: "center"}}>My Ride History</p>
      </div>

      <div style={{ marginBottom: "65px" }}>
        <RideContainer />
    </div>

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