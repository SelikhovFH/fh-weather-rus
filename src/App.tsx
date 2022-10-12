import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useQuery } from 'react-query';
import { WeatherService } from './services/weather.service';
import RequireAuth from './hoc/RequireAuth';
import CityPage from './pages/CityPage';
import LoginPage from './pages/LoginPage';
import WeatherPage from './pages/WeatherPage';

const App: FC = () => {
  // const { data, isLoading, error } = useQuery('weatherData', () =>
  //   WeatherService.getAllData({ lat: '44.34', lon: '10.99' }),
  // );
  // const { data, isLoading, error } = useQuery('weatherData', () =>
  //   WeatherService.getCoords({ q: 'Was' }),
  // );
  // console.log(data);
  
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route
        index
        element={
          // Need RequireAuth?
          <RequireAuth>
            <WeatherPage />
          </RequireAuth>
        }
      />
      <Route
        path='city-page'
        element={
          <RequireAuth>
            <CityPage />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default App;
