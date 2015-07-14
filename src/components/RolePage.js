import React, { Component, PropTypes } from 'react';

import Breadcrumbs from './Breadcrumbs';
import Header from './Header';
import JobList from './JobList';
import { makeResources } from '../utils/ResourceUtils';
import ResourceConsumption from './ResourceConsumption';

class RolePage extends Component {
  static propTypes = {
    params: PropTypes.shape({
      role: PropTypes.string.isRequired
    }).isRequired,
  }

  render() {
    return (
      <div>
        <Breadcrumbs role={this.props.params.role} />

        <Header>
          <span>Jobs for <em>{this.props.params.role}</em></span>
        </Header>

        <ResourceConsumption
            productionUtilization={makeResources(6, 68.25, 11.00)}
            quota={makeResources(165.2, 165.20, 165.20)}
            nonProductionUtilization={makeResources(30, 128.48, 55.11)} />

        <JobList />
      </div>
    );
  }
}

export default RolePage;
