import React from 'react';
import ProfileHeader from '../../ProfileHeader/ProfileHeader';
import Footer from '../../../Footer/Footer';
import styles from './PassengerHome.module.css';
import {
  Link
} from "react-router-dom";

export default function DriverHome(props) {
  const { currentUser } = props;

  return (
    <div className="container">
      <div class="row">
        <div class="col">
          <ProfileHeader currentpage="passengerhome" />
        </div>
      </div>

      <div class="row" style={{marginBottom: "60px"}}>
        <div class="col">
          <div class="row ml-1" style={{ marginTop: "15px", marginBottom: "20px" }}>
            <p style={{ fontSize: "24px", marginBottom: "0", marginLeft: "9px" }}>List of rides near you</p>
          </div>

          <div class="row py-3 px-lg-5 border bg-light" style={{ marginBottom: "4px" }}>
            <div class="col-2">
              <a href="#">
                <img src="assets/img/ride.png" width="60" class="front-1" data-aos="fade-right" />
              </a>
            </div>
            <div class="col-7">
              <h5>SM Molino -&gt; Park Square, Makati</h5>
              <p> ( 9:00 AM - 10:00 AM )</p>
            </div>
            <div class="col-md-3">
              <a href="#" className={`btn btn-secondary ${styles.listButton}`}>Reserved</a>
            </div>
          </div>


          <div class="row py-3 px-lg-5 border bg-light" style={{ marginBottom: "4px" }}>
            <div class="col-2">
              <a href="#">
                <img src="assets/img/ride.png" width="60" class="front-1" data-aos="fade-right" />
              </a>
            </div>
            <div class="col-7">
              <h5>Park Square, Makati -&gt; SM Molino</h5>
              <p> ( 9:00 AM - 10:00 AM )</p>
            </div>
            <div class="col-md-3">
              <a href="#" className={`btn btn-danger ${styles.listButton}`}>  Full  </a>
            </div>
          </div>


          <div class="row py-3 px-lg-5 border bg-light" style={{ marginBottom: "4px" }}>
            <div class="col-2">
              <a href="#">
                <img src="assets/img/ride.png" width="60" class="front-1" data-aos="fade-right" />
              </a>
            </div>
            <div class="col-7">
              <h5>SM Molino to Park Square, Makati</h5>
              <p> ( 9:00 AM - 10:00 AM )</p>
            </div>
            <div class="col-md-3">
              <a href="#" className={`btn btn-danger ${styles.listButton}`}>  Full  </a>
            </div>
          </div>


          <div class="row py-3 px-lg-5 border bg-light" style={{ marginBottom: "4px" }}>
            <div class="col-2">
              <a href="#">
                <img src="assets/img/ride.png" width="60" class="front-1" data-aos="fade-right" />
              </a>
            </div>
            <div class="col-7">
              <h5>Park Square, Makati -&gt; SM Molino</h5>
              <p> ( 9:00 AM - 10:00 AM )</p>
            </div>
            <div class="col-md-3">
              <a href="#" className={`btn btn-secondary ${styles.listButton}`}>Reserved</a>
            </div>
          </div>
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