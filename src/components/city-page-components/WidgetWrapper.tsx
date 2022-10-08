import React, { FC } from 'react';
import { WidgetWrapperProps } from '../../types';
import widgetBg from '../img/widget-bg.png';

const WidgetWrapper: FC<WidgetWrapperProps> = ({ children, title, titleImage }) => {
  return (
    <div className='relative pr-full pb-full rounded-primary bg-cover bg-center bg-[url(/src/components/img/widget-bg.png)] font-Mulish'>
      <div className='absolute w-full h-full'>
        <div className='flex justify-center items-center text-4xl mt-[15%]'>
          <img className='mr-2.5' src={titleImage} alt='' />
          <div>{title}</div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default WidgetWrapper;
