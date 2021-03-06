import React from 'react';
import { HomeIcon, PhoneIcon, ClockIcon, MailIcon, ChevronRightIcon } from '@heroicons/react/solid'
import './Footer.css'
import instagram from '../../img/instagram.png'
import twitter from '../../img/twitter.png'
import facebook from '../../img/facebook (1).png'
import linkedin from '../../img/linkedin.png'
import youtube from '../../img/youtube.png'
import whatsapp from '../../img/whatsapp.png'
import { Link } from 'react-router-dom';



const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <>
            <div style=
                {{
                    backgroundColor: '#347fb1de',

                }}
                className='mt-5 style'
            >
                <div className="row text-white container">
                    <div className='col-md-4 my-5 '>
                        <div className='d-flex justify-content-end'>
                            <div>
                                <h4 className='mb-3 text-start'>Contact Us</h4>
                                <div className='text-start'>
                                    <p className='my-1'><HomeIcon className="font-size text-blue-500" />
                                        No: 58 A, East Madison Street,</p>
                                    <p className='my-1 ms-4'>Baltimore, MD, USA 4508</p>
                                    <p className='my-1'>
                                        <PhoneIcon className="font-size text-blue-500" />
                                        01825-343708</p>
                                    <p className='my-1'>
                                        <ClockIcon className="font-size text-blue-500" />
                                        9.30AM - 7.30PM</p>
                                    <p className='my-1'>
                                        <MailIcon className="font-size text-blue-500" />
                                        avirus170@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='col-md-4 my-5 text-start'>
                        <div className='d-flex justify-content-end'>
                            <div>
                                <h4 className='mb-3'>Links</h4>
                                <div>
                                    <p className='my-1'><ChevronRightIcon className="font-size text-blue-500" />
                                        <Link
                                            className='text-decoration-none text-white'
                                            to='/about'>About Us</Link>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className='col-md-4 my-5 text-start'>
                        <div className='d-flex justify-content-end'>
                            <div>
                                <h4 className='mb-4'>Connect</h4>
                                <div>
                                    <img className='social-icon me-4 mt-2 mb-4' src={instagram} alt="" />
                                    <img className='social-icon me-4 mt-2 mb-4' src={twitter} alt="" />
                                    <img className='social-icon me-4 mt-2 mb-4' src={facebook} alt="" />
                                </div>
                                <div>
                                    <img className='social-icon me-4' src={youtube} alt="" />
                                    <img className='social-icon me-4' src={linkedin} alt="" />
                                    <img className='social-icon me-4' src={whatsapp} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' text-center text-white py-3    '
                style={{ backgroundColor: 'rgb(5, 51, 83)' }}
            >
                <small><span>&copy;</span> {year} Hikeventures all right Reserved</small>
            </div>
        </>
    );
};

export default Footer;