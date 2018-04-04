import React from 'react';
import { Link } from 'react-router'
import './footer.scss';

const Footer = ()=> {

    return (
        <div className="footer">
            <div className="footer__item">
                <Link activeClassName="selectedFooterLink" className="footerLink" to="/terms">Terms</Link>
            </div>
            <div className="footer__item">
                <Link activeClassName="selectedFooterLink" className="footerLink" to="contact-us">Contact us</Link>
            </div>
        </div>
    );
};

export default Footer


