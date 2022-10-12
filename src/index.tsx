import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const WeatherContext = React.createContext('');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <WeatherContext.Provider value={'someValue'}>
          <App />
        </WeatherContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
