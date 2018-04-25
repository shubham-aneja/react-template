import React from 'react';
import './header.scss'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
const Header = (props)=> {

    return (
        <div className="header-container">
            <div className="header__logo-container">
                <NavLink to="/home/dashboard/products">
                    <img src="/logo.png" alt="logo__img" className=""/>
                </NavLink>
            </div>
            <div className="header__title-container">
                Welcome to Pizza Bar
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
