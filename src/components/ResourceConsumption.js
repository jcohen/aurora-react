import React, { PropTypes } from 'react';

const ResourceTypes = {
  cpu: { label: 'CPU', unit: 'cores' },
  ram: { label: 'RAM', unit: 'GiB' },
  disk: { label: 'Disk', unit: 'GiB' }
};

const resources = PropTypes.shape({
  cpu: PropTypes.number.isRequired,
  ram: PropTypes.number.isRequired,
  disk: PropTypes.number.isRequired
});

class ResourceRow {
  static propTypes = {
    resourceType: PropTypes.string.isRequired,
    resources: PropTypes.arrayOf(resources).isRequired
  };

  render() {
    const resourceType = ResourceTypes[this.props.resourceType];
    return (
      <tr>
        <td>{resourceType.label}</td>
        {this.props.resources.map((resource, i) =>
        <td key={i}>{resource[this.props.resourceType]} {resourceType.unit}</td>
        )}
      </tr>
    );
  }
}

export default class ResourceConsumption {
  static propTypes = {
    nonProductionUtilization: resources.isRequired,
    productionUtilization: resources.isRequired,
    quota: resources.isRequired,
  };

  render() {
    return (
      <div className='row'>
        <div className='col-md-8'>
          <div>
            <h4>Resource consumption</h4>
            <table className='table table-striped table-hover table-condensed'>
              <thead>
                <tr>
                  <th>Resource</th>
                  <th>Production Consumption</th>
                  <th>Quota</th>
                  <th>Non-Production Consumption</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(ResourceTypes).map((resourceType, i) =>
                  <ResourceRow
                      key={i}
                      resourceType={resourceType}
                      resources={[
                          this.props.productionUtilization,
                          this.props.quota,
                          this.props.nonProductionUtilization]} />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};
