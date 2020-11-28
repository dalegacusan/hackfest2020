import React from 'react';
import ProfileHeader from '../../ProfileHeader/ProfileHeader';
import Footer from '../../../Footer/Footer';

export default function DriverMainProfile() {
  return (
    <div class="container">

      <div class="row">
        <div class="col">
          <ProfileHeader currentpage="drivermainprofile" />
        </div>
      </div>

      <div class="row" style={{margin: "30px 0"}}>
        <div class="col">
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Profile Details</h2>
        </div>
      </div>

      <div class="row">
        <div class="col">


          <section class="page-section" id="contact">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="control-group">
                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                      <h5>Name:</h5> <span>ProGs</span>
                    </div>
                  </div>
                  <div class="control-group">
                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                      <h5>Email Address:</h5>
                      <span>progshackfest@gmail.com</span>
                    </div>
                  </div>
                  <div class="control-group">
                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                      <h5>Contact Number:</h5>
                      <span>09011292020</span>
                    </div>
                  </div>
                  <div class="control-group">
                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                      <h5>Birthday:</h5>
                      <span>11/29/2020</span>
                    </div>
                  </div>
                  <div class="control-group">
                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                      <h5>Plate No:</h5>
                      <span>WKJ-812</span>
                    </div>
                  </div>
                  <div class="control-group">
                    <div class="form-group floating-label-form-group controls mb-0 pb-2">
                      <h5>Route:</h5>
                      <span>Bel-Air to Mall of Asia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />

    </div>
  );
}