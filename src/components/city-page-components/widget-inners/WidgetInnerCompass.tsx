import React, { FC } from 'react';
import { WidgetCompassProps } from '../../../types';

import ellipse from '../../img/dynamic-widgets-icons/compas-big/Ellipse 5.svg';
import lineBack from '../../img/dynamic-widgets-icons/compas-big/Line-back 34.svg';
import lineFront from '../../img/dynamic-widgets-icons/compas-big/Line-front 35.svg';
import compassTop from '../../img/dynamic-widgets-icons/compas-big/Polygon 1.svg';
import compassBottom from '../../img/dynamic-widgets-icons/compas-big/Rectangle-bottom 35.svg';
import compassSide from '../../img/dynamic-widgets-icons/compas-big/Rectangle-side 34.svg';

const compassIcons = [
  {
    img: compassTop,
    stylesImg: 'top-0 left-1/2 translate-y-[-40%]',
    letter: 'С',
    letterStyles: 'top-[10%] left-1/2 ',
  },
  {
    img: compassBottom,
    stylesImg: 'bottom-0 left-1/2',
    letter: 'Ю',
    letterStyles: 'bottom-0 left-1/2',
  },
  {
    img: compassSide,
    stylesImg: 'top-1/2 left-0 translate-x-[15%] translate-y-center',
    letter: 'З',
    letterStyles: 'top-1/2 left-[10%]',
  },
  {
    img: compassSide,
    stylesImg: 'top-1/2 right-0 translate-x-1/4 translate-y-center',
    letter: 'В',
    letterStyles: 'top-1/2 right-[3%]',
  },
];

const WidgetCompassInner: FC<WidgetCompassProps> = ({ angle }) => {
  return (
    <div className='mt-10 flex justify-center items-center h-1/2'>
      <div className='relative w-1/2 h-full'>
        <img
          className='h-full absolute top-1/2 left-1/2 translate-x-center translate-y-center'
          src={ellipse}
          alt=''
        />

        {compassIcons.map((item, i) => (
          <>
            <img
              key={i}
              src={item.img}
              alt=''
              className={`absolute translate-x-center ${item.stylesImg}`}
            />
            <div
              className={`absolute translate-x-center translate-y-center font-medium text-base leading-none ${item.letterStyles}`}>
              {item.letter}
            </div>
          </>
        ))}

        <div className='absolute translate-x-center translate-y-center top-1/2 left-1/2 text-center font-semibold text-3xl'>
          2<br />
          км/ч
        </div>

        <div
          className={`absolute left-1/2 top-1/2 w-1/5 h-1/5 translate-x-center translate-y-center ${angle}`}
          // Angle prop to Compass Rotate
        >
          <div className='flex flex-col items-center justify-center '>
            <img
              src={lineBack}
              alt=''
              className='w-full rotate-45 -translate-y-[200%]'
            />
            <img
              src={lineFront}
              alt=''
              className='w-full rotate-45 translate-y-3/4'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetCompassInner;
