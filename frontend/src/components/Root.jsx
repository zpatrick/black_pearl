import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';
import App from './App';

function Root() {
  return (
      <Router history={history}>
        <Switch>
          <Route component={App}/>
        </Switch>
      </Router>
  );
}

export default Root;
