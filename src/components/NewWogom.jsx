import React from 'react';
import '../assets/css/newWogom.css';
import { images } from '../constants';

const NewWogom = () => {
    return (
        <div className='new-wogom_component'>
            <div className="container">
                <div className="heading-main">
                    NEW ON <span>WOGOM</span>
                </div>
                <div className="all-prod-new">
                    <div className="card">
                        <img src={images.newWogom1} alt={images.newWogom1} />
                    </div>
                    <div className="card">
                        <img src={images.newWogom2} alt={images.newWogom2} />
                    </div>
                    <div className="card">
                        <img src={images.newWogom3} alt={images.newWogom3} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewWogom;