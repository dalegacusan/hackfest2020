import React, { useState } from 'react';
import ProfileHeader from '../../ProfileHeader/ProfileHeader';
import RideDetails from './RideDetails/RideDetails';
import Footer from '../../../Footer/Footer';

export default function DriverCreateRide(props) {

  const { currentUser} = props;

  return (
    <div className="container">
      <div class="row">
        <div class="col">
          <ProfileHeader currentpage="drivercreateride" />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <RideDetails currentUser={currentUser} />
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