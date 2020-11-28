import React from 'react';
import styles from './Footer.module.css';
import {
  Link
} from "react-router-dom";

export default function Footer(props) {
  // will receive PROPS

  return (
    <nav class={`${styles.footerNavbarIcons_container} navbar fixed-bottom navbar-light d-flex-justify-content-between`}>

      <Link class="navbar-brand">
        <div>
          <i class="fas fa-home" ></i>
          <p>Home</p>
        </div>
      </Link>
      <Link class="navbar-brand">
        <div>
          <i class="fas fa-user" ></i>
          <p>Profile</p>
        </div>
      </Link>
      <Link class="navbar-brand">
        <div>
          <i class="fas fa-clipboard-list"></i>
          <p>Trips</p>
        </div>
      </Link>
    </nav>
  );
}