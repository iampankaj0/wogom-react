import React from 'react';
import '../assets/css/Header.css';
import { images } from '../constants';
import { BsSearch, BsPersonCircle } from 'react-icons/bs'
import { AiOutlineShop } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
    return (
        <div className='header-component'>
            <div className="container">
                <div className="logo-cat-brand">
                    <div className="logo">
                        <img src={images.Logo} alt='logo-image' />
                    </div>
                    <div className="category">
                        <img src={images.categ_logo} alt='category-logo' />
                        <a href='/'><span>Categories</span> <IoIosArrowDown /></a>
                    </div>
                    <div className="brand">
                        <img src={images.brand_logo} alt='brand-logo' />
                        <a href='/'><span>Brands</span> <IoIosArrowDown /></a>
                    </div>
                </div>
                <div className="search-sec">
                    <input type="text" className='input-box' />
                    <button className='search-btn'>
                        <BsSearch />
                    </button>
                </div>
                <div className="sell-buy">
                    <div className="sell">
                        <AiOutlineShop />
                        <strong>
                            <span>Sell on</span>
                            wogom
                        </strong>
                    </div>
                    <div className="buy">
                        <BsPersonCircle />
                        <strong>
                            <span>Buy on</span>
                            wogom
                        </strong>
                    </div>
                </div>
                <div className="mobile-icon">
                    <GiHamburgerMenu />
                </div>
            </div>
        </div>
    )
}

export default Header