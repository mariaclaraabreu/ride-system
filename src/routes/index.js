import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import RideRegister from '../pages/RideRegister';
// import DriverAdmin from '../pages/DriverAdmin';
// import PassengerAdmin from '../pages/PassengerAdmin';

const Routes = () => (
  <Switch>
      <Route path='/' exact component={Main} />
      <Route path='/ride-register' component={RideRegister} />
      {/* <Route path='/driver-admin' component={DriverAdmin} />
      <Route path='/passenger-admin' component={PassengerAdmin} /> */}
  </Switch>
);

export default Routes;