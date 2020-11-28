import React from 'react';
import ProfileHeader from '../../ProfileHeader/ProfileHeader';
import PassengerHome from '../PassengerHome/PassengerHome';
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

      <div class="row" style={{ margin: "40px 0 0 0" }}>
        <div class="col">

          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search for a ride" />
            <div class="input-group-append">
              <Link to="/passengerhome"><button class={`btn btn-outline-primary ${styles.searchbutton}`} type="button">Search</button></Link>
            </div>
          </div>

        </div>
      </div>

      <div class="row py-1 px-lg-5 border bg-light mt-4">
        <div class="col-1 "></div>
        <div class="col-1 pt-4 ml-101 ">
          <img src="assets/img/ride.png" width="60" alt="Image" class="front-1" data-aos="fade-right" />
        </div>
        <div class="col-5 ml-5">
          <h5 >SM Molino - Park Square, Makati</h5>
          <h6> ( 9:00 AM - 10:00 AM )</h6>
        </div>
        <div class="col-1 pt-1 ml-1">
          <a class="btn btn-reserve text-light" href="#">Reserve</a>
        </div>
      </div>

      <div class="row py-3 px-lg-5 border bg-light ">
        <div class="col-1 "></div>
        <div class="col-1 pt-4 ml-101 ">
          <img src="assets/img/ride.png" width="60" alt="Image" class="front-1" data-aos="fade-right" />
        </div>
        <div class="col-5 ml-5">
          <h5 >Park Square, Makati - SM Molino</h5>
          <h6> ( 11:00 AM - 12:00 PM )</h6>
        </div>
        <div class="col-1 pt-1 ml-1">
          <a class="btn btn-reserve text-light" href="#">Reserve</a>
        </div>
      </div>

      <div class="row py-3 px-lg-5 border bg-light">
        <div class="col-1 "></div>
        <div class="col-1 pt-4 ml-101 ">
          <img src="assets/img/ride.png" width="60" alt="Image" class="front-1" data-aos="fade-right" />
        </div>
        <div class="col-5 ml-5">
          <h5 >SM Molino - Park Square, Makati</h5>
          <h6> ( 1:00 PM - 2:00 PM )</h6>
        </div>
        <div class="col-1 pt-1 ml-1">
          <a class="btn btn-reserve text-light" href="#">Reserve</a>
        </div>
      </div>

      <div class="row py-3 px-lg-5 border bg-light ">
        <div class="col-1 "></div>
        <div class="col-1 pt-4 ml-101 ">
          <img src="assets/img/ride.png" width="60" alt="Image" class="front-1" data-aos="fade-right" />
        </div>
        <div class="col-5 ml-5">
          <h5 >Park Square, Makati - SM Molino</h5>
          <h6> ( 3:00 PM - 4:00 PM )</h6>
        </div>
        <div class="col-1 pt-1 ml-1">
          <a class="btn btn-reserve text-light" href="#">Reserve</a>
        </div>
      </div>

      <div class="row py-3 px-lg-5 border bg-light">
        <div class="col-1 "></div>
        <div class="col-1 pt-4 ml-101 ">
          <img src="assets/img/ride.png" width="60" alt="Image" class="front-1" data-aos="fade-right" />
        </div>
        <div class="col-5 ml-5">
          <h5 >SM Molino - Park Square, Makati</h5>
          <h6> ( 1:00 PM - 2:00 PM )</h6>
        </div>
        <div class="col-1 pt-1 ml-1">
          <a class="btn btn-reserve text-light" href="#">Reserve</a>
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