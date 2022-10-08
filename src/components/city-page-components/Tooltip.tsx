import React from 'react';
import rainy from '../img//weather-icons/cards/rainy.svg';

const Tooltip = () => {
  return (
    <div className='max-w-xxs bg-white rounded-primary text-black font-Mulish py-10 px-6'>
      <div className='flex flex-wrap justify-between items-center mb-2.5 font-semibold'>
        <div className='h-5 w-full relative rounded-primary mb-4 bg-grade-gradient'>
          <div className='absolute top-1/2 left-[50%] h-4 w-4 rounded-full bg-white bg-opacity-70 -translate-y-1/2'></div>
        </div>
        <div className='text-base '>
          21° <span className='text-secondary-grey'>16°</span>
        </div>
        <img className='h-10' src={rainy} alt='' />
      </div>
      <div className='font-light leading-5 text-base'>
        <div className='mb-2'>
          В понедельник минимальная температура воздуха составит 16° в 00:00.
        </div>
        <div>Воздух прогреется до 22° между 14:00 и 15:00.</div>
      </div>
    </div>
  );
};

export default Tooltip;
