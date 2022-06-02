import React from 'react';
import '../assets/css/realDeal.css';
import realDealData from '../arrays/realDealData';

const RealDeal = () => {
    return (
        <div className='real-deal_component'>
            <div className="container">
                <div className="heading-main">
                    THE REAL <span>DEALS</span>
                </div>
                <div className="all-prod-new">
                    {
                        realDealData.map((data, id) => {
                            return (
                                <div className="card" key={id}>
                                    <img src={data.imgSrc} alt={data.imgSrc} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default RealDeal