import React, { useState } from 'react';
import SignIn from '../Forms/SignIn/SignIn';
import MobileMenu from './MobileMenu/MobileMenu';
import LandingHeader from './LandingHeader/LandingHeader';
import HeroSection from './HeroSection/HeroSection';
import LandingFooter from './LandingFooter/LandingFooter';
import styles from './Landing.module.css';

export default function Landing(props) {
  const { currentUser, handleCurrentUser, handleInputChange } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className={`${styles.landingContainer}`}>
      {
        modalIsOpen
          ?
          <SignIn currentUser={currentUser} modalIsOpen={modalIsOpen} closeModal={closeModal}/>
          : null
      }

      <MobileMenu />
      <LandingHeader />
      <HeroSection styles={styles} openModal={openModal} handleCurrentUser={handleCurrentUser} />
      <LandingFooter />

      <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>
    </div >
  );
}