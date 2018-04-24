import React from 'react';
import { Link } from 'react-router'
import './footer.scss';

const Footer = ()=> {

    return (
        <div className="footer">
            <div className="footer__item">
                <Link activeClassName="selectedFooterLink" className="footerLink" to="/home/terms">Terms</Link>
            </div>
            <div className="footer__item">
                <Link activeClassName="selectedFooterLink" className="footerLink" to="/home/contact-us">Contact us</Link>
            </div>
        </div>
    );
};

export default Footer


