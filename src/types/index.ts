export interface ButtonProps {
  text: string;
  selected?: boolean;
  disabled?: boolean;
}

export interface WidgetWrapperProps {
  children: JSX.Element;
  titleImage: any;
  title: string;
}

export interface WidgetStaticProps {
  textMain: string;
  textSecondary: string;
}

export interface WidgetCompassProps {
  rotateAngle: number;
  // | 'rotate-compass-north'
  // | 'rotate-compass-north-west'
  // | 'rotate-compass-north-east'
  // | 'rotate-compass-south'
  // | 'rotate-compass-south-west'
  // | 'rotate-compass-south-east'
  // | 'rotate-compass-west'
  // | 'rotate-compass-east';
}

export interface WidgetUvProps {
  movePosition: string;
}

export interface WidgetSunriseProps {
  sunriseTime: string;
  sunsetTime: string;
  movePosition: string;
}

export interface WidgetPressureProps {
  pressureData: number;
}

export interface RequireAuthProps {
  children: JSX.Element;
}

export interface SliderProps {
  pages: JSX.Element[];
}

export interface PaginationProps {
  setSelectedPage: (page: number) => void;
  selectedPage: number;
  pagesLength: number;
}

export interface WeatherCardProps {
  cityName: string;
  mainTemp: number;
  descr: string;
  wind: number;
  humidity: number;
  precipitation: number;
  hourTemp: number[];
}

export interface BackdropShadowProps {
  hidden: boolean;
}

export interface CityTitleProps {
  temp: number;
  image: string;
  placeName: string;
  date: number;
  weatherDescription: string;
}

export interface HourForecast {
  dt: number;
  temp: number;
  weather: {
    id: number;
    main: string;
    description: string;
  }[];
}

export interface HourlyForecastProps {
  hourForecast: HourForecast[];
  sunrise: number;
  sunset: number;
}

export interface HourCardProps {
  icon: string;
  text: string;
  time: string;
}

export interface GooglePlaceInfo {
  name: string;
  lat: number;
  lng: number;
  photoUrl: string;
}
