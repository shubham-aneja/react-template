import React from 'react';

const ContactUs = (props)=> {
    return (
        <div className="contact-us">
            <h2>Contact us at *********</h2>

            <div onClick={props.router.goBack}>
                Go back
            </div>
        </div>
    );
}


export default ContactUs