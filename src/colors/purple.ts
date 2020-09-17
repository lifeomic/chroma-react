import text from './text';
import { Color, SimplePaletteColorOptions } from './types';

const shades: Color = {
  50: '#f4e7fe',
  100: '#e8cffe',
  200: '#ddb8fe',
  300: '#d2a0fe',
  400: '#c789fe',
  500: '#bc71fe',
  600: '#b15afe',
  700: '#a642fe',
  800: '#9013fe',
  900: '#5500c9',
};

const purple: SimplePaletteColorOptions & Color = {
  ...shades,
  main: shades[800],
  light: shades[600],
  contrastText: text.contrast,
};

export default purple;
