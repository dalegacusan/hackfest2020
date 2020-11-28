import React from 'react';
import styles from './PassengerRides.module.css';

export default function RideContainer() {

  return (
    <div>
      <div class="row mt-1 py-3 px-lg-3 border bg-light">
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
        </div>
        <div class="col-4"><p style={{ fontSize: "12px" }}>4:30AM - 9:50AM</p></div>
        <div class="col-2"><p style={{ fontSize: "12px" }}>Taguig to Davao</p></div>
      </div>

      <div class="row py-3 px-lg-3 border bg-light">
        <div class="col-3 ml-1">
          <div class="row ml-1">
            <p style={{ fontSize: "12px" }}>12/03/2022</p>
          </div>
          <div class="row ml-1"><p style={{ fontSize: "12px" }}>Tuesday</p></div>
        </div>
        <div class="col-4"><p style={{ fontSize: "12px" }}>7:30PM - 8:30PM</p></div>
        <div class="col-2"><p style={{ fontSize: "12px" }}>Bacoor to MOA</p></div>
      </div>

      <div class="row py-3 px-lg-3 border bg-light">
        <div class="col-3 ml-1">
          <div class="row ml-1">
            <p style={{ fontSize: "12px" }}>12/03/2022</p>
          </div>
          <div class="row ml-1"><p style={{ fontSize: "12px" }}>Tuesday</p></div>
        </div>
        <div class="col-4"><p style={{ fontSize: "12px" }}>7:30PM - 8:30PM</p></div>
        <div class="col-2"><p style={{ fontSize: "12px" }}>Bacoor to MOA</p></div>
      </div>

      <div class="row py-3 px-lg-3 border bg-light">
        <div class="col-3 ml-1">
          <div class="row ml-1">
            <p style={{ fontSize: "12px" }}>12/03/2022</p>
          </div>
          <div class="row ml-1"><p style={{ fontSize: "12px" }}>Tuesday</p></div>
        </div>
        <div class="col-4"><p style={{ fontSize: "12px" }}>2:50PM - 3:20PM</p></div>
        <div class="col-2"><p style={{ fontSize: "12px" }}>Bacoor to MOA</p></div>
      </div>

      <div class="row py-3 px-lg-3 border bg-light">
        <div class="col-3 ml-1">
          <div class="row ml-1">
            <p style={{ fontSize: "12px" }}>12/03/2022</p>
          </div>
          <div class="row ml-1"><p style={{ fontSize: "12px" }}>Tuesday</p></div>
        </div>
        <div class="col-4"><p style={{ fontSize: "12px" }}>5:10PM - 10:40PM</p></div>
        <div class="col-2"><p style={{ fontSize: "12px" }}>Taguig to Cavite</p></div>
      </div>

    </div>
  )
}