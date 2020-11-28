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
      <>
        <p style={{ textAlign: "center" }}>Driver Profile</p>
      </>
    );
  } else if (currentpage === "driverhome") {
    renderedHeader = (
      <>
        <p style={{ textAlign: "center" }}>Driver Home</p>
      </>
    );
  } else if (currentpage === "drivercreateride") {
    renderedHeader = (
      <>
        <p style={{ textAlign: "center" }}>Create a Ride</p>
      </>
    );
  } else if (currentpage === "driverrides") {
    renderedHeader = (
      <>
        <p style={{ textAlign: "center" }}>Passenger Ride History</p>
      </>
    );
  } else if (currentpage === "drivermainprofile") {
    renderedHeader = (
      <>
        <p style={{ textAlign: "center" }}>Driver Profile</p>
      </>
    );
  } else if (currentpage === "passengerprofile") {
    renderedHeader = (
      <>
        <p style={{ textAlign: "center" }}>Passenger Profile</p>
      </>
    );
  } else if (currentpage === "passengerhome") {
    renderedHeader = (
      <>
        <p style={{ textAlign: "center" }}>Passenger Home</p>
      </>
    );
  } else if (currentpage === "passengerbookride") {
    renderedHeader = (
      <>
        <p style={{ textAlign: "center" }}>Book a Ride</p>
      </>
    );
  }

  return (
    <div className={`${styles.profileHeader_container}`}>
      <div class={`row ${styles.profileHeader_row}`}>
        <div className={`col-3 ${styles.profileHeader_logo}`}>
          <p>Logo</p>
        </div>
        <div className={`col-9 ${styles.profileHeader_title}`}>
          {
            renderedHeader
          }

        </div>
      </div>
    </div>
  );
}