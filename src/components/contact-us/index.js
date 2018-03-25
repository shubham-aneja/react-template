import React from 'react';

const ContactUs = (props)=> {
    return (
        <div className="Home-app">
            <h2>Contact us at *********</h2>

            <div onClick={()=>{
            props.history.goBack();
            }}>
                Go back
            </div>
        </div>
    );
}


export default ContactUs