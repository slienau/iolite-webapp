import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Charts from '../../containers/Charts/charts';
import Tables from '../../containers/Tables/tables';
import Settings from '../../containers/Settings/settings';

const Router = props => (

  <Switch>

    <Route
      exact path="/"
      render={(props) => <Charts {...props} name="Power Consumption" />}
    />
    <Route
      exact path='/charts'
      render={(props) => <Charts {...props} name="Power Consumption" />}
    />

    <Route exact path="/tables" component={Tables} />
    <Route exact path="/settings" component={Settings} />

  </Switch>
);

export default Router;
