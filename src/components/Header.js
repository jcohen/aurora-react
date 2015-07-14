import React, { PropTypes } from 'react';

export default class Header {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div className="page-header">
        <h2 className="text-center">{this.props.children}</h2>
      </div>
    );
  }
};
