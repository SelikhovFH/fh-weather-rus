import React, { FC, useEffect } from 'react';
import Header from 'components/Header';
import Subscription from 'components/Subscription';
import Footer from 'components/Footer';
import Tooltip from 'components/city-page-components/Tooltip';
import GraphSwitcher from 'components/city-page-components/GraphSwitcher';
import Widgets from 'components/city-page-components/Widgets';
import CityTitle from 'components/city-page-components/CityTitle';
import HourlyForecast from 'components/city-page-components/HourlyForecast';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
// import { PlacesService } from 'services/places.service';

const CityPage: FC = () => {
  // const { placeId } = useParams<{ placeId: string }>();
  // const { data, isLoading, error } = useQuery('placeInfo', () =>
  //   PlacesService.getPlaceInfo({
  //     placeId: placeId as string,
  //     width: window.screen.width,
  //   }),
  // );

  return (
    <div className='mx-20 flex flex-col items-center text-white'>
      <Header />
      <CityTitle />
      <HourlyForecast />
      <Widgets />
      {/* <Tooltip /> */}
      <GraphSwitcher />
      <Subscription />
      <Footer />
    </div>
  );
};

export default CityPage;
