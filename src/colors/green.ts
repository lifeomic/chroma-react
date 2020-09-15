import text from './text';
import { Color, SimplePaletteColorOptions } from './types';

const shades: Color = {
  50: '#e6f6ec',
  100: '#cbeed9',
  200: '#b2e5c7',
  300: '#97dcb4',
  400: '#7ed4a2',
  500: '#63cc8f',
  600: '#48c47d',
  700: '#2bbb6a',
  800: '#8cc654',
  900: '#007029',
};

const green: SimplePaletteColorOptions & Color = {
  ...shades,
  main: shades[800],
  light: shades[500],
  contrastText: text.contrast,
};

export default green;
