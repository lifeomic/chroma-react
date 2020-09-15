import text from './text';
import { Color, SimplePaletteColorOptions } from './types';

const shades: Color = {
  50: '#fdf1e6',
  100: '#fce4cc',
  200: '#fbd7b3',
  300: '#f9c999',
  400: '#f8bc80',
  500: '#f7af66',
  600: '#f5a24d',
  700: '#f49433',
  800: '#f27a00',
  900: '#b14800',
};

const orange: SimplePaletteColorOptions & Color = {
  ...shades,
  main: shades[800],
  light: shades[600],
  contrastText: text.contrast,
};

export default orange;
