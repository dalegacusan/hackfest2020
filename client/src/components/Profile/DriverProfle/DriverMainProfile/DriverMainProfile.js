import React from 'react';
import ProfileHeader from '../../ProfileHeader/ProfileHeader';
import Footer from '../../../Footer/Footer';
import DriverPhoto from '../../UserPhoto/UserPhoto';

export default function DriverMainProfile(props) {

  const { currentUser } = props;

  return (
    <div class="container">

      <div class="row">
        <div class="col">
          <ProfileHeader currentpage="drivermainprofile" />
        </div>
      </div>

      <div class="row" style={{ marginTop: "30px" }}>
        <div class="col">
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Profile Details</h2>
        </div>
      </div>

      <div class="row" style={{ margin: "20px 0" }}>
        <div class="col">
          <DriverPhoto mainProfile={true} />
        </div>
      </div>

      <div class="row" style={{ marginBottom: "100px" }}>
        <div class="col">

          <section class="page-section" id="contact">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="control-group">
                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                      <h5>Name:</h5> <span>John Doe</span>
                    </div>
                  </div>
                  <div class="control-group">
                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                      <h5>Email Address:</h5>
                      <span>johndoe@gmail.com</span>
                    </div>
                  </div>
                  <div class="control-group">
                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                      <h5>Contact Number:</h5>
                      <span>0953882934</span>
                    </div>
                  </div>
                  <div class="control-group">
                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                      <h5>Age:</h5>
                      <span>28</span>
                    </div>
                  </div>
                  <div class="control-group">
                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                      <h5>Plate No:</h5>
                      <span>UJRF 413</span>
                    </div>
                  </div>
                  <div class="control-group">
                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                      <h5>Route:</h5>
                      <span>Bacoor to MOA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      {
        currentUser === "driver" ?
          <Footer home="driverhome" profile="drivermainprofile" rides="driverrides" />
          :
          // Put PASSENGER ROUTES HERE
          null
      }

    </div>
  );
}