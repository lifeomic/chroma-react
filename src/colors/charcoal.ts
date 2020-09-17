import text from './text';
import { Color, SimplePaletteColorOptions } from './types';

const shades: Color = {
  50: '#ebebeb',
  100: '#d6d7d8',
  200: '#c2c3c5',
  300: '#aeafb1',
  400: '#9a9c9e',
  500: '#85888a',
  600: '#717477',
  700: '#5d6063',
  800: '#494d50',
  900: '#35393d',
};

const charcoal: SimplePaletteColorOptions & Color = {
  ...shades,
  main: shades[900],
  light: shades[600],
  contrastText: text.contrast,
};

export default charcoal;
