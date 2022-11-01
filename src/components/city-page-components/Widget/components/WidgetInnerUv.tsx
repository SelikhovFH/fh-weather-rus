import React, { FC } from 'react';
import { WidgetUvProps } from 'types';

const WidgetInnerUv: FC<WidgetUvProps> = ({ uvIndex }) => {
  const calculateMovePosition = (uvIndex: number): string => {
    const maxUvIndex = 13;
    if (uvIndex > 13) return '100%';
    return `${(uvIndex / maxUvIndex) * 100}%`;
  };
  const returnTextDescription = (uvIndex: number): string => {
    if (uvIndex <= 2) return 'Very low';
    if (uvIndex <= 5) return 'Low';
    if (uvIndex <= 7) return 'Normal';
    if (uvIndex <= 10) return 'High';
    return 'Very high';
  };
  return (
    <div className='flex flex-col items-center mt-8'>
      <div className='font-light text-4.5xl text-start'>
        {uvIndex} <br />
        {returnTextDescription(uvIndex)}
      </div>
      <div className='mt-10 rounded-primary bg-grade-gradient w-4/5 h-14'>
        <div className='relative h-full mx-5'>
          <div
            style={{ left: calculateMovePosition(uvIndex) }}
            className='absolute translate-y-center translate-x-center top-1/2 h-10 w-10 bg-white bg-opacity-70 rounded-primary ${movePosition}'></div>
        </div>
      </div>
    </div>
  );
};

export default WidgetInnerUv;
