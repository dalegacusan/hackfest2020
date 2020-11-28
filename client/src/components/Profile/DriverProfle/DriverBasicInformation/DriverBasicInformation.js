import React, { useState } from 'react';
import styles from './DriverBasicInformation.module.css';

export default function DriverBasicInformation(props) {

  const { setDriverInformation } = props;

  const handleInput = (e) => {
    const { name, value } = e.target;

    setDriverInformation(currInfo => {
      return { ...currInfo, [name]: value };
    });
  }

  return (
    <div className={`${styles.driverBasicInformation_container}`}>
      <form>
        <div class="form-group">
          <label for="plate">Plate Number</label>
          <input type="text" name="plateNumber" onChange={handleInput} class="form-control" id="plate" />
        </div>
        <div class="form-group">
          <label for="route">Route</label>
          <input type="text" name="route" onChange={handleInput} class="form-control" id="route" />
        </div>
      </form>
    </div>
  );
}