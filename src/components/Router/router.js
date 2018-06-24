import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Charts from '../../containers/Charts/charts';
import Tables from '../../containers/Tables/tables';
import Settings from '../../containers/Settings/settings';

const Router = props => (

    <Switch>

      <Route path="/" component={Charts}/>
      <Route path="/charts" component={Charts}/>
      <Route path="/tables" component={Tables}/>
      <Route path="/settings" component={Settings}/>

    </Switch>
);

export default Router;
