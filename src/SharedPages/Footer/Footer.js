import React from 'react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './../../image/images.png'

const Footer = () => {
    return (
        <footer className="footer flex justify-around p-10 bg-neutral m-auto">
            <div>
                <img src={logo} className='w-16 h-16' alt="" />
                <p>Travel Services <br />Explore something new</p>
                <p>Copyright@2022 Travel service</p>
            </div>
            <div>
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col gap-4">
                    <Link><FaGoogle /></Link>
                    <Link><FaFacebook /></Link>
                    <Link><FaTwitter /></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;