import React from 'react';

const ContactUs = (props)=> {
    console.log('999', props.match.url)
    return (
        <div className="contact-us">
            <h2>Contact us at *********</h2>

            <div onClick={props.history.goBack}>
                Go back
            </div>
        </div>
    );
}


export default ContactUs