import React from 'react';
import './App.css';
import BestElectronics from './components/BestElectronics';
import CarouselSlider from './components/CarouselSlider';
import FeaturesImg from './components/FeaturesImg';
import Footer from './components/Footer';
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
      <BestElectronics />
      <Footer />


    </div>
  )
}

export default App