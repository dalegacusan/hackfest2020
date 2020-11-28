import React, { useState } from 'react';
import BookRideDetails from './BookRideDetails/BookRideDetails'
import './PassengerBookRide.css';
import ProfileHeader from '../../ProfileHeader/ProfileHeader';
import Footer from '../../../Footer/Footer';

export default function PassengerBookRide(props) {
  const { currentUser } = props;

export default function PassengerBookRide() {
  return (

    <div className="container">
      <div class="row">
        <div class="col">
          <ProfileHeader currentpage="passengerbookride" />
        </div>
      </div>

      <div class="row">
        <div class="col">

          <BookRideDetails currentUser={currentUser} />

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