import React from 'react';
import './App.css';
import CarouselSlider from './components/CarouselSlider';
import FeaturesImg from './components/FeaturesImg';
import Header from './components/Header';
import NewWogom from './components/NewWogom';
import PersonalCare from './components/PersonalCare';
import RealDeal from './components/RealDeal';
import SubHeader from './components/SubHeader';

const App = () => {
  return (
    <div className='main_app-component'>

      <Header />
      <SubHeader />
      <CarouselSlider />
      <FeaturesImg />
      <NewWogom />
      <RealDeal />
      <PersonalCare />


    </div>
  )
}

export default App