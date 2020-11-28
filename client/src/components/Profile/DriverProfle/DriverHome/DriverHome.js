import React from 'react';
import ProfileHeader from '../../ProfileHeader/ProfileHeader';
import {
  Link
} from "react-router-dom";

export default function DriverHome() {
  return (
    <div className="container">
      <div class="row">
        <div class="col">
          <ProfileHeader currentpage="driverhome" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Link to="/drivercreateride">
            <button type="button" class="btn btn-primary">Create a Ride</button>
          </Link>
        </div>
      </div>
    </div >
  );
}