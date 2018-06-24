import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Charts from '../../containers/Charts/charts';
import Tables from '../../containers/Tables/tables';
import Settings from '../../containers/Settings/settings';

const Router = props => (

  <Switch>

    <Route
      exact path="/"
      render={(props) => <Charts {...props} name="Total" />}
    />
    <Route
      exact path='/charts'
      render={(props) => <Charts {...props} name="Total" />}
    />
    <Route
      exact path='/charts/livingroom'
      render={(props) => <Charts {...props} name="Living Room" />}
    />
    <Route
      exact path='/charts/kitchen'
      render={(props) => <Charts {...props} name="Kitchen" />}
    />
    <Route
      exact path='/charts/bedroom'
      render={(props) => <Charts {...props} name="Bedroom" />}
    />
    <Route
      exact path='/charts/bathroom'
      render={(props) => <Charts {...props} name="Bathroom" />}
    />

    <Route exact path="/tables" component={Tables} />
    <Route exact path="/settings" component={Settings} />

  </Switch>
);

export default Router;
