import React, { FC } from 'react';
import Header from 'components/Header';
import Subscription from 'components/Subscription';
import Footer from 'components/Footer';
import Tooltip from 'components/city-page-components/ChartSection/components/Tooltip';
import GraphSwitcher from 'components/city-page-components/ChartSection/components/ChartSwitcher';
import WidgetSection from 'components/city-page-components/WidgetSection';
import CityTitle from 'components/city-page-components/CityTitle';
import HourlyForecast from 'components/city-page-components/HourlyForecast';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { PlacesService } from 'services/places.service';
import { GooglePlaceInfo } from 'types';

import { weatherExample } from 'services/weather.service';
import ChartSection from 'components/city-page-components/ChartSection';

const CityPage: FC = () => {
  const { placeId } = useParams<{ placeId: string }>();
  const {
    data: placeInfo,
    isLoading: isLoadingPlaceInfo,
    error: errorPlaceInfo,
  } = useQuery(['placeInfo', placeId], () =>
    PlacesService.getPlaceInfo({
      placeId: placeId as string,
      width: window.screen.width,
    }),
  );

  return (
    <div className='mx-20 flex flex-col items-center text-white'>
      <Header />
      {/* <div className='text-black'>
        {errorPlaceInfo ? (errorPlaceInfo as string) : ''}
      </div> */}
      <CityTitle
        placeName={(placeInfo as GooglePlaceInfo)?.name}
        date={weatherExample?.current?.dt}
        temp={weatherExample?.current?.temp}
        weatherDescription={weatherExample?.current?.weather[0].description}
        image={(placeInfo as GooglePlaceInfo)?.photoUrl}
      />
      <HourlyForecast
        sunset={weatherExample?.current?.sunset}
        sunrise={weatherExample?.current?.sunrise}
        hourForecast={weatherExample?.hourly}
      />
      <WidgetSection currentWeather={weatherExample?.current} />
      <ChartSection dailyForecast={weatherExample?.daily}/>
      <Subscription />
      <Footer />
    </div>
  );
};

export default CityPage;
