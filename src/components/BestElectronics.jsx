import React from 'react';
import '../assets/css/bestElectronics.css';
import images from '../constants/images';

const BestElectronics = () => {
    return (
        <div className='bext-electronics_component'>
            <div className="container">
                <div className="heading-main">
                    <span>THE</span> BEST ELECTRONICS <span>RIGHT HERE</span>
                </div>

                <div className="all-prods-bst">
                    <div className="two-prods">
                        <div className="card">
                            <img src={images.bstElec1} alt={images.bstElec1} />
                        </div>
                        <div className="card">
                            <img src={images.bstElec2} alt={images.bstElec2} />
                        </div>
                    </div>

                    <div className="four-prods">
                        <div className="card">
                            <img src={images.bstElec3} alt={images.bstElec3} />
                        </div>
                        <div className="card">
                            <img src={images.bstElec4} alt={images.bstElec4} />
                        </div>
                        <div className="card">
                            <img src={images.bstElec5} alt={images.bstElec5} />
                        </div>
                        <div className="card">
                            <img src={images.bstElec6} alt={images.bstElec6} />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default BestElectronics