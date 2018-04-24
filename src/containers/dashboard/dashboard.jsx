import React, { PureComponent} from 'react';
import './dashboard.scss';
import {Categories} from '../../containers'

export default  class Dashboard extends PureComponent {

    render() {
        const {router: history} = this.props;
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
                    {this.props.children}
                </div>
            </div>
        );
    }
}


