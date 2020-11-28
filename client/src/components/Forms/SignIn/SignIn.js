import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import styles from '../Modal.module.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function SignIn(props) {

  const { modalIsOpen, closeModal } = props;

  return (
    <>
      <Modal show={modalIsOpen} onHide={closeModal}>
        <Modal.Header className={`modal-header ${styles.landingModal_header} d-flex justify-content-center`}>
          <Modal.Title ><p className="modal-title" id="signInModal">Sign In</p></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group">
              <button type="button" className={`btn btn-block btn-primary ${styles.formCTAButton}`}>Sign In</button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className={`${styles.landingModal_footer} modal-footer`}>
          <p>Don't have an account? <Link to="/register">Create one</Link></p>
        </Modal.Footer>
      </Modal>
    </>
  );
}