import React, { useState } from 'react';
import './App.css';
import Landing from '../Landing/Landing';
import Register from '../Forms/Register/Register';
import PassengerProfile from '../Profile/PassengerProfile/PassengerProfile';
import PassengerHome from '../Profile/PassengerProfile/PassengerHome/PassengerHome';
import PassengerBookRide from '../Profile/PassengerProfile/PassengerBookRide/PassengerBookRide'
import DriverProfile from '../Profile/DriverProfle/DriverProfile';
import DriverHome from '../Profile/DriverProfle/DriverHome/DriverHome';
import DriverCreateRide from '../Profile/DriverProfle/DriverCreateRide/DriverCreateRide';
import DriverRides from '../Profile/DriverProfle/DriverRides/DriverRides';
import DriverMainProfile from '../Profile/DriverProfle/DriverMainProfile/DriverMainProfile';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [currentUser, setCurrentUser] = useState('');
  const [driverInformation, setDriverInformation] = useState({})
  const [passengerInformation, setPassengerInformation] = useState({})

  const handleCurrentUser = (user) => setCurrentUser(user);

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => <Landing handleCurrentUser={handleCurrentUser} />} />
            <Route exact path="/register" render={() => <Register currentUser={currentUser} setDriverInformation={setDriverInformation} setPassengerInformation={setPassengerInformation} />} />

            <Route exact path="/passengerprofile" render={() => <PassengerProfile passengerInformation={passengerInformation} currentUser={currentUser} />} />
            <Route exact path="/passengerhome" render={() => <PassengerHome currentUser={currentUser} passengerInformation={passengerInformation} />} />
            <Route exact path="/passengerbookride" render={() => <PassengerBookRide currentUser={currentUser} passengerInformation={passengerInformation} setPassengerInformation={setPassengerInformation} />} />

            <Route exact path="/driverprofile" render={() => <DriverProfile currentUser={currentUser} driverInformation={driverInformation} setDriverInformation={setDriverInformation} />} />
            <Route exact path="/driverhome" render={() => <DriverHome currentUser={currentUser} handleCurrentUser={handleCurrentUser} />} />
            <Route exact path="/drivercreateride" render={() => <DriverCreateRide currentUser={currentUser} driverInformation={driverInformation} setDriverInformation={setDriverInformation} />} />
            <Route exact path="/driverrides" render={() => <DriverRides currentUser={currentUser} driverInformation={driverInformation} />} />
            <Route exact path="/drivermainprofile" render={() => <DriverMainProfile currentUser={currentUser} driverInformation={driverInformation} />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
