import React, { useState } from 'react';
import './App.css';
import Landing from '../Landing/Landing';
import Register from '../Forms/Register/Register';
import PassengerProfile from '../Profile/PassengerProfile/PassengerProfile';
import PassengerHome from '../Profile/PassengerProfile/PassengerHome/PassengerHome';
import PassengerBookRide from '../Profile/PassengerProfile/PassengerBookRide/PassengerBookRide'
import PassengerRides from '../Profile/PassengerProfile/PassengerRides/PassengerRides';
import DriverProfile from '../Profile/DriverProfle/DriverProfile';
import DriverHome from '../Profile/DriverProfle/DriverHome/DriverHome';
import DriverCreateRide from '../Profile/DriverProfle/DriverCreateRide/DriverCreateRide';
import DriverRides from '../Profile/DriverProfle/DriverRides/DriverRides';
import DriverMainProfile from '../Profile/DriverProfle/DriverMainProfile/DriverMainProfile';
import PassengerHome1 from '../Profile/PassengerProfile/PassengerHome/PassengerHome1';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [currentUser, setCurrentUser] = useState('');

  const handleCurrentUser = (user) => setCurrentUser(user);

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => <Landing currentUser={currentUser} handleCurrentUser={handleCurrentUser} />} />
            <Route exact path="/register" render={() => <Register currentUser={currentUser} />} />

            <Route exact path="/passengerprofile" render={() => <PassengerProfile currentUser={currentUser} />} />
            <Route exact path="/passengerhome" render={() => <PassengerHome currentUser={currentUser} />} />
            <Route exact path="/passengerbookride" render={() => <PassengerBookRide currentUser={currentUser} />} />
            <Route exact path="/passengerrides" render={() => <PassengerRides currentUser={currentUser} />} />
            <Route exact path="/passengerhome1" render={() => <PassengerHome1 currentUser={currentUser} />} />
            
            <Route exact path="/driverprofile" render={() => <DriverProfile currentUser={currentUser} />} />
            <Route exact path="/driverhome" render={() => <DriverHome currentUser={currentUser} handleCurrentUser={handleCurrentUser} />} />
            <Route exact path="/drivercreateride" render={() => <DriverCreateRide currentUser={currentUser} />} />
            <Route exact path="/driverrides" render={() => <DriverRides currentUser={currentUser} />} />
            <Route exact path="/drivermainprofile" render={() => <DriverMainProfile currentUser={currentUser} />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
