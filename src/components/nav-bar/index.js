import React, { PureComponent} from 'react';
import { NavLink } from 'react-router-dom'
import './NavBar.scss';

export default class NavBar extends PureComponent {
    render() {

        return (
            <div className="navigations">

                <div  className="navigations__item">
                    <NavLink activeClassName="selectedNavLink" className="navLink"  to="/home/tasks">Tasks</NavLink>
                </div>
                <div  className="navigations__item">
                    <NavLink activeClassName="selectedNavLink" className="navLink"  to="/home/planets">Planets</NavLink>
                </div>
            </div>
        );
    }
}


