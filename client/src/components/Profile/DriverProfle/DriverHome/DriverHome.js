import React from 'react';
import ProfileHeader from '../../ProfileHeader/ProfileHeader';
import Footer from '../../../Footer/Footer';
import {
  Link
} from "react-router-dom";

export default function DriverHome(props) {
  const { currentUser } = props;

  return (
    <div className="container">
      <div class="row">
        <div class="col">
          <ProfileHeader currentpage="driverhome" />
        </div>
      </div>

      {/* <img src="assets/img/DASH.png" width="50" class="front-1" data-aos="fade-right" alt="history_img" style={{ width: "50px", marginTop: "-10px", transform: "scaleX(-1)" }} /> */}
      <div className={`d-flex justify-content-center`}>
        <div class="row " style={{ marginTop: "30px", marginBottom: "20px" }}>
          <p style={{ fontSize: "18px", marginBottom: "0", marginLeft: "9px", textAlign: "center" }}>Welcome to your Dashboard!</p>
        </div>
      </div>

      <div class="row " style={{ marginTop: "10px", marginBottom: "25px" }}>
        <div class="col d-flex justify-content-center">
          <Link to="/drivercreateride">
            <button type="button" class="btn btn-primary">Create a Ride</button>
          </Link>
        </div>
      </div>

      <div style={{marginBottom: "60px"}}>
        <div class="row mt-5 py-3 px-lg-3 border bg-light">
          <div class="col-3 ml-1"><h5>Date</h5></div>
          <div class="col-4"><h5>Time</h5></div>
          <div class="col-4"><h5>Route</h5></div>

        </div>
        <div class="row py-3 px-lg-3 border bg-light">
          <div class="col-3 ml-1">
            <div class="row ml-1">
              <p style={{ fontSize: "12px" }}>08/11/2019</p>
            </div>
            <div class="row ml-1"><p style={{ fontSize: "12px" }}>Friday</p></div>
            <p>
              <span class="badge badge-success" style={{ color: "#FFF" }}>{`0 / 22`}</span>
            </p>
          </div>
          <div class="col-4"><p style={{ fontSize: "12px" }}>4:30AM - 7:30AM</p></div>
          <div class="col-2"><p style={{ fontSize: "12px" }}>Cavite to Makati</p></div>
        </div>
        <div class="row py-3 px-lg-3 border bg-light">
          <div class="col-3 ml-1">
            <div class="row ml-1">
              <p style={{ fontSize: "12px" }}>12/03/2022</p>
            </div>
            <div class="row ml-1"><p style={{ fontSize: "12px" }}>Tuesday</p></div>
            <p>
              <span class="badge badge-danger" style={{ color: "#FFF" }}>{`14 / 14`}</span>
            </p>
          </div>
          <div class="col-4"><p style={{ fontSize: "12px" }}>7:30PM - 9:30PM</p></div>
          <div class="col-2"><p style={{ fontSize: "12px" }}>Glorietta to Taguig</p></div>
        </div>
        <div class="row py-3 px-lg-3 border bg-light">
          <div class="col-3 ml-1">
            <div class="row ml-1">
              <p style={{ fontSize: "12px" }}>11/29/2020</p>
            </div>
            <div class="row ml-1"><p style={{ fontSize: "12px" }}>Sunday</p></div>
            <p>
              <span class="badge badge-warning" style={{ color: "#FFF" }}>{`11 / 14`}</span>
            </p>
          </div>
          <div class="col-4"><p style={{ fontSize: "12px" }}> 1:00 PM - 1:30PM</p></div>
          <div class="col-2"><p style={{ fontSize: "12px" }}>Pasig to Makati</p></div>
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