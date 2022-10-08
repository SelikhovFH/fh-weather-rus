import React, { FC } from 'react';
import pressureEllipse from '../../img/dynamic-widgets-icons/pressure/Ellipse 7.svg';
import pressureArrow from '../../img/dynamic-widgets-icons/pressure/Arrow.svg';
import { WidgetPressureProps } from '../../../types';

const WidgetInnerPressure: FC<WidgetPressureProps> = ({ amount, rotate }) => {
  return (
    <div className='mt-2 flex flex-col justify-center items-center h-2/3'>
      <div className='relative w-2/3 h-full'>
        <img
          className='h-full absolute top-1/2 left-1/2 translate-x-center translate-y-center'
          src={pressureEllipse}
          alt=''
        />
        <div
          className={`absolute w-1/3 translate-x-center translate-y-center top-2/3 left-1/2 flex justify-center items-center ${rotate}`}>
          <img
            src={pressureArrow}
            alt=''
            className='-rotate-[40deg] -translate-y-[40%]'
          />
        </div>
      </div>
      <div className='-mt-10 font-light text-2xl text-center font-Open-Sans'>
        {amount} <br /> hpa
      </div>
    </div>
  );
};

export default WidgetInnerPressure;
