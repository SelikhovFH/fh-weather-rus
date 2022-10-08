import React, { FC } from 'react';
import WidgetWrapper from './WidgetWrapper';
import WidgetInnerCompass from './widget-inners/WidgetInnerCompass';
import WidgetInnerStatic from '././widget-inners/WidgetInnerStatic';
import WidgetInnerUv from './widget-inners/WidgetInnerUv';
import WidgetInnerSunrise from './widget-inners/WidgetInnerSunrise';
import WidgetInnerPressure from './widget-inners/WidgetInnerPressure';

const Widgets: FC = () => {
  return (
    <div className='mb-20 w-full grid justify-items-center items-center grid-cols-4 grid-rows-2 gap-4'>
      {/* Map this when have sone data??? */}
      <WidgetWrapper title='Pressure'>
        <WidgetInnerPressure amount={1017} rotate='rotate-[32deg]' />
      </WidgetWrapper>
      <WidgetWrapper title='Sunrise'>
        <WidgetInnerSunrise
          sunriseTime='6:05'
          sunsetTime='20:33'
          move='top-[60%]'
        />


        
      </WidgetWrapper>
      <WidgetWrapper title='UV Index'>
        <WidgetInnerUv move='left-[50%]' />
      </WidgetWrapper>
      <WidgetWrapper title='Feels like'>
        <WidgetInnerStatic textMain='29°C' textSecondary='Feels the same' />
      </WidgetWrapper>
      <WidgetWrapper title='Wind'>
        <WidgetInnerCompass angle='rotate-compass-north-east' />
      </WidgetWrapper>
    </div>
  );
};

export default Widgets;
