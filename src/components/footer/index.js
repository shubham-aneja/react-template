import React from 'react';
import { NavLink } from 'react-router-dom'
import './footer.scss';

const Footer = ()=> {

    return (
        <div className="footer">
            <div className="footer__item">
                <NavLink activeClassName="selectedFooterLink" className="footerLink" to="/home/terms">Terms</NavLink>
            </div>
            <div className="footer__item">
                <NavLink activeClassName="selectedFooterLink" className="footerLink" to="/home/contact-us">Contact us</NavLink>
            </div>
        </div>
    );
};

export default Footer


