import React, { FC } from 'react';
import { WidgetUvProps } from '../../../types';

const WidgetInnerUv: FC<WidgetUvProps> = ({ movePosition }) => {
  return (
    <div className='flex flex-col items-center mt-8'>
      <div className='font-light text-4.5xl text-start'>
        0 <br />
        Низкий
      </div>
      <div className='mt-10 relative rounded-primary bg-grade-gradient w-4/5 h-14'>
        <div
          className={
            `absolute translate-y-center translate-x-center top-1/2 h-10 w-10 bg-white bg-opacity-70 rounded-primary ${movePosition}`
            // movePosition prop to move grade dot
          }></div>
      </div>
    </div>
  );
};

export default WidgetInnerUv;
