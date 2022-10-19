import React, { FC } from 'react';
import { serviceIcons } from 'assets/Icons';

const CityTitle: FC = () => {
  return (
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
      <img
        className='absolute right-8 top-5'
        src={serviceIcons['star-outlined']}
        alt='star'
      />
    </div>
  );
};

export default CityTitle;
