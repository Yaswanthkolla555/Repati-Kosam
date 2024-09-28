import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <>
            <div className="footer" id='contactus'>
                <div className="footer_top">
                    <div className="footer_left">
                        <h4>Get in touch</h4>
                        <h1>Signup for our latest info</h1>
                        <input type="email" placeholder='Email' />
                        <div className="Submitbox">
                            <button className='buttonSubmit'>Submit</button>
                            <span>We Promise you, no spam, ever</span>
                        </div>
                    </div>
                    <div className="footer_right">
                        <h3>Contact Us</h3>
                        <div className="matter">
                            <img src="./locationmark.png" alt="" />
                            <div className="">11-75, Opp. City Central,
                                Harbor Park Road,
                                Himayatnagar,
                                Hyderabad- 543264 </div>
                        </div>
                        <div className="matter">
                        <img src="./phone_icon.png" alt="" />
                            <div className="">+1800 08230 2344 </div>
                        </div>
                        <div className="matter">
                        <img src="./message_icon.png" alt="" />
                            <div className="">contact@vijaya.clinics</div>
                        </div>
                    </div>
                </div>
                <div className="footer_mid">
                    <div className="quotation">
                    “The Presence of the Doctor is the Beginning of the Cure.”
                    </div>
                </div>
                <div className="footer_end">
                    <div className='footer_text'>&copy;All rights reserved. Vijaya Clinics</div>
                    <div className='footer_text'>
                        <img src="./Question_icon.png" alt="" />
                        <div>Need help? Contact us: +91 2484559324</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
