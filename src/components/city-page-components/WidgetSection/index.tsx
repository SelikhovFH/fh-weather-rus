import React, { FC } from 'react';
import Widget from 'components/city-page-components/WidgetSection/components/Widget';

import { weatherExample } from 'services/weather.service';
import { createArrayOfWidgets } from './components/createArrayOfWidgets';

const WidgetSection: FC = () => {
  return (
    <div className='mb-20 w-full grid justify-items-center items-center grid-cols-4 grid-rows-2 gap-4'>
      {createArrayOfWidgets(weatherExample?.current).map(widget => (
        <Widget
          key={widget.title}
          title={widget.title}
          titleImage={widget.icon}>
          {widget.inner}
        </Widget>
      ))}
    </div>
  );
};

export default WidgetSection;
