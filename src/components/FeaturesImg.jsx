import React from 'react';
import featImgData from '../arrays/featImgData';
import '../assets/css/featureImg.css';

const FeaturesImg = () => {
    return (
        <div className='feat-img_comp'>
            <div className="container">
                <div className="feat-img-sec">

                    {
                        featImgData.map((data, id) => {
                            return (
                                <div className="img-box" key={id}>
                                    <img src={data.imgSrc} alt={data.imgSrc} />
                                </div>
                            );
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default FeaturesImg