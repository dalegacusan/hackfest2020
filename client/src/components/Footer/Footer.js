import React from 'react';
import styles from './Footer.module.css';
import {
  Link
} from "react-router-dom";

export default function Footer(props) {
  // will receive PROPS
  const { home, profile, rides } = props;

  return (
    <nav class={`${styles.footerNavbarIcons_container} navbar fixed-bottom navbar-light d-flex-justify-content-between`}>

      <Link to={`/${home}`} class="navbar-brand">
        <div>
          <i class="fas fa-home" ></i>
          <p>Home</p>
        </div>
      </Link>
      <Link to={`/${profile}`} class="navbar-brand">
        <div>
          <i class="fas fa-user" ></i>
          <p>Profile</p>
        </div>
      </Link>
      <Link to={`/${rides}`} class="navbar-brand">
        <div>
          <i class="fas fa-clipboard-list"></i>
          <p>Rides</p>
        </div>
      </Link>
      <Link to={`/`} class="navbar-brand">
        <div>
          <i class="fas fa-sign-out-alt"></i>
          <p>Logout</p>
        </div>
      </Link>
    </nav>
  );
}