import React from 'react';
import widgetBg from '../img/widget-bg.png';
import WidgetCompassInner from './WidgetCompassInner';

const staticWidgetInner = (
  <div className='mt-12'>
    <div className='font-Open-Sans font-light flex justify-center items-center text-7xl text-center mb-12'>
      29°C
    </div>

    <div className='font-light text-2xl text-center'>
      По ощущениям <br />
      примерно так-же
    </div>
  </div>
);

const WidgetBasic = () => {
  return (
    <div className='relative w-full pb-[100%] rounded-primary bg-cover bg-center bg-[url(/src/components/img/widget-bg.png)] font-Mulish'>
      <div className='absolute w-full h-full'>
        <div className='flex justify-center items-center text-4xl mt-[15%]'>
          <img className='mr-2.5' src='img/icons-details/temp.svg' alt='' />
          <div>Ощущается как</div>
        </div>

        <WidgetCompassInner/>

      </div>
    </div>
  );
};

export default WidgetBasic;
