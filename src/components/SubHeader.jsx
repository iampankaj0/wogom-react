import React from 'react';
import { FaApple } from 'react-icons/fa';
import { AiFillAndroid } from 'react-icons/ai';

const SubHeader = () => {
    return (
        <div className='subheader_component'>
            <div className="container">
                <div className="download-app">
                    Download App:
                    <AiFillAndroid className='icon'/>
                    <FaApple />
                </div>
            </div>
        </div>
    )
}

export default SubHeader;