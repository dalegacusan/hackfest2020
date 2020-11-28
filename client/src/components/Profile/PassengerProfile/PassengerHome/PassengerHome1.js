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

      <section class="passenger-search ml-101" >
      <div class="row mt-5">
        <div class="col align-content-center">
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8">
                <form class="">
                    <div class=" row no-gutters align-items-center">
                        <div class="col-1 ml-5">
                            <i class="fas fa-search h4 text-body"></i>
                        </div>            
                        <div class="col-6">
                            <input class="form-control form-control-lg form-control-borderless " type="search" placeholder="Search topics or keywords"/>
                        </div>              
                        <div class="col-1 ml-2">
                            <button class="btn btn-lg btn-search text-dark" type="submit">Search</button>
                        </div>                    
                      </div>
                  </form>
              </div>
            </div>
        </div>
      </div>
      <div class="row py-3 px-lg-5 border bg-light mt-4">
        <div class="col-1 "></div>
        <div class="col-1 pt-4 ml-101 ">
          <img src="assets/img/ride.png" width="60" alt="Image"class="front-1" data-aos="fade-right"/>
        </div>
        <div class="col-5 ml-5">
          <h5 >SM Molino - Park Square, Makati</h5>
          <h6> ( 9:00 AM - 10:00 AM )</h6>
        </div>
        <div class="col-1 pt-3 ml-3">
          <a class="btn btn-reserve text-light" href="#">Reserve</a>
        </div>
      </div>

      <div class="row py-3 px-lg-5 border bg-light ">
        <div class="col-1 "></div>
        <div class="col-1 pt-4 ml-101 ">
          <img src="assets/img/ride.png" width="60" alt="Image"class="front-1" data-aos="fade-right"/>
        </div>
        <div class="col-5 ml-5">
          <h5 >Park Square, Makati - SM Molino</h5>
          <h6> ( 11:00 AM - 12:00 PM )</h6>
        </div>
        <div class="col-1 pt-3 ml-3">
          <a class="btn btn-reserve text-light" href="#">Reserve</a>
        </div>
      </div>

      <div class="row py-3 px-lg-5 border bg-light">
        <div class="col-1 "></div>
        <div class="col-1 pt-4 ml-101 ">
          <img src="assets/img/ride.png" width="60" alt="Image"class="front-1" data-aos="fade-right"/>
        </div>
        <div class="col-5 ml-5">
          <h5 >SM Molino - Park Square, Makati</h5>
          <h6> ( 1:00 PM - 2:00 PM )</h6>
        </div>
        <div class="col-1 pt-3 ml-3">
          <a class="btn btn-reserve text-light" href="#">Reserve</a>
        </div>
      </div>

      <div class="row py-3 px-lg-5 border bg-light ">
        <div class="col-1 "></div>
        <div class="col-1 pt-4 ml-101 ">
          <img src="assets/img/ride.png" width="60" alt="Image"class="front-1" data-aos="fade-right"/>
        </div>
        <div class="col-5 ml-5">
          <h5 >Park Square, Makati - SM Molino</h5>
          <h6> ( 3:00 PM - 4:00 PM )</h6>
        </div>
        <div class="col-1 pt-3 ml-3">
          <a class="btn btn-reserve text-light" href="#">Reserve</a>
        </div>
      </div>

      <div class="row py-3 px-lg-5 border bg-light">
        <div class="col-1 "></div>
        <div class="col-1 pt-4 ml-101 ">
          <img src="assets/img/ride.png" width="60" alt="Image"class="front-1" data-aos="fade-right"/>
        </div>
        <div class="col-5 ml-5">
          <h5 >SM Molino - Park Square, Makati</h5>
          <h6> ( 1:00 PM - 2:00 PM )</h6>
        </div>
        <div class="col-1 pt-3 ml-3">
          <a class="btn btn-reserve text-light" href="#">Reserve</a>
        </div>
      </div>
      </section>
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