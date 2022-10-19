import React, { FC } from 'react';
import { WidgetSunriseProps } from 'types';
import curvedLine from 'components/img/dynamic-widgets-icons/sunrise-time/Vector 11.svg';

const WidgetInnerSunrise: FC<WidgetSunriseProps> = ({
  sunriseTime,
  sunsetTime,
  movePosition,
}) => {
  return (
    <div className='flex flex-col'>
      <div className='font-Open-Sans font-light text-7xl text-center mt-4 mb-2'>
        {sunriseTime}
      </div>
      <div className='flex flex-col relative'>
        <img className='sunrise-curved' src={curvedLine} alt='line' />
        <div
          className={`absolute border-1px border-widget-sunrise-border w-full ${movePosition}`}></div>
      </div>
      <div className='font-light text-2xl text-center font-Open-Sans'>
        Sunset: {sunsetTime}
      </div>
    </div>
  );
};

export default WidgetInnerSunrise;
