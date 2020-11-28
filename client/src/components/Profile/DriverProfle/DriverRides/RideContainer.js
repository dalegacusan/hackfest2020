import React from 'react';
import styles from './DriverRides.module.css';

export default function RideContainer(props) {

  const { ride } = props;
  const { etd, eta, maxNumberOfPassengers, route, currentDate, dayOfTheWeek } = ride;

  return (
    <div>
      <div class="row py-3 px-lg-3 border bg-light">
        <div class="col-3 ml-1">
          <div class="row ml-1">
            <p style={{ fontSize: "12px" }}>{currentDate}</p>
          </div>
          <div class="row ml-1"><p style={{ fontSize: "12px" }}>{dayOfTheWeek}</p></div>
          <p>
            <span class="badge badge-info" style={{ color: "#FFF" }}>{`0 / ${maxNumberOfPassengers}`}</span>
          </p>
        </div>
        <div class="col-4"><p style={{ fontSize: "12px" }}>{etd} - {eta}</p></div>
        <div class="col-2"><p style={{ fontSize: "12px" }}>{route}</p></div>
      </div>
    </div>
  );
}