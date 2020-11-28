import React, { useState } from 'react';
import ProfileHeader from '../../ProfileHeader/ProfileHeader';
import RideDetails from './RideDetails/RideDetails';

export default function DriverCreateRide(props) {

  const { currentUser, driverInformation, setDriverInformation } = props;

  const [rideDetails, setRideDetails] = useState({
    etd: '',
    eta: '',
    maxNumberOfPassengers: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setRideDetails({ ...rideDetails, [name]: value });
  }

  const handleSubmit = () => {

    if (currentUser === "driver") {
      setDriverInformation((currDriver) => {
        const currDriverCopy = { ...currDriver };
        const route = currDriverCopy.route;

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1;
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();
        const dayOfTheWeek = days[dateObj.getDay()];
        const currentDate = `${month}/${day}/${year}`;

        currDriverCopy.rides.push({ ...rideDetails, route, currentDate, dayOfTheWeek });

        return { ...currDriverCopy };

      })
    }
  }

  return (
    <div className="container">
      <div class="row">
        <div class="col">
          <ProfileHeader currentpage="drivercreateride" />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <RideDetails currentUser={currentUser} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
        </div>
      </div>
    </div >
  );
}