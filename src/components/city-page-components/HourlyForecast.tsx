import React, { FC } from 'react';
import cloudy from '../img/hours/cloudy.svg';
import { serviceIcons } from '../../assets/Icons';

const someHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const HourlyForecast: FC = () => {
  return (
    <div className='w-full rounded-primary bg-gray-blue py-10 px-18 mb-20'>
      <div className='flex justify-center items-center mb-16 text-4xl'>
        <img
          className='mr-2.5'
          src={serviceIcons['calendar-outlined']}
          alt='img'
        />
        <div className='font-Mulish'>Почасовой прогноз</div>
      </div>

      <div className='grid grid-cols-11 grid-rows-1 gap-4'>
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
  );
};

export default HourlyForecast;
