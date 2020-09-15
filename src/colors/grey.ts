import { Color, SimplePaletteColorOptions } from './types';

const shades: Color = {
  50: '#fafafa',
  100: '#f1f7f9',
  200: '#f8f8f8',
  300: '#e9e9e9',
  400: '#dbdbdb',
  500: '#cacaca',
  600: '#9c9c9c',
  700: '#595959',
  800: '#35393d',
  900: '#292c2f',
};

const grey: SimplePaletteColorOptions & Color = {
  ...shades,
  main: shades[900],
  light: shades[600],
};

export default grey;
