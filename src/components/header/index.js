import React from 'react';
import './header.scss'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
const Header = (props)=> {

    return (
        <div className="header-container">

            <div className="header__logo-container">
                <Link to="/">

                    <img src="/logo.png" alt="logo__img" className=""/>
                </Link>

            </div>

            <div className="header__title-container">
                Header component
            </div>


            <div className="header__actions-container">
                <div onClick={props.onLogout} className="header__action-container__action">
                    Logout
                </div>
            </div>
        </div>
    );
};
Header.propTypes = {
    onLogout: PropTypes.func.isRequired
};

export default Header
