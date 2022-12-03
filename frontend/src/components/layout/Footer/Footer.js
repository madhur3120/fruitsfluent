import React, { Component } from 'react'
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer1">
                <div className="footerrow">
                    <div className="footercolumn">

                    </div>
                    <div className="footercolumn">
                        <h2>Office<div className="highlight1"><span className='footerspan'></span></div></h2>
                        <p className='footerp'>Gyan Circle</p>
                        <p className='footerp'>Satyavedu, Chittoor</p>
                        <p className='footerp'>Andhra Pradesh, PIN 517616, INDIA</p>
                        <p className="emailid1">NutKART@gmail.com</p>
                        <p className='footerp'>< h3>+91 1234567890</h3></p>
                    </div>

                    <div className="footercolumn">
                        <h2>Links<div className="highlight1"><span className='footerspan'></span></div></h2>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Account</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/">Blog Spot</a></li>
                        </ul>
                    </div>

                    <div className="footercolumn">
                        <h2>NewsLetter<div className="highlight1"><span className='footerspan'></span></div></h2>
                        <form className='footerform'>
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                            <input className='finput' type="email" placeholder='Enetr your email id' required></input>
                            <button className='fbutton' type='submit'><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                        </form>

                        <div>
                            <h2 className='footerh2'>Follow Us:</h2>
                        </div>

                        <div className="social1">
                            <a href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="/"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
                            <a href="/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        </div>
                    </div>


                </div>

                <hr className="accesory1" />

                <p className="copyright1">NutKART © 2022 - All Rights Reserved</p>
            </div>
        )
    }
}

export default Footer