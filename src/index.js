import React, { Component } from 'react';
import Router, { HistoryLocation, Route, RouteHandler } from 'react-router';
import HomePage from './components/HomePage';
import RolePage from './components/RolePage';

const routes = (
  <Route handler={Aurora}>
    <Route name='home' path='/' handler={HomePage} />
    <Route name='role' path='/:role' handler={RolePage} />
  </Route>
);

class Aurora extends Component {
  render() {
    return (
      <RouteHandler />
    );
  }
}

Router.run(routes, HistoryLocation, (Root) => {
  React.render(<Root />, document.getElementById('root'));
});
