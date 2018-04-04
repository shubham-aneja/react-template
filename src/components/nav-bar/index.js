import React, { PureComponent} from 'react';
import { Link } from 'react-router'
import './NavBar.scss';

export default class NavBar extends PureComponent {
    render() {

        return (
            <div className="navigations">

                <div  className="navigations__item">
                    <Link activeClassName="selectedNavLink" className="navLink"  to="/tasks">Tasks</Link>
                </div>
                <div  className="navigations__item">
                    <Link activeClassName="selectedNavLink" className="navLink"  to="/planets">Planets</Link>
                </div>
            </div>
        );
    }
}


