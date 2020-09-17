import text from './text';
import { Color, SimplePaletteColorOptions } from './types';

const shades: Color = {
  50: '#f5e6e7',
  100: '#eccdcf',
  200: '#e3b5b7',
  300: '#d99c9f',
  400: '#d08387',
  500: '#c76a6f',
  600: '#be5257',
  700: '#b4393f',
  800: '#e95646',
  900: '#b40028',
};

const red: SimplePaletteColorOptions & Color = {
  ...shades,
  main: shades[800],
  light: shades[600],
  contrastText: text.contrast,
};

export default red;
