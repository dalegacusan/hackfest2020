import React from 'react';
import ProfileHeader from '../../ProfileHeader/ProfileHeader';
import Box from './Box/Box';
import RideDetails from './RideDetails/RideDetails';

export default function DriverCreateRide() {
  return (
    <div className="container">
      <div class="row">
        <div class="col">
          <ProfileHeader currentpage="drivercreateride" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Box />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <RideDetails />
        </div>
      </div>
    </div >
  );
}