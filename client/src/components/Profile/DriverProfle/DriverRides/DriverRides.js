import React, { useState } from 'react';
import ProfileHeader from '../../ProfileHeader/ProfileHeader';
import RideContainer from './RideContainer';
import Footer from '../../../Footer/Footer';
import styles from './DriverRides.module.css';
import {
  Link
} from "react-router-dom";

export default function DriverRides() {
  return (
    <div class="container">

      <div class="row">
        <div class="col">
          <ProfileHeader currentpage="driverrides" />
        </div>
      </div>


      <div class="row">
        <div class="col">
          <div class="d-flex flex-row-reverse">
            <div class={`p-2 ${styles.addTrip_container}`}>
              <Link to="drivercreateride">
                <button type="button" className="btn btn-primary">+ Add Trip</button>
              </Link>
            </div>
          </div>

          {/* will MAP */}
          <RideContainer />
          <RideContainer />
          <RideContainer />
          <RideContainer />

        </div>
      </div>

    <Footer />

    </div>

  );
}