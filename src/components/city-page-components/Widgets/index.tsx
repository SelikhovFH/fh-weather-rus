import React, { FC } from 'react';
import WidgetWrapper from '../Widget';
import WidgetInnerCompass from '../Widget/components/WidgetInnerCompass';
import WidgetInnerStatic from '../Widget/components/WidgetInnerStatic';
import WidgetInnerUv from '../Widget/components/WidgetInnerUv';
import WidgetInnerSunrise from '../Widget/components/WidgetInnerSunrise';
import WidgetInnerPressure from '../Widget/components/WidgetInnerPressure';

import tempIcon from 'components/img/widget-title-icons/temp.svg';
import windIcon from 'components/img/widget-title-icons/wind.svg';
import uvIcon from 'components/img/widget-title-icons/sun.svg';
import humidityIcon from 'components/img/widget-title-icons/humidity.svg';
import sunriseIcon from 'components/img/widget-title-icons/sunrise.svg';
import visibilityIcon from 'components/img/widget-title-icons/visibility.svg';
import pressureIcon from 'components/img/widget-title-icons/pressure.svg';
import cloudIcon from 'components/img/widget-title-icons/cloud.svg';

const Widgets: FC = () => {
  return (
    <div className='mb-20 w-full grid justify-items-center items-center grid-cols-4 grid-rows-2 gap-4'>
      {/* Map this when have some data??? */}
      <WidgetWrapper title='Pressure' titleImage={pressureIcon}>
        <WidgetInnerPressure pressureData={1017} />
      </WidgetWrapper>
      <WidgetWrapper title='Sunrise' titleImage={sunriseIcon}>
        <WidgetInnerSunrise
          sunriseTime='6:05'
          sunsetTime='20:33'
          movePosition='top-[60%]'
        />
      </WidgetWrapper>
      <WidgetWrapper title='UV Index' titleImage={uvIcon}>
        <WidgetInnerUv movePosition='left-[8%]' />
      </WidgetWrapper>
      <WidgetWrapper title='Feels like' titleImage={tempIcon}>
        <WidgetInnerStatic textMain='29°C' textSecondary='Feels the same' />
      </WidgetWrapper>
      <WidgetWrapper title='Wind' titleImage={windIcon}>
        <WidgetInnerCompass rotateAngle={65} />
      </WidgetWrapper>
    </div>
  );
};

export default Widgets;
