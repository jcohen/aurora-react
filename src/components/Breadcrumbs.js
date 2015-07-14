import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class BreadcrumbItem {
  static propTypes = {
    item: PropTypes.string,
    nextItem: PropTypes.string,
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }

  render() {
    const { item, nextItem, title, href } = this.props;

    if (!item) {
      return false;
    }

    if (!nextItem) {
      return (
        <li className='active'>{title + ': ' + item}</li>
      );
    } else {
      return (
        <li><Link to={href}>{title + ': ' + item}</Link></li>
      );
    }
  }
}

export default class Breadcrumbs {
  static propTypes = {
    role: PropTypes.string,
    environment: PropTypes.string,
    job: PropTypes.string,
    instance: PropTypes.number
  }

  render() {
    const { role, environment, job } = this.props;

    return (
      <div className='row'>
        <div className='col-md-12'>
          <ul className='breadcrumb'>
            <li><Link to='home'>Home</Link></li>

            <BreadcrumbItem
                item={role}
                nextItem={environment}
                href={`/${role}`}
                title='Role' />

            <BreadcrumbItem
                item={environment}
                nextItem={job}
                href={`/${role}/${environment}`}
                title='Environment' />

            <BreadcrumbItem
                item={job}
                href={`/${role}/${environment}/${job}`}
                title='Job' />
          </ul>
        </div>
      </div>
    );
  }
}
