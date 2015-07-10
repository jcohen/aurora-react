import React, { Component } from 'react';
import Router, { HistoryLocation, Route, RouteHandler } from 'react-router';
import HomePage from './pages/HomePage'

const routes =  (
  <Route handler={Aurora}>
    <Route name="home" path="/" handler={HomePage} />
  </Route>
);

class Aurora extends Component {
  render () {
    return (
      <RouteHandler />
    )
  }
}

Router.run(routes, HistoryLocation, (Root) => {
  React.render(<Root />, document.getElementById('root'));
});
