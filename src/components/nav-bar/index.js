import React, { PureComponent} from 'react';
import { Link } from 'react-router'
import './NavBar.scss';

export default class NavBar extends PureComponent {
    render() {

        return (
            <div className="navigations">
                <div  className="navigations__item">
                    <Link activeClassName="selectedNavLink"  className="navLink" to="/">Home</Link>
                </div>

                <div  className="navigations__item">
                    <Link activeClassName="selectedNavLink" className="navLink"  to="/contactus">Contact us</Link>
                </div>
                <div  className="navigations__item">
                    <Link activeClassName="selectedNavLink" className="navLink"  to="/dummy">Dummy link</Link>
                </div>
            </div>
        );
    }
}


