import React from 'react';
import personalCareData from '../arrays/personalCareData';
import '../assets/css/personalCare.css';

const PersonalCare = () => {
    return (
        <div className='personal-care_component'>
            <div className="container">
                <div className="heading-main">
                    <span>ELECTRONICS FOR</span> PERSONAL CARE
                </div>
                <div className="all-prod-new">
                    {
                        personalCareData.map((data, id) => {
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

export default PersonalCare