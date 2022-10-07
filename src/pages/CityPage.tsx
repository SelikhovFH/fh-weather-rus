import React from 'react';
import starOutlined from '../components/img/service-icons/star-outlined.svg';
import cloudy from '../components/img/hours/cloudy.svg';
import calendar from '../components/img/service-icons/calendar-outlined.svg';
import Searchbar from '../components/searchbar/Searchbar';
import Subscription from '../components/subscription/Subscription';
import Footer from '../components/footer/Footer';
import Tooltip from '../components/city-page-components/Tooltip';
import GraphSwitcher from '../components/city-page-components/GraphSwitcher';
import WidgetBasic from '../components/city-page-components/WidgetBasic';

const someHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CityPage = () => {
  return (
    <div className='mx-20 flex flex-col items-center text-white'>
      <Searchbar />

      <div className="w-full flex justify-between items-end py-24 px-24 rounded-primary font-Mulish relative bg-[url('/src/components/img/location-bg.png')] bg-center bg-cover mb-20">
        <div className='bg-blured-grey backdrop-blur-sm rounded-primary py-8 px-14 font-light text-8xl leading-tight'>
          <div className='mb-4'>Варшава</div>
          <div className='mb-4'>29°C</div>
          <div className='font-medium text-4.5xl leading-tight'>
            Переменная облачность
          </div>
        </div>
        <div className='bg-blured-grey backdrop-blur-sm py-6 px-14 font-light text-5xl rounded-primary'>
          12:00, Пятница
        </div>
        <img className='absolute right-8 top-5' src={starOutlined} alt='star' />
      </div>

      <div className='w-full rounded-primary bg-gray-blue py-10 px-18 mb-20'>
        <div className='flex justify-center items-center mb-16 text-4xl'>
          <img className='mr-2.5' src={calendar} alt='img' />
          <div className='font-Mulish'>Почасовой прогноз</div>
        </div>
        <div className='flex justify-around'>
          {someHours.map((item, i) => (
            <div key={i} className='hour-forecast-item font-Mulish'>
              <div className='font-light text-2xl text-center mb-5'>Сейчас</div>
              <div className='py-11 px-7 flex flex-col items-center justify-center bg-blured-grey backdrop-blur-sm rounded-primary'>
                <img src={cloudy} alt='cloudy' />
                <div className='mt-6 font-bold'>32°C</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mb-20 w-full grid justify-items-center items-center grid-cols-4 grid-rows-2 gap-4'>
        <WidgetBasic />
        <WidgetBasic />
        <WidgetBasic />
        <WidgetBasic />
        <WidgetBasic />
        <WidgetBasic />
        <WidgetBasic />
        <WidgetBasic />
      </div>

      {/* <Tooltip /> */}
      {/* <GraphSwitcher /> */}
      <Subscription />
      <Footer />
    </div>
  );
};

export default CityPage;
