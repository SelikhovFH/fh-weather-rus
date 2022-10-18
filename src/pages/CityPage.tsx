import React, { FC } from 'react';
import Header from '../components/searchbar/Header';
import Subscription from '../components/subscription/Subscription';
import Footer from '../components/footer/Footer';
import Tooltip from '../components/city-page-components/Tooltip';
import GraphSwitcher from '../components/city-page-components/GraphSwitcher';
import Widgets from '../components/city-page-components/Widgets';
import CityTitle from '../components/city-page-components/CityTitle';
import HourlyForecast from '../components/city-page-components/HourlyForecast';

const CityPage: FC = () => {
  return (
    <div className='mx-20 flex flex-col items-center text-white'>
      <Header />
      <CityTitle />
      <HourlyForecast />
      <Widgets />
      {/* <Tooltip /> */}
      {/* <GraphSwitcher /> */}
      <Subscription />
      <Footer />
    </div>
  );
};

export default CityPage;
