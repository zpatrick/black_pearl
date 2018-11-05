import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from './history';
import Layout from './Layout';
import Dashboard from './Dashboard';
import Audio from './Audio';
import Video from './Video';

function Root() {
  return (
      <Router history={history}>
        <Layout>
          <Route exact path="/audio" component={Audio} />
          <Route exact path="/video" component={Video} />
          <Route exact path="/" component={Dashboard} /> 
        </Layout>
      </Router>
  );
}

export default Root;
