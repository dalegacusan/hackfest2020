import React from 'react';
import styles from './ProfileHeader.module.css';
import {
  Link
} from "react-router-dom";

export default function ProfileHeader(props) {
  const { currentpage } = props;

  let renderedHeader;

  if (currentpage === "driverprofile") {
    renderedHeader = (
      <p style={{ textAlign: "center" }}>Driver Profile</p>
    );
  } else if (currentpage === "driverhome") {
    renderedHeader = (
      <p style={{ textAlign: "center" }}>Driver Dashboard</p>
    );
  } else if (currentpage === "drivercreateride") {
    renderedHeader = (
      <p style={{ textAlign: "center" }}>Create a Ride</p>
    );
  } else if (currentpage === "driverrides") {
    renderedHeader = (
      <p style={{ textAlign: "center" }}>Driver Trip History</p>
    );
  } else if (currentpage === "drivermainprofile") {
    renderedHeader = (
      <p style={{ textAlign: "center" }}>Driver Profile</p>
    );
  } else if (currentpage === "passengerprofile") {
    renderedHeader = (
      <p style={{ textAlign: "center" }}>Passenger Profile</p>
    );
  } else if (currentpage === "passengerhome") {
    renderedHeader = (
      <p style={{ textAlign: "center" }}>Passenger Dashboard</p>
    );
  } else if (currentpage === "passengerbookride") {
    renderedHeader = (
      <p style={{ textAlign: "center" }}>Book a Ride</p>
    );
  } else if (currentpage === "passengerhome1") {
    renderedHeader = (
      <p style={{ textAlign: "center" }}>Passenger Dashboard</p>
    );
  } else if (currentpage === "reservebooking") {
    renderedHeader = (
      <p style={{ textAlign: "center" }}>Reserve a seat</p>
    );
  }



  return (
    <div className={`${styles.profileHeader_container}`}>
      <div class={`row ${styles.profileHeader_row}`}>
        <div className={`col-2 ${styles.profileHeader_logo}`}>
          <img src="/assets/img/logo.png" style={{ width: "40px", position: "absolute", marginTop: "7px", marginLeft: "20px" }} />
        </div>
        <div className={`col-12 ${styles.profileHeader_title}`} style={{ position: "relative" }}>
          {
            renderedHeader
          }
        </div>
      </div>
    </div>
  );
}