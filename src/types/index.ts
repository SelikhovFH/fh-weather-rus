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
  titleImage: any;
  title: string;
}

export interface WidgetStaticProps {
  textMain: string;
  textSecondary: string;
}

export interface WidgetCompassProps {
  rotateAngle:
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
  movePosition: string;
}

export interface WidgetSunriseProps {
  sunriseTime: string;
  sunsetTime: string;
  movePosition: string;
}

export interface WidgetPressureProps {
  amount: string | number;
  rotateAngle: string;
}
