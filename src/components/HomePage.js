import connectToStores from 'alt/utils/connectToStores';
import React, { Component } from 'react';
import { Link } from 'react-router';

import Breadcrumbs from '../components/Breadcrumbs';
import Header from '../components/Header';
import RoleActions from '../actions/RoleActions';
import RoleStore from '../stores/RoleStore';

class AllRoles extends Component {
  render() {
    if (this.props.errorMessage) {
      return (
        <div>{this.props.errorMessage}</div>
      );
    }

    if (this.props.loading) {
      return (
        <div>
          <img src='/images/spinner.gif' />
        </div>
      )
    }

    return (
      <table className='table table-striped table-hover table-bordered table-condensed'>
        <thead>
          <tr>
            <th>Role</th>
            <th>Jobs</th>
            <th>Cron Jobs</th>
          </tr>
        </thead>
        <tbody>
          {this.props.roles.map((role, i) => {
            return (
              <tr key={i}>
                <td><Link to='role' params={{'role': role.name}}>{role.name}</Link> </td>
                <td>{role.jobs}</td>
                <td>{role.crons}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}


@connectToStores
class HomePage extends Component {
  static getStores() {
    return [RoleStore];
  }

  static getPropsFromStores() {
    return RoleStore.getState();
  }

  componentDidMount() {
    RoleActions.fetchRoles();
  }

  render() {
    return (
      <div>
        <Breadcrumbs />
        <Header title='Scheduled Jobs Summary' />
        <AllRoles {...this.props} />
      </div>
    );
  }
}

export default HomePage;