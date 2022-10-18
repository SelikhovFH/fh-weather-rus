import React, { FC } from 'react';
import Header from '../components/searchbar/Header';
import Subscription from '../components/subscription/Subscription';
import Footer from '../components/footer/Footer';
import Slider from '../components/weather-page-components/Slider';
import { createPagesWithCards } from '../components/weather-page-components/createPagesWithCards';

const WeatherPage: FC = () => {
  return (
    <div className='mx-20 flex flex-col items-center'>
      <Header />
      <Slider pages={createPagesWithCards()} />
      <Subscription />
      <Footer />
    </div>
  );
};

export default WeatherPage;
