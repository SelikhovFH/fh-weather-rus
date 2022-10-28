import { weatherIcons } from 'assets/Icons';
import { getStringTime } from 'helpers';
import React from 'react';
import { HourForecast } from 'types';
import HourCard from 'components/city-page-components/HourlyForecast/components/HourCard';

export const mapHoursWithSunriseAndSunset = ({
  sunrise,
  sunset,
  hourForecast,
}: {
  sunrise: number;
  sunset: number;
  hourForecast: HourForecast[];
}): JSX.Element[] => {
  const renderedHours: JSX.Element[] = [];
  const isRenderSunriseOrSunset = (
    sunriseOrSunset: number,
    itemTime: number,
    text: string,
  ): void => {
    if (
      itemTime - sunriseOrSunset < 3600000 &&
      itemTime - sunriseOrSunset > 0
    ) {
      renderedHours.push(
        <HourCard
          icon={weatherIcons['sunrise']}
          key={sunriseOrSunset}
          text={text}
          time={getStringTime(sunriseOrSunset)}
        />,
      );
    }
  };
  for (let i = 0; i < hourForecast.length; i++) {
    isRenderSunriseOrSunset(sunrise, hourForecast[i].dt, 'Sunrise');
    isRenderSunriseOrSunset(sunset, hourForecast[i].dt, 'Sunset');
    renderedHours.push(
      <HourCard
        icon={weatherIcons[hourForecast[i].weather[0].id]}
        key={hourForecast[i].dt}
        text={`${hourForecast[i].temp}°C`}
        time={i === 0 ? 'Now' : getStringTime(hourForecast[i].dt)}
      />,
    );
  }
  return renderedHours.slice(0, 11);
};
