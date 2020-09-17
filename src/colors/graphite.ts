import text from './text';
import { Color, SimplePaletteColorOptions } from './types';

const shades: Color = {
  50: '#f2f3f6',
  100: '#e6e7ed',
  200: '#dadbe4',
  300: '#cdcfdb',
  400: '#c1c4d2',
  500: '#b5b8c9',
  600: '#a9acc0',
  700: '#9ca0b7',
  800: '#9095af',
  900: '#8489a6',
};

const graphite: SimplePaletteColorOptions & Color = {
  ...shades,
  main: shades[900],
  light: shades[600],
  contrastText: text.contrast,
};

export default graphite;
