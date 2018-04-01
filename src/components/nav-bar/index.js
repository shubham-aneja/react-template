import React, { PureComponent} from 'react';
import { Link } from 'react-router'
import './NavBar.css';

export default class NavBar extends PureComponent {
    render() {

        return (
            <div className="Home-app">
                <div>
                    <Link activeClassName="selectedNavLink" to="/app">App/Home</Link>
                </div>

                <div>
                    <Link activeClassName="selectedNavLink" to="/contactus">Contact us</Link>
                </div>
                <div>
                    <Link onClick={()=> {
                localStorage.removeItem('userInfo')
            }}
                          activeClassName="selectedNavLink" to="/login">Logout</Link>
                </div>

            </div>
        );
    }
}


