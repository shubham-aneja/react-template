import React, { PureComponent} from 'react';
import { NavLink } from 'react-router-dom'
import './NavBar.css';

export default class NavBar extends PureComponent {
    render() {

        return (
            <div className="Home-app">
                <div>
                    <NavLink activeClassName="selectedNavLink" to="/app/home">App/Home</NavLink>
                </div>

                <div>
                    <NavLink activeClassName="selectedNavLink" to="contactus">Contact us</NavLink>
                </div>
                <div>
                    <NavLink activeClassName="selectedNavLink" to="/login">Logout</NavLink>
                </div>

            </div>
        );
    }
}


