import text from './text';
import { Color, SimplePaletteColorOptions } from './types';

const shades: Color = {
  50: '#eeeef0',
  100: '#dcdde1',
  200: '#cbccd2',
  300: '#b9bbc3',
  400: '#a8aab4',
  500: '#9799a5',
  600: '#868996',
  700: '#747787',
  800: '#636779',
  900: '#52566a',
};

const darkGraphite: SimplePaletteColorOptions & Color = {
  ...shades,
  main: shades[900],
  light: shades[600],
  contrastText: text.contrast,
};

export default darkGraphite;
