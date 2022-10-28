import React, { FC } from 'react';
import { serviceIcons } from 'assets/Icons';
import { HourlyForecastProps } from 'types';
import { mapHoursWithSunriseAndSunset } from 'components/city-page-components/HourlyForecast/components/mapHoursWithSunriseAndSunset';

const HourlyForecast: FC<HourlyForecastProps> = ({
  hourForecast,
  sunrise,
  sunset,
}) => {
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
        {mapHoursWithSunriseAndSunset({ sunrise, sunset, hourForecast })}
      </div>
    </div>
  );
};

export default HourlyForecast;
