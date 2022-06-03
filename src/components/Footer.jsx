import React from 'react';
import '../assets/css/footer.css';
import { AiFillAndroid } from 'react-icons/ai';
import { FaApple } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer-component'>
            <div className="container">
                <div className="footer-content">
                    <p>
                        Download App:
                        <AiFillAndroid className='icon' />
                        <FaApple />
                    </p>
                    <p>© 2021-2022 WOGOM | All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;