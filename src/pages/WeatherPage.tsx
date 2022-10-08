import React from 'react';
import Searchbar from '../components/searchbar/Searchbar';
import WeatherCard from '../components/weather-page-components/WeatherCard';
import arrowLeft from '../components/img/pagination/arrow-left.svg';
import arrowRight from '../components/img/pagination/arrow-right.svg';
import dotActive from '../components/img/pagination/dot-active.svg';
import dot from '../components/img/pagination/dot.svg';
import Subscription from '../components/subscription/Subscription';
import Footer from '../components/footer/Footer';

const WeatherPage = () => {
  return (
    <div className='mx-20 flex flex-col items-center'>
      <Searchbar />
      <div className='grid grid-cols-4 w-full gap-x-6 mb-20'>
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </div>
      <div className='flex justify-center mb-20'>
        <img className='mr-5 cursor-pointer' src={arrowLeft} alt='' />
        <img className='mx-1' src={dotActive} alt='' />
        <img className='mx-1' src={dot} alt='' />
        <img className='mx-1' src={dot} alt='' />
        <img className='ml-5 cursor-pointer' src={arrowRight} alt='' />
      </div>
      <Subscription />
      <Footer />
    </div>
  );
};

export default WeatherPage;
