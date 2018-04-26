import React, { PureComponent} from 'react';
import './dashboard.scss';
import DashboardRoute from './DashboardRoute.jsx';
import {Categories} from '../../containers'

export default  class Dashboard extends PureComponent {

  render() {
    const {history, match: {url} } = this.props;
    return (
      <div className="dashboard__body">
        <div className="aside-content">
          <div className="side-menu-container">
            <Categories history={history}>
            </Categories>
          </div>
          <div className="filters-container">
          </div>
        </div>

        <div className="main-content">
          <DashboardRoute url={url}></DashboardRoute>
        </div>
      </div>
    );
  }
}


