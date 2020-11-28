import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import styles from '../Modal.module.css';
import registerStyles from './Register.module.css';
import {
  Link
} from "react-router-dom";

export default function Register(props) {

  const { currentUser } = props;

  return (
    <>
      <section className="hero-section" id="hero">

        <div className="wave">

          <svg width="100%" height="355px" viewBox="0 0 1920 355" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Apple-TV" transform="translate(0.000000, -402.000000)" fill="#FFFFFF">
                <path
                  d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,757 L1017.15166,757 L0,757 L0,439.134243 Z"
                  id="Path"></path>
              </g>
            </g>
          </svg>

        </div>

        <div className="container">
          <>
            <Modal show={true}>
              <Modal.Header className={`modal-header ${styles.landingModal_header} d-flex justify-content-center`}>
                <Modal.Title><div>
                  <p className="modal-title" id="signInModal">Create an Account</p>
                  <p className={`${registerStyles.registerModal_userDescription}`}>I'm a <span className={`${registerStyles.registerModal_userTitle}`}>{currentUser}</span></p>
                </div></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="fullName">FullName</label>
                    <input type="text" name="fullName" className="form-control" id="fullName" placeholder="Full Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="emailAddress">Email address</label>
                    <input type="email" name="emailAddress" className="form-control" id="emailAddress" placeholder="Email Address" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" className="form-control" id="address" placeholder="Address" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactnumber">Contact Number</label>
                    <input type="text" name="contactNumber" className="form-control" id="contactnumber" placeholder="Contact Number" />
                  </div>
                  <div class="form-group">
                    <label htmlFor="age">Age</label>
                    <input class="form-control" name="age" type="text" id="age" placeholder="Age" />
                  </div>
                  <div className="form-group">
                    {
                      currentUser === 'passenger'
                        ?
                        <Link to="/passengerhome">
                          <button type="button" className={`btn btn-block btn-primary ${styles.formCTAButton}`}>Create Account</button>
                        </Link>
                        :
                        <Link to="/driverprofile">
                          <button type="button" className={`btn btn-block btn-primary ${styles.formCTAButton}`}>Create Account</button>
                        </Link>
                    }

                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer className={`${styles.landingModal_footer} modal-footer`}>
                <p>Already have an account? <Link to="/">Sign In</Link></p>
              </Modal.Footer>
            </Modal>
          </>
        </div>

      </section>
    </>
  );
}