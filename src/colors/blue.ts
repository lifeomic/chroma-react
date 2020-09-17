import text from './text';
import { Color, SimplePaletteColorOptions } from './types';

const shades: Color = {
  50: '#def4fc',
  100: '#aae3f8',
  200: '#6dd1f4',
  300: '#0abff1',
  400: '#00b2f1',
  500: '#00a4ef',
  600: '#0096e1',
  700: '#0083ce',
  800: '#006eb7',
  900: '#00539a',
};

const blue: SimplePaletteColorOptions & Color = {
  ...shades,
  main: shades[600],
  light: shades[300],
  contrastText: text.contrast,
};

export default blue;
