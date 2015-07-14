import connectToStores from 'alt/utils/connectToStores';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Breadcrumbs from './Breadcrumbs';
import Header from './Header';
import RoleActions from '../actions/RoleActions';
import RoleStore from '../stores/RoleStore';

class AllRoles extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    roles: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      jobs: PropTypes.number.isRequired,
      crons: PropTypes.number.isRequired
    })).isRequired
  };

  render() {
    if (this.props.loading) {
      return (
        <div>
          <img src='/images/spinner.gif' />
        </div>
      );
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
        <Header>Scheduled Jobs Summary</Header>
        <AllRoles {...this.props} />
      </div>
    );
  }
}

export default HomePage;
