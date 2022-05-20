import text from './text';
import { Color, SimplePaletteColorOptions } from './types';

const shades: Color = {
  50: '#f0f9e8',
  100: '#d9f0c5',
  200: '#c0e59f',
  300: '#a6db77',
  400: '#91d357',
  500: '#7dcb35',
  600: '#6dba2d',
  700: '#58a623',
  800: '#387f15',
  900: '#0f7000',
};

const green: SimplePaletteColorOptions & Color = {
  ...shades,
  main: shades[800],
  light: shades[500],
  dark: shades[900],
  contrastText: text.contrast,
};

export default green;
