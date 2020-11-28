import React, { useState } from 'react';
import './App.css';
import Landing from '../Landing/Landing';
import Register from '../Forms/Register/Register';
import PassengerProfile from '../Profile/PassengerProfile/PassengerProfile';
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

  const handleCurrentUser = (user) => {
    setCurrentUser(user);
  }

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => <Landing handleCurrentUser={handleCurrentUser} />} />
            <Route exact path="/register" render={() => <Register currentUser={currentUser} />} />
            <Route exact path="/passengerprofile">
              <PassengerProfile />
            </Route>
            <Route exact path="/driverprofile">
              <DriverProfile />
            </Route>
            <Route exact path="/driverhome">
              <DriverHome />
            </Route>
            <Route exact path="/drivercreateride">
              <DriverCreateRide />
            </Route>
            <Route exact path="/driverrides">
              <DriverRides />
            </Route>
            <Route exact path="/drivermainprofile">
              <DriverMainProfile />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
