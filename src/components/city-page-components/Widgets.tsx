import React, { FC } from 'react';
import WidgetWrapper from './WidgetWrapper';
import WidgetInnerCompass from './widget-inners/WidgetInnerCompass';
import WidgetInnerStatic from '././widget-inners/WidgetInnerStatic';
import WidgetInnerUv from './widget-inners/WidgetInnerUv';
import WidgetInnerSunrise from './widget-inners/WidgetInnerSunrise';
import WidgetInnerPressure from './widget-inners/WidgetInnerPressure';

import tempIcon from '../img/widget-title-icons/temp.svg';
import windIcon from '../img/widget-title-icons/wind.svg';
import uvIcon from '../img/widget-title-icons/sun.svg';
import humidityIcon from '../img/widget-title-icons/humidity.svg';
import sunriseIcon from '../img/widget-title-icons/sunrise.svg';
import visibilityIcon from '../img/widget-title-icons/visibility.svg';
import pressureIcon from '../img/widget-title-icons/pressure.svg';
import cloudIcon from '../img/widget-title-icons/cloud.svg';

const Widgets: FC = () => {
  return (
    <div className='mb-20 w-full grid justify-items-center items-center grid-cols-4 grid-rows-2 gap-4'>
      {/* Map this when have some data??? */}
      <WidgetWrapper title='Pressure' titleImage={pressureIcon}>
        <WidgetInnerPressure amount={1017} rotateAngle='rotate-[32deg]' />
      </WidgetWrapper>
      <WidgetWrapper title='Sunrise' titleImage={sunriseIcon}>
        <WidgetInnerSunrise
          sunriseTime='6:05'
          sunsetTime='20:33'
          movePosition='top-[60%]'
        />
      </WidgetWrapper>
      <WidgetWrapper title='UV Index' titleImage={uvIcon}>
        <WidgetInnerUv movePosition='left-[50%]' />
      </WidgetWrapper>
      <WidgetWrapper title='Feels like' titleImage={tempIcon}>
        <WidgetInnerStatic textMain='29°C' textSecondary='Feels the same' />
      </WidgetWrapper>
      <WidgetWrapper title='Wind' titleImage={windIcon}>
        <WidgetInnerCompass rotateAngle='rotate-compass-north-east' />
      </WidgetWrapper>
    </div>
  );
};

export default Widgets;
