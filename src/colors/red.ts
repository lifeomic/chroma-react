import text from './text';
import { Color, SimplePaletteColorOptions } from './types';

const shades: Color = {
  50: '#fdeaef',
  100: '#fccbd5',
  200: '#eb969f',
  300: '#e06e79',
  400: '#eb495a',
  500: '#f13343',
  600: '#e22941',
  700: '#d01e3a',
  800: '#c31533',
  900: '#b40027',
};

const red: SimplePaletteColorOptions & Color = {
  ...shades,
  main: shades[800],
  light: shades[600],
  dark: shades[900],
  contrastText: text.contrast,
};

export default red;
