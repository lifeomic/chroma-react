import text from './text';
import { Color, SimplePaletteColorOptions } from './types';

const shades: Color = {
  50: '#eceef0',
  100: '#d9dde1',
  200: '#c7ccd2',
  300: '#b4bbc3',
  400: '#a2abb4',
  500: '#8f9aa5',
  600: '#7d8996',
  700: '#6a7887',
  800: '#576878',
  900: '#455769',
};

const navy: SimplePaletteColorOptions & Color = {
  ...shades,
  main: shades[900],
  light: shades[700],
  contrastText: text.contrast,
};

export default navy;
