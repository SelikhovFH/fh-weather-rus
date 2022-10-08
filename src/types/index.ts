// import {JsxElement} from 'typescript';

export interface ButtonProps {
  text: string;
  selected?: boolean;
  disabled?: boolean;
}

export interface AutocompleteProps {
  show: boolean;
}

export interface WidgetWrapperProps {
  children: JSX.Element;
  // image: any;
  title: string;
}

export interface WidgetStaticProps {
  textMain: string;
  textSecondary: string;
}

export interface WidgetCompassProps {
  angle:
    | 'rotate-compass-north'
    | 'rotate-compass-north-west'
    | 'rotate-compass-north-east'
    | 'rotate-compass-south'
    | 'rotate-compass-south-west'
    | 'rotate-compass-south-east'
    | 'rotate-compass-west'
    | 'rotate-compass-east';
}

export interface WidgetUvProps {
  move: string;
}

export interface WidgetSunriseProps {
  sunriseTime: string;
  sunsetTime: string;
  move: string;
}

export interface WidgetPressureProps {
  amount: string | number;
  rotate: string;
}
